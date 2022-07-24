<template>
  <div class="flex">
    <div class="flex justify-between px-5 py-1 w-full">
      <span class="text-rem-color">Gần nhất: Tập {{ epLastest }}</span>

      <button
        class="flex items-center font-semibold text-sm hover:text-rem-color group"
        @click="() => (isOpen = !isOpen)"
      >
        {{ isOpen ? 'Ẩn bớt' : 'Xem Tất cả' }}
        <span
          class="material-icons group-hover:text-rem-color transition-all"
          :class="isOpen && 'rotate-180'"
        >
          expand_more
        </span>
      </button>
    </div>
  </div>

  <template v-if="isOpen">
    <div class="flex justify-center py-2" v-if="loading">
      <div class="spiner"></div>
    </div>

    <div
      class="flex flex-col px-6 sm:px-8 py-2 sm:pl-10 gap-1 m-1 bg-rem-so-dark bg-opacity-50 max-h-64 overflow-auto min-scroll"
      v-else
    >
      <router-link
        class="group flex flex-col px-2 py-1 hover:bg-rem-quiet-dark hover:bg-opacity-30"
        :to="{ name: 'Watch', params: { slug }, query: { episode_index: ep.epIndex } }"
        v-for="ep in episodes"
        :key="ep.epIndex"
      >
        <h2 class="group-hover:text-rem-color">Tập {{ ep.epName }}</h2>

        <span class="font-light text-gray-400">{{ datePipe(ep.createdAt.seconds * 1000) }}</span>

        <div class="w-full sm:max-w-sm h-1 bg-rem-quiet-dark bg-opacity-50">
          <div
            class="h-full bg-rem-color"
            :style="{ width: (ep.duration !== 0 ? (ep.currentTime / ep.duration) * 100 : 0) + '%' }"
          ></div>
        </div>
      </router-link>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { collection, getDocs, orderBy, query } from '@firebase/firestore'
import { EpisodeHistory } from '../shared/types/film.interface'
import { db } from '../shared/firebase'
import { datePipe } from '../shared/utils'

const props = defineProps<{ uid: string; filmId: string; epLastest: string; slug: string }>()

const loading = ref<boolean>(false)
const isOpen = ref<boolean>(false)
const episodes = ref<EpisodeHistory[] | null>(null)

const handleGetEps = () => {
  if (episodes.value?.length) return
  loading.value = true
  getDocs(
    query(
      collection(db, `users/${props.uid}/recent/${props.filmId}/episode`),
      orderBy('createdAt', 'desc')
    )
  ).then((snapshot) => {
    episodes.value = snapshot.docs.map((doc) => doc.data() as EpisodeHistory)
    loading.value = false
  })
}

watch(() => isOpen.value, handleGetEps)
</script>

<style>
.spiner {
  display: flex;
  width: 2rem;
  height: 2rem;
  border: 3px solid transparent;
  border-top-color: #3cefff;
  border-bottom-color: #3cefff;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

.spiner:before {
  content: '';
  display: block;
  margin: auto;
  width: 0.75rem;
  height: 0.75rem;
  border: 3px solid #3cefff;
  border-radius: 50%;
  animation: pulse 1s alternate ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
</style>
