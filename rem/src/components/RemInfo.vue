<template>
  <div class="flex flex-col p-1 mt-2" v-if="!loading && info">
    <div class="flex flex-wrap">
      <router-link
        class="mx-1 text-rem text-sm"
        v-for="tag in info.category"
        :key="toSlugPipe(tag.name)"
        :to="{ name: 'Category', params: { path: 'genres', slug: toSlugPipe(tag.name) } }"
      >
        {{ '#' + tag.name }}
      </router-link>

      <router-link
        class="mx-1 text-rem text-sm"
        :to="{ name: 'List', params: { slug: toSlugPipe(typeToTag(info.type)) } }"
      >
        {{ '#' + typeToTag(info.type) }}
      </router-link>
    </div>

    <div class="flex flex-col">
      <h2 class="text-lg leading-6">
        {{ info.name }}
      </h2>

      <h3 class="italic text-rem">{{ info.origin_name }}</h3>
    </div>

    <p class="text-gray-400 text-xs">{{ infoFromFirebase?.views + ' lượt xem - ' + info.year }}</p>

    <div class="flex items-center justify-between px-4 sm:px-6 gap-1">
      <div class="flex gap-5">
        <button
          class="group flex leading-none flex-col sm:flex-row items-center sm:gap-1 hover:text-rem-color"
          title="Thích"
          @click="handleReaction(1)"
          :class="!user && 'pointer-events-none select-none'"
        >
          <span
            class="group-hover:text-rem-color text-xl"
            :class="
              checkReactionPipe(reaction || {}, user?.uid, 1)
                ? 'material-icons text-rem-color'
                : 'material-icons-outlined'
            "
          >
            thumb_up
          </span>
          {{ reactionPipe(reaction || {}, 1) }}
        </button>

        <button
          class="group flex leading-none flex-col sm:flex-row items-center sm:gap-1 hover:text-rem-color"
          :class="!user && 'pointer-events-none select-none'"
          title="Không thích"
          @click="handleReaction(2)"
        >
          <span
            class="group-hover:text-rem-color text-xl translate-x-[-2px]"
            :class="
              checkReactionPipe(reaction || {}, user?.uid, 2)
                ? 'material-icons text-rem-color'
                : 'material-icons-outlined'
            "
          >
            thumb_down
          </span>
          {{ reactionPipe(reaction || {}, 2) }}
        </button>
      </div>

      <div class="flex items-start sm:items-center gap-5 relative">
        <div class="flex" v-rem-click-away="() => (isRatingOpen = false)">
          <div
            class="flex gap-1 p-2 bg-rem-quiet-dark absolute -top-12 -left-1/3 rounded before:absolute before:content-[''] before:-bottom-2 before:left-2/3 before:w-5 before:h-5 before:rotate-45 before:bg-rem-quiet-dark"
            v-show="isRatingOpen"
          >
            <span
              class="material-icons h-fit w-fit text-[22px] leading-none cursor-pointer"
              :class="i <= (rating?.[user?.uid || ''] || 0) && 'text-yellow-400'"
              v-for="i in 10"
              @click="() => handleRating(i)"
              :title="`${i} sao`"
              :key="i"
            >
              star
            </span>
          </div>

          <button
            class="group flex leading-none flex-col sm:flex-row items-center sm:gap-1 hover:text-yellow-400"
            :class="{
              ['pointer-events-none select-none']: !user,
              ['text-yellow-400']: checkRatingPipe(rating || {}, user?.uid)
            }"
            @click="() => (isRatingOpen = true)"
            title="Đánh giá"
          >
            <span
              class="material-icons-outlined group-hover:text-yellow-400"
              :class="checkRatingPipe(rating || {}, user?.uid) && 'text-yellow-400'"
            >
              {{ checkRatingPipe(rating || {}, user?.uid) ? 'star' : 'star_border' }}
            </span>
            {{ ratingPipe(rating || {}).rating }}
            {{ ratingPipe(rating || {}).totalUserRating }} lượt đánh giá
          </button>
        </div>

        <button
          class="group flex leading-none items-center gap-1 text-red-500 transition border border-red-500 min-w-[100px] p-1 sm:px-2 hover:text-white hover:bg-red-500 rounded-md justify-self-end"
          :class="{
            ['pointer-events-none select-none']: !user,
            ['text-white bg-red-500']: checkFolowPipe(folows || {}, user?.uid)
          }"
          @click="() => handleFolow(checkFolowPipe(folows || {}, user?.uid) ? 0 : 1)"
          title="Theo dõi"
        >
          <span
            class="material-icons-outlined text-red-500 transition group-hover:text-white text-xl"
            :class="checkFolowPipe(folows || {}, user?.uid) && 'text-white text-xl'"
          >
            {{ checkFolowPipe(folows || {}, user?.uid) ? 'favorite' : 'favorite_border' }}
          </span>
          {{ checkFolowPipe(folows || {}, user?.uid) ? 'Đã theo dõi' : 'Theo dõi' }}
        </button>
      </div>
    </div>

    <h2 class="flex items-center w-fit my-3 text-lg text-rem-color border-b-2 border-rem-color">
      <span class="material-icons text-rem-color text-xl"> format_list_bulleted </span>
      Danh sách tập
    </h2>

    <div class="flex flex-col" v-for="epList in episodes" :key="epList.server_name">
      <h3 class="text-sm uppercase">Server: {{ epList.server_name }}</h3>

      <div class="flex flex-col p-1">
        <div class="bg-rem-so-dark bg-opacity-50 flex gap-2 justify-center flex-wrap p-2">
          <button
            class="w-12 h-8 md:w-14 md:h-10 flex items-center justify-center transition rounded border border-rem-color text-rem-color hover:bg-rem-color hover:text-rem-dark"
            v-for="(ep, index) in epList.server_data"
            :class="{
              'bg-rem-so-dark': epWatched.includes(index) && (currentEpIndex || 0) !== index,
              'bg-rem-color text-rem-dark': (currentEpIndex || 0) == index
            }"
            @click="$emit('change-ep', index)"
            :key="ep.slug"
          >
            {{ ep.name.length ? ep.name : 'N/A' }}
          </button>
        </div>
      </div>
    </div>

    <h2 class="flex items-center w-fit my-3 text-lg text-rem-color border-b-2 border-rem-color">
      <span class="material-icons-outlined text-rem-color text-xl"> sticky_note_2 </span>
      Tóm tắt phim
    </h2>

    <div class="p-2">
      <div class="flex bg-rem-so-dark p-2 bg-opacity-50 font-light">
        {{ contentPipe(info.content) }}
      </div>
    </div>

    <!-- <h2 class="flex items-center w-fit my-3 text-lg text-rem-color border-b-2 border-rem-color">
      <span class="material-icons-outlined text-rem-color text-xl"> interpreter_mode </span>
      Diễn viên/lồng tiếng
    </h2> -->

    <!-- <div class="p-1">
      <div class="bg-rem-so-dark bg-opacity-50 p-2">
        <template v-if="info.actor[0].length">
          <span
            class="text-rem-color m-1 text-sm sm:text-base font-normal"
            v-for="actor in info.actor"
          >
            {{ actor }},
          </span>
        </template>

        <p class="text-rem-color" v-else>N/A</p>
      </div>
    </div> -->
  </div>

  <div class="flex flex-col p-1 mt-2 gap-4" v-else>
    <div class="flex gap-4">
      <div class="skt-item w-16 rounded-md h-5"></div>
      <div class="skt-item w-16 rounded-md h-5"></div>
      <div class="skt-item w-16 rounded-md h-5"></div>
    </div>

    <div class="skt-item w-3/4 h-6 rounded-md"></div>

    <div class="skt-item w-3/5 h-6 rounded-md"></div>

    <div class="skt-item w-24 h-5 rounded-md"></div>

    <div class="flex justify-center">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
    </div>

    <div class="flex flex-col mt-2 gap-4" v-for="i in 3" :key="i">
      <div class="skt-item w-24 h-6 rounded-md"></div>

      <div class="flex justify-center min-h-[100px] items-center bg-rem-so-dark bg-opacity-50 p-4">
        <div class="spinner">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { doc, getDoc, setDoc, updateDoc } from '@firebase/firestore'
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { db } from '../shared/firebase'
import { DataLink, FilmInfo, FilmInfoFromFirebase } from '../shared/types/film.interface'
import { User } from '../shared/types/user.interface'
import {
  checkFolowPipe,
  checkRatingPipe,
  checkReactionPipe,
  contentPipe,
  ratingPipe,
  reactionPipe,
  toSlugPipe,
  typeToTag
} from '../shared/utils'

interface Props {
  info: FilmInfo | null
  currentEpIndex: number | string
  epWatched: number[]
  episodes:
    | {
        server_name: string
        server_data: DataLink[]
      }[]
    | null
  loading: boolean
}

const props = defineProps<Props>()
defineEmits<{ (e: 'change-ep', epIndex: number): void }>()

const store = useStore<User>()

const isRatingOpen = ref<boolean>(false)
const id = computed(() => props.info?._id)
const isFilmInfoFromFirebaseLoading = ref<boolean>(true)
const infoFromFirebase = ref<FilmInfoFromFirebase | null>(null)
const folows = computed(() => infoFromFirebase.value?.folows)
const rating = computed(() => infoFromFirebase.value?.rating)
const reaction = computed(() => infoFromFirebase.value?.reaction)
const user = computed<User | null>(() => store.getters.getUser)

const handleRating = (star: number): void => {
  if (!user.value) return

  updateDoc(doc(db, `films/${props.info!._id}`), {
    [`rating.${user.value.uid}`]: star
  })

  infoFromFirebase.value!.rating = { ...infoFromFirebase.value!.rating, [user.value.uid]: star }

  isRatingOpen.value = false
}

const addFilmInfoToFirebase = (filmId: string, film: FilmInfoFromFirebase): void => {
  setDoc(doc(db, `films/${filmId}`), film)
}

const updateViewsFilm = (views: number): void => {
  updateDoc(doc(db, `films/${props.info!._id}`), {
    ['views']: views
  })
}

const handleFolow = (value: number): void => {
  if (!user.value) return

  updateDoc(doc(db, `films/${props.info!._id}`), {
    [`folows.${user.value.uid}`]: value
  })

  infoFromFirebase.value!.folows = { [user.value.uid]: value }
}

const handleReaction = (type: number): void => {
  if (!user.value) return

  const reaction =
    Object.entries(infoFromFirebase.value!.reaction || {}).find(
      (react) => react[0] === user.value?.uid
    )?.[1] === type
      ? 0
      : type

  updateDoc(doc(db, `films/${props.info!._id}`), {
    [`reaction.${user.value.uid}`]: reaction
  })

  infoFromFirebase.value!.reaction = {
    ...infoFromFirebase.value!.reaction,
    [user.value.uid]: reaction
  }
}

watch(
  () => id.value,
  (id) => {
    getDoc(doc(db, `films/${id}`)).then((res) => {
      const defaultInfo = {
        name: props.info?.name || '',
        slug: props.info?.slug || '',
        thumb_url:
          props.info?.thumb_url!,
        year: props.info?.year || new Date().getFullYear(),
        country: props.info?.country[0].name || '',
        folows: {},
        rating: {},
        reaction: {},
        views: 1
      }

      if (!res.exists()) {
        infoFromFirebase.value = defaultInfo
        addFilmInfoToFirebase(props.info!._id, defaultInfo)
        return
      }

      const info = res.data() as FilmInfoFromFirebase

      infoFromFirebase.value = info || defaultInfo

      isFilmInfoFromFirebaseLoading.value = false

      updateViewsFilm(info.views + 1)
    })
  }
)
</script>

<style scoped>
svg {
  width: 3rem;
  transform-origin: center;
  animation: rotate 2s linear infinite;
}

circle {
  fill: none;
  stroke: #757575;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}

.spinner {
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
}

.spinner > div {
  background-color: #9c9c9c;
  height: 100%;
  width: 6px;
  margin: 0 2px;
  display: inline-block;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  animation-delay: -1.1s;
}

.spinner .rect3 {
  animation-delay: -1s;
}

.spinner .rect4 {
  animation-delay: -0.9s;
}

.spinner .rect5 {
  animation-delay: -0.8s;
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
