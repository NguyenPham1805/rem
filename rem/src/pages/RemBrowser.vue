<template>
  <rem-not-found v-if="isError" />

  <rem-title :loading="loading" :title="title" />

  <div class="pt-8" ref="containerRef" v-if="!isError">
    <rem-list :list="list" />

    <rem-list-skeleton v-if="loading" />
  </div>

  <rem-scrolltop-btn />

  <div class="flex p-2 justify-center text-rem-color font-light sm:text-xl" v-if="end">
    Có nhiêu đó phim thôi bữa nào vô lại cập nhật tiếp cho
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Item } from '../shared/types/film.interface'
import RemTitle from '../components/RemTitle.vue'
import RemList from '../components/RemList.vue'
import RemScrolltopBtn from '../components/RemScrolltopBtn.vue'
import RemListSkeleton from '../components/RemListSkeleton.vue'
import RemNotFound from '../components/RemNotFound.vue'
import { getList } from '../shared/services/film.service'
import { headerRoutes } from '../shared/headerRouter'

const route = useRoute()

const list = ref<Item[]>([])
const loading = ref<boolean>(false)
const currentPage = ref<number>(1)
const totalPages = ref<number>(1)
const end = ref<boolean>(false)
const slug = ref<string>(route.params.slug as string)
const containerRef = ref<HTMLDivElement | null>(null)
const title = ref<string>('Rem | Phim mới')
const isError = ref<boolean>(false)

const getListBrowser = async (page: number) => {
  loading.value = true
  isError.value = false

  if (currentPage.value >= totalPages.value) {
    end.value = true
  }

  let _slug = ''

  switch (slug.value) {
    case 'tv-series':
      _slug = 'phim-bo'
      break
    case 'tv-shows':
      _slug = 'tv-shows'
      break
    case 'movie':
      _slug = 'phim-le'
      break
    case 'anime':
      _slug = 'hoat-hinh'
      break
  }

  getList(_slug, { page })
    .then((res) => {
      list.value.push(...res.items)
      totalPages.value = Math.ceil(res.pagination.totalItems / res.pagination.totalItemsPerPage)
    })
    .catch(() => (isError.value = true))
    .finally(() => (loading.value = false))
}

const handleScroll = () => {
  if (
    containerRef.value!.offsetHeight + containerRef.value!.offsetTop <
    document.documentElement.scrollTop + window.innerHeight
  ) {
    if (loading.value || currentPage.value >= (totalPages.value || 1)) return
    getListBrowser(++currentPage.value)
  }
}

const getTitle = () => {
  const headerRoute = headerRoutes.find((route) => route.path === slug.value)
  title.value = headerRoute?.name || ''
  document.title = 'Rem | ' + title.value
}

onMounted(() => {
  getListBrowser(currentPage.value)
  getTitle()
})

window.addEventListener('scroll', handleScroll)

watch(
  () => route.params.slug,
  (_slug) => {
    if (route.name !== 'List') return
    slug.value = _slug as string
    getTitle()
    list.value = []
    currentPage.value = 1
    getListBrowser(currentPage.value)
    end.value = false
  }
)

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
