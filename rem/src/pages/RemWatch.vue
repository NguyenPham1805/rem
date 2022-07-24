<template>
  <rem-not-found v-if="isError" />

  <div class="w-full pb-4 md:pb-8" v-else>
    <rem-title :loading="loading" title="Tập 1" />

    <rem-player
      :loading="loading"
      :uid="user?.uid"
      :film-id="film?.movie._id || null"
      :prev-ep="prevEp"
      :prev-ep-name="prevEpName"
      :source="currentSource"
      :ep-index="currentEp"
      :name="film?.movie.name || null"
      :ep-name="currentEpName"
      :total-ep="film?.episodes[0].server_data.length || 0"
      @change-ep="handleChangeEp"
    />

    <rem-info
      :loading="loading"
      :current-ep-index="currentEp"
      :info="film?.movie || null"
      :ep-watched="epHasWatched"
      :episodes="film?.episodes || null"
      @change-ep="handleChangeEpIndex"
    />

    <rem-comment :loading="loading" :id="filmId" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { User } from '@firebase/auth'
import { setDoc, doc, collection, query, onSnapshot, serverTimestamp } from '@firebase/firestore'
import RemTitle from '../components/RemTitle.vue'
import RemPlayer from '../components/player/RemPlayer.vue'
import RemInfo from '../components/RemInfo.vue'
import RemComment from '../components/comment/RemComment.vue'
import RemNotFound from '../components/RemNotFound.vue'
import { FilmResponse, Source } from '../shared/types/film.interface'
import { getFilm as getFilmService } from '../shared/services/film.service'
import { db } from '../shared/firebase'

const route = useRoute()
const router = useRouter()
const store = useStore<User>()

const loading = ref<boolean>(false)
const isError = ref<boolean>(false)
const prevEp = ref<number>(0)
const prevEpName = ref<string>('1')
const currentSource = ref<string | undefined>(undefined)
const currentEp = ref<number>(Number(route.query.episode_index) || 0)
const currentEpName = ref<string | null>(null)
const filmId = ref<string | null>(null)
const film = ref<FilmResponse | null>(null)
const epHasWatched = ref<number[]>([])
const user = computed<User | null>(() => store.getters.getUser)

const getFilm = async (): Promise<void | Source> => {
  loading.value = true
  isError.value = false
  return getFilmService(String(route.params.slug))
    .then((res) => {
      film.value = res
      filmId.value = res.movie._id
      currentEp.value = Number(route.query.episode_index) || 0
      currentEpName.value = res.episodes[0].server_data[currentEp.value || 0]?.name || null
      currentSource.value = res.episodes[0].server_data[currentEp.value || 0]?.link_m3u8

      return res
    })
    .catch((err) => {
      console.log(err)
      isError.value = true
    })
    .finally(() => (loading.value = false))
}

const handleChangeEp = (ep: 'prev' | 'next'): void => {
  prevEp.value = currentEp.value
  prevEpName.value = currentEpName.value || '1'

  switch (ep) {
    case 'prev':
      setTimeout(() => {
        if (currentEp.value > 0) router.push({ query: { episode_index: currentEp.value - 1 } })
      }, 0)
      break
    case 'next':
      if (
        film.value?.episodes[0].server_data.length &&
        currentEp.value < film.value?.episodes[0].server_data.length
      )
        setTimeout(() => {
          router.push({ query: { episode_index: currentEp.value + 1 } })
        }, 0)
      break
  }
}

const handleChangeEpIndex = (ep: number): void => {
  prevEp.value = currentEp.value
  prevEpName.value = currentEpName.value || '1'
  setTimeout(() => {
    router.push({ query: { episode_index: ep } })
  }, 0)
}

onMounted(() => {
  getFilm().then((res) => {
    if (user.value && res) {
      const { name, slug, type, category, origin_name: originName, thumb_url } = res.movie
      if (type !== 'single') {
        onSnapshot(
          query(collection(db, `users/${user.value.uid}/recent/${res.movie._id}/episode`)),
          (snapshot) => {
            if (snapshot.empty) {
              setDoc(doc(db, `users/${user.value!.uid}/recent/${res.movie._id}`), {
                name,
                slug,
                type,
                category,
                originName,
                thumb_url: thumb_url.split('/')[thumb_url.split('/').length - 1] || '',
                createdAt: serverTimestamp(),
                epLastest: currentEp.value || 0,
                epLastestName: prevEpName.value
              })
            } else {
              epHasWatched.value = snapshot.docs.map((doc) => {
                return doc.data().epIndex
              })
            }
          }
        )
      } else {
        epHasWatched.value = []
      }
    }
  })
})

watch(
  () => route.query.episode_index,
  (ep) => {
    currentEp.value = Number(ep)
    currentEpName.value = film.value?.episodes[0].server_data[currentEp.value || 0]?.name || null
    currentSource.value = film.value?.episodes[0].server_data[currentEp.value || 0]?.link_m3u8
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  { deep: true }
)

watch(
  () => route.params.slug,
  (slug) => {
    if (route.name !== 'Watch') return
    slug = slug as string
    window.scrollTo({ top: 0, behavior: 'smooth' })
    getFilm()
  }
)
</script>
