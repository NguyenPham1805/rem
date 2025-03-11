<template>
  <rem-title :loading="false" title="Tìm kiếm hàng hiệu" />

  <div class="flex flex-col mt-6">
    <form
      class="flex w-full items-center justify-center sm:justify-end px-4"
      @submit.prevent="handleSearchByKeyword"
    >
      <div class="group relative">
        <input
          class="peer bg-transparent outline-none border-0 border-b border-rem-light py-[2px] px-2"
          type="text"
          placeholder="Nhập từ khóa..."
          autocomplete="off"
          name="search"
          v-model.trim="keyword"
        />

        <button
          class="absolute right-1 top-1"
          type="button"
          v-if="keyword.length"
          @click="() => (keyword = '')"
        >
          <span
            class="material-icons-outlined translate-y-[1px] text-[13px] leading-none font-light bg-rem-color bg-opacity-25 z-10 rounded-full"
          >
            close
          </span>
        </button>

        <span
          class="absolute bg-rem-color h-[1px] left-0 right-0 bottom-0 scale-0 transition-all duration-500 peer-focus:scale-100"
        ></span>
      </div>

      <button class="flex">
        <span class="material-icons-outlined">search</span>
      </button>
    </form>

    <h1
      class="text-xl border-b-2 border-rem-color text-rem-color flex items-center mt-4 w-fit cursor-pointer"
    >
      <span class="material-icons-outlined text-rem-color">filter_alt</span>
      Lọc Phim
    </h1>

    <div class="flex items-center flex-wrap gap-1 sm:gap-2 px-2 py-1 m-1 mt-2 max-w-lg">
      <rem-select
        v-for="(value, key) in filter"
        :key="key"
        :item-select="value"
        :keySelect="(key as string)"
        @change-value="(_value) => handleSetValueFilter(key as string, _value)"
        @delete="() => handleDeleteFilter(key as string)"
      />

      <div class="relative" v-rem-click-away="() => handleOpenFilterPopup(false)">
        <button
          class="group border rounded text-sm sm:text-base hover:text-rem-color border-rem-color px-2 py-1 flex items-center active:opacity-70 bg-rem-dark"
          @click.stop="handleOpenFilterPopup(!isPopupOpen)"
        >
          Thêm điều kiện lọc
          <span
            class="material-icons-outlined group-hover:text-rem-color text-[1.3rem] sm:text-[1.5rem]"
          >
            add
          </span>
        </button>

        <div
          class="absolute top-[120%] -left-3 z-10 w-48 sm:w-52 md:w-64 rounded-sm overflow-hidden bg-rem-so-dark transition-all duration-300"
          :style="{ height: popupHeight + 'px' }"
          v-show="isPopupOpen"
        >
          <div
            class="relative duration-300 transition-all bg-rem-dark bg-opacity-30"
            :style="{ height: popupHeight + 'px' }"
          >
            <div
              class="absolute bottom-0 w-48 sm:w-52 md:w-64 flex flex-col justify-center transition-all duration-300"
              :class="popupFilterActive === 'main' ? 'left-0 opacity-100' : '-left-full opacity-0'"
              ref="mainPopupRef"
            >
              <ul class="flex flex-col cursor-pointer justify-between transition duration-300">
                <template v-for="(_value, key) in filterObj(_filter, filter)" :key="key">
                  <li
                    class="flex justify-between items-center px-2 py-1 sm:px-3 sm:py-2 hover:bg-rem-quiet-dark"
                    @click="setPopupActive('menu', key as PopupFilterType)"
                    v-if="!(key in filter)"
                  >
                    {{ keySelectPipe(key as string) }}

                    <span class="material-icons">chevron_right</span>
                  </li>
                </template>
              </ul>
            </div>

            <template v-for="(value, key) in _filter" :key="key">
              <div
                class="absolute top-0 max-h-full w-48 sm:w-52 md:w-64 transition-all duration-300 overflow-x-hidden overflow-y-auto min-scroll"
                :class="popupFilterActive === key ? 'right-0 opacity-100' : '-right-full opacity-0'"
                v-if="!(key in filter)"
              >
                <div class="flex flex-col" ref="menuPopupRef">
                  <h1
                    class="flex px-1 py-2 sm:px-2 sm:py-3 cursor-pointer font-semibold border-b border-gray-200"
                    @click="handleOpenFilterPopup(true)"
                  >
                    <span class="material-icons mr-1"> chevron_left </span>

                    {{keySelectPipe(key as string)}}
                  </h1>

                  <ul class="flex flex-col cursor-pointer justify-between transition duration-300">
                    <li
                      class="flex justify-between items-center px-2 py-1 sm:px-3 sm:py-2 hover:bg-rem-quiet-dark"
                      v-for="link in value"
                      :key="link.slug"
                      @click="handleSetValueFilter(key as string, link)"
                    >
                      {{ link.name }}
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <button
      class="rouded flex items-center gap-1 w-fit px-2 py-1 mt-2 rounded bg-rem-color text-rem-so-dark font-semibold active:opacity-70"
      :class="(checkObjEmpty(filter) || loading) && 'opacity-50 select-none pointer-events-none'"
      @click="handleFilter"
    >
      Duyệt phim

      <svg viewBox="25 25 50 50" v-if="loading">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
    </button>
  </div>

  <div class="mt-4" ref="containerRef" v-if="!isError">
    <rem-list-skeleton v-if="loading" />

    <rem-list :list="list" />
  </div>

  <div class="flex flex-col items-center justify-center" v-else>
    <h2 class="text-2xl">Không tìm thấy kết quả cho danh mục bạn tìm kiếm</h2>
  </div>

  <rem-scrolltop-btn />
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import RemList from '../components/RemList.vue'
import RemListSkeleton from '../components/RemListSkeleton.vue'
import RemScrolltopBtn from '../components/RemScrolltopBtn.vue'
import RemSelect from '../components/RemSelect.vue'
import RemTitle from '../components/RemTitle.vue'
import { filter as _filter } from '../shared/constant'
import { getList, getSearch } from '../shared/services/film.service'
import { Item, Link } from '../shared/types/film.interface'
import { checkObjEmpty, filterObj, keySelectPipe } from '../shared/utils'

type PopupFilterType = 'slug' | 'category' | 'country' | 'year' | 'sortField' | 'main'

const route = useRoute()
const router = useRouter()

const loading = ref<boolean>(true)
const isError = ref<boolean>(false)
const isPopupOpen = ref<boolean>(false)
const end = ref<boolean>(false)

const list = ref<Item[]>([])
const keyword = ref<string>('')
const currentPage = ref<number>(1)
const totalPages = ref<number>(1)
const containerRef = ref<HTMLDivElement | null>(null)
const mainPopupRef = ref<HTMLUListElement | null>(null)
const menuPopupRef = ref<HTMLUListElement[] | null>(null)
const popupFilterActive = ref<PopupFilterType>('main')
const popupHeight = ref<number>(0)
let currentQuery: Record<string, any> = {}

const popups: { [key: string]: any } = {
  main: mainPopupRef,
  menu: menuPopupRef
}

const filter = reactive<{ [key: string]: Link }>({})

const handleSearch = (page: number, merge: boolean = false): void => {
  if (page > totalPages.value) return
  loading.value = true
  isError.value = false
  end.value = false
  const q = route.query.q as string
  if (q) {
    getSearch(q, page)
      .then((res) => {
        if (merge) list.value.push(...res.items)
        else list.value = res.items
        totalPages.value = Math.ceil(res.pagination.totalItems / res.pagination.totalItemsPerPage)
      })
      .catch(() => (isError.value = true))
      .finally(() => (loading.value = false))
  } else {
    currentQuery.page = page
    getList(route.query.slug as any, currentQuery)
      .then((res) => {
        if (merge) list.value.push(...res.items)
        else list.value = res.items
        totalPages.value = Math.ceil(res.pagination.totalItems / res.pagination.totalItemsPerPage)
        currentPage.value >= totalPages.value && (end.value = true)
      })
      .catch(() => (isError.value = true))
      .finally(() => (loading.value = false))
  }
}

const changePopupHeight = (key: string): void => {
  if (popups[key]?.value) {
    setTimeout(() => {
      if (key === 'main') {
        popupHeight.value = popups[key].value.offsetHeight
      } else {
        popupHeight.value = 350
      }
    }, 0)
  }
}

const setPopupActive = (key: string, popupKeyActive: PopupFilterType): void => {
  popupFilterActive.value = popupKeyActive
  changePopupHeight(key)
}

const handleOpenFilterPopup = (isOpen: boolean): void => {
  setTimeout(() => {
    popupFilterActive.value = 'main'
    changePopupHeight('main')
    isPopupOpen.value = isOpen
  }, 0)
}

const handleSetValueFilter = (key: string, value: Link): void => {
  filter[key] = value
}

const handleDeleteFilter = (key: string): void => {
  delete filter[key]
  handleOpenFilterPopup(false)
}

const handleFilter = (): void => {
  if (checkObjEmpty(filter)) return
  router.push({
    query: {
      slug: filter['slug']?.slug,
      category: filter['category']?.slug,
      sortField: filter['sortField']?.slug,
      country: filter['country']?.slug,
      year: filter['year']?.slug
    }
  })
}

const handleSearchByKeyword = (): void => {
  loading.value = true
  router.push({ query: { ...currentQuery, q: keyword.value } })
}

const handleScroll = () => {
  if (end.value) return
  if (
    containerRef.value!.offsetHeight + containerRef.value!.offsetTop <
    document.documentElement.scrollTop + window.innerHeight
  ) {
    if (loading.value || currentPage.value >= (totalPages.value || 1)) return
    currentPage.value++
  }
}

window.addEventListener('scroll', handleScroll)

watch(
  () => route.query,
  () => {
    loading.value = true
    list.value = []
    currentQuery = {
      slug: route.query.slug,
      category: route.query.category,
      sortField: route.query.sortField,
      country: route.query.country,
      year: route.query.year,
      page: route.query.page,
      keyword: route.query.q
    }
    if (route.name !== 'Search') return
    handleSearch(currentPage.value)
  }
)

watch(
  () => currentPage.value,
  (page) => {
    handleSearch(page, true)
  }
)

onMounted(() => {
  document.title = 'Rem | Tìm kiếm phim phiên bản hàng hiệu'
  handleSearch(1)
})

onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style>
svg {
  width: 20px;
  transform-origin: center;
  animation: rotate 2s linear infinite;
}

circle {
  fill: none;
  stroke: #020202;
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
</style>
