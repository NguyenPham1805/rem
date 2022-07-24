<template>
  <div class="flex flex-col gap-4 w-full lg:w-[35%]">
    <rem-title :loading="isULoading" :title="'Sắp chiếu'"></rem-title>
    <rem-list :loading="isULoading" :films-un-coming="filmsUncoming?.items"></rem-list>

    <rem-title :loading="isTLoading" :title="'BXH trong năm'"></rem-title>
    <rem-list :loading="isTLoading" :films-top="filmsTop"></rem-list>

    <rem-title v-if="user" :loading="isRLoading" :title="'Xem gần đây'"></rem-title>
    <rem-list v-if="user" :loading="isRLoading" :films-recent="filmsRecent"></rem-list>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { computed } from '@vue/reactivity'
import { collection, getDocs, limit, onSnapshot, orderBy, query, where } from '@firebase/firestore'
import RemList from './RemList.vue'
import RemTitle from '../RemTitle.vue'
import { DataResponse, FilmHistory, FilmInfoFromFirebase } from '../../shared/types/film.interface'
import { getList } from '../../shared/services/film.service'
import { db } from '../../shared/firebase'
import { useStore } from 'vuex'
import { User } from '../../shared/types/user.interface'

const store = useStore<User>()

const isULoading = ref<boolean>(false)
const isTLoading = ref<boolean>(false)
const isRLoading = ref<boolean>(false)
const filmsUncoming = ref<DataResponse | undefined>(undefined)
const filmsTop = ref<FilmInfoFromFirebase[] | undefined>(undefined)
const filmsRecent = ref<FilmHistory[] | undefined>(undefined)
const user = computed<User | null>(() => store.getters.getUser)

const getUncoming = (): void => {
  isULoading.value = true
  getList('phim-sap-chieu').then((film) => {
    isULoading.value = false
    filmsUncoming.value = film
  })
}

const getTop = (): void => {
  isTLoading.value = true
  getDocs(
    query(
      collection(db, 'films'),
      where('year', '>', new Date().getFullYear() - 1),
      orderBy('year', 'desc'),
      limit(10)
    )
  ).then((snapshot) => {
    isTLoading.value = false
    filmsTop.value = snapshot.docs.map((doc) => doc.data() as FilmInfoFromFirebase)
  })
}

const getRecent = (): void => {
  if (!user.value) return
  isRLoading.value = true
  onSnapshot(
    query(
      collection(db, `users/${user.value.uid}/recent`),
      orderBy('createdAt', 'desc'),
      limit(10)
    ),
    (snapshot) => {
      isRLoading.value = false
      filmsRecent.value = snapshot.docs.map((doc) => doc.data() as FilmHistory)
    }
  )
}

onMounted(() => {
  getUncoming()
  getTop()
})

watch(
  () => user.value,
  (user) => {
    if (user) getRecent()
  }
)
</script>
