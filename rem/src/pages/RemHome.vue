<template>
  <rem-not-found v-if="isError" />

  <div class="w-full px-2 pb-4 md:pb-8" v-else>
    <rem-title :loading="isLoading" :title="title" />

    <rem-list class="mt-8" v-if="!isLoading" :list="filmResponse?.items || []" />

    <rem-list-skeleton class="mt-8" v-else />

    <rem-pagination
      v-if="!isLoading"
      :currentPage="currentPage || 1"
      :totalPages="totalPages"
      @change-page="handleChangePage"
      @check-page="checkPage"
    />

    <rem-scrolltop-btn />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import RemTitle from '../components/RemTitle.vue'
import RemList from '../components/RemList.vue'
import RemPagination from '../components/RemPagination.vue'
import RemScrolltopBtn from '../components/RemScrolltopBtn.vue'
import RemListSkeleton from '../components/RemListSkeleton.vue'
import RemNotFound from '../components/RemNotFound.vue'
import { DataResponse } from '../shared/types/film.interface'
import { getList } from '../shared/services/film.service'

const router = useRouter()
const route = useRoute()
const isLoading = ref<boolean>(false)
const filmResponse = ref<DataResponse>()
const currentPage = ref<number>((route.query.page as unknown as number) || 1)
const totalPages = ref<number>(1)
const isError = ref<boolean>(false)
const title = ref<string>('Rem | Phim mới')

const getHome = async (page: number): Promise<void> => {
  title.value = page > 1 ? 'Trang ' + page : 'Phim Mới Cập Nhật'
  document.title = 'Rem | Phim Mới Cập Nhật' + (page > 1 ? ' | Trang ' + page : '')
  isLoading.value = true
  isError.value = false
  getList('phim-moi', { page })
    .then((res) => {
      totalPages.value = Math.ceil(res.pagination.totalItems / res.pagination.totalItemsPerPage)
      filmResponse.value = res
    })
    .catch(() => {
      isError.value = true
    })
    .finally(() => (isLoading.value = false))
}

const checkPage = (page: number): number => {
  if (page < 1) page = 1
  else if (page > totalPages.value) page = totalPages.value
  currentPage.value = page
  return page
}

const handleChangePage = (page: number): void => {
  router.push({ path: '/', query: { page: checkPage(page) } })
}

onMounted(() => getHome(currentPage.value))

watch(
  () => route.query.page,
  () => {
    if (route.name !== 'Home') return
    getHome(currentPage.value)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  { deep: true }
)
</script>

<style></style>
