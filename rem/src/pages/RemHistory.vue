<template>
  <rem-title title="Lịch sử" :loading="false" />

  <div class="flex justify-center text-xl mt-4 font-normal" v-if="!user">
    Hãy <button class="text-rem text-xl mx-1" @click="openSignIn">đăng nhập</button> để trải nghiệm
    tính năng này
  </div>

  <template v-else>
    <div class="flex flex-col gap-3 sm:gap-4 mt-4" v-if="loading">
      <div class="flex gap-1" v-for="i in 5" :key="i">
        <div class="w-28 sm:w-32 md:w-36 drop-shadow-lg skt-item"></div>

        <div class="flex flex-col w-full gap-2">
          <div class="w-[90%] h-5 rounded-md skt-item"></div>
          <div class="w-[60%] h-5 rounded-md skt-item"></div>

          <div class="w-[90%] h-4 rounded-md skt-item"></div>
          <div class="w-[50%] h-4 rounded-md skt-item"></div>

          <div class="w-20 h-4 rounded-full skt-item"></div>
          <div class="w-20 h-4 rounded-full skt-item"></div>
          <div class="w-20 h-4 rounded-full skt-item"></div>
          <div class="w-20 h-4 rounded-full skt-item"></div>
        </div>
      </div>
    </div>

    <template v-else>
      <div class="flex justify-center text-xl mt-4" v-if="!filmsHistory?.length">
        Bạn không có lịch sử đã xem nào
      </div>

      <div class="flex mt-4 flex-col gap-3 sm:gap-4" ref="containerRef" v-else>
        <div
          class="flex flex-col bg-rem-so-dark bg-opacity-50"
          v-for="item in filmsHistory"
          :key="item.slug"
        >
          <router-link
            class="flex gap-2 p-1 hover:bg-gray-600 hover:bg-opacity-30"
            :to="{
              name: 'Watch',
              params: { slug: item.slug },
              query: { episode_index: item.epLastest || 0 }
            }"
          >
            <img
              class="w-28 sm:w-32 md:w-36 object-cover"
              v-lazy="imgPipe(item.thumb_url, API_URL)"
            />

            <div class="flex flex-col gap-1">
              <h2 class="break-line-2 text-lg sm:text-2xl leading-5">{{ item.name }}</h2>

              <p class="break-line-2 sm:text-xl text-gray-400 leading-5">{{ item.originName }}</p>

              <div class="flex flex-wrap gap-1 p-1">
                <span
                  class="text-[13px] sm:text:sm md:text-base text-rem"
                  v-for="tag in item.category"
                  :key="tag.name"
                >
                  #{{ tag.name }}
                </span>
              </div>
            </div>
          </router-link>

          <rem-ep-history
            v-if="item.type !== 'single'"
            :film-id="item.id!"
            :uid="user.uid"
            :ep-lastest="item.epLastestName"
            :slug="item.slug"
          />
        </div>
      </div>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, onUnmounted, watch } from 'vue'
import { useStore } from 'vuex'
import {
  collection,
  DocumentData,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot
} from '@firebase/firestore'
import RemTitle from '../components/RemTitle.vue'
import RemEpHistory from '../components/RemEpHistory.vue'
import { imgPipe } from '../shared/utils'
import { FilmHistory } from '../shared/types/film.interface'
import { User } from '../shared/types/user.interface'
import { db } from '../shared/firebase'
import { API_URL } from '../shared/constant'
import { UserAction } from '../store/user/user.actions'

const store = useStore<User>()

const loading = ref<boolean>(false)
const filmsHistory = ref<FilmHistory[]>([])
const total = ref<number>(0)
const lastEpDoc = ref<QueryDocumentSnapshot<DocumentData> | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const user = computed<User | null>(() => store.getters.getUser)

const openSignIn = (): void => {
  store.dispatch(UserAction.TOGGLE_SIGN_IN, true)
}

const getHistory = () => {
  loading.value = true
  getDocs(
    query(
      collection(db, `users/${user.value?.uid}/recent`),
      orderBy('createdAt', 'desc'),
      limit(10)
    )
  ).then((snapshot) => {
    total.value = snapshot.size
    lastEpDoc.value = snapshot.docs[snapshot.docs.length - 1]
    filmsHistory.value = [
      ...filmsHistory.value,
      ...snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as FilmHistory))
    ]
    loading.value = false
  })
}

const handleScroll = () => {
  if (!containerRef.value) return
  if (
    containerRef.value.offsetHeight + containerRef.value.offsetTop <
    document.documentElement.scrollTop + window.innerHeight
  ) {
    if (filmsHistory.value.length >= total.value) return
    getHistory()
  }
}

watch(
  () => user.value,
  (user) => {
    if (user) getHistory()
  }
)

window.addEventListener('scroll', handleScroll)

onMounted(() => {
  document.title = 'Rem | lịch sử'
  if (user.value) getHistory()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
