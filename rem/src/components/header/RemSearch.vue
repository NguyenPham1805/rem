<template>
  <div
    class="min-scroll flex flex-col w-full mb:w-[380px] h-full p-1 fixed z-50 overflow-auto bg-rem-quiet-dark transition-all duration-300"
    :style="[isOpen ? { left: '0%' } : { left: '-100%' }]"
  >
    <div class="flex justify-between mt-2">
      <button class="ml-4" @click="$emit('close')">
        <span class="material-icons-outlined text-2xl md:text-[28px] hover:text-rem-color">
          west
        </span>
      </button>

      <button class="group mr-4 flex items-center hover:text-rem-color" @click="handleSubmit">
        Bộ lọc
        <span class="material-icons-outlined text-2xl md:text-[28px] group-hover:text-rem-color">
          filter_alt
        </span>
      </button>
    </div>

    <div class="flex justify-center">
      <img class="w-28" :src="'/rem-logo.png'" alt="rem logo" />
    </div>

    <form class="flex items-center justify-center w-full" @submit.prevent="handleSubmit">
      <div class="relative">
        <input
          class="outline-0 bg-transparent py-1 px-2 border-0 border-b border-gray-500"
          type="text"
          autocomplete="off"
          id="search-input"
          placeholder="Nhập từ khóa..."
          name="search"
          v-model.trim="keyword"
          @input="handleSearch"
        />

        <button class="absolute right-2 top-2" v-if="keyword.length" @click="handleClearInput">
          <span
            class="material-icons-outlined translate-y-[1px] text-[13px] leading-none font-light bg-rem-color bg-opacity-25 z-10 rounded-full"
          >
            close
          </span>
        </button>

        <span class="border-bottom"></span>
      </div>

      <button>
        <span class="material-icons-outlined">search</span>
      </button>
    </form>

    <div class="flex flex-col mt-2" v-if="!isLoading">
      <div
        class="flex justify-between gap-1 items-center px-2 mt-4"
        v-if="!isType && !!keyword.length"
      >
        <h3 class="text-lg font-semibold leading-normal">
          Kết quả của:
          <span class="text-rem-color">"{{ keyword }}"</span>
        </h3>

        <button
          class="flex w-[105px] hover:text-rem hover:last:text-rem"
          v-if="isHasMore"
          @click="$emit('close')"
        >
          Xem tất cả >>
        </button>
      </div>

      <ul class="flex flex-col mt-3" v-if="!isNotFound">
        <template v-if="searchResponse.length">
          <li
            class="border-b border-gray-500 last:border-0"
            v-for="item in searchResponse"
            @click="$emit('close')"
            :key="item._id"
          >
            <router-link
              class="flex gap-1 py-2 px-1"
              :to="{ name: 'Watch', params: { slug: item.slug } }"
            >
              <img class="w-24 object-cover" v-lazy="imgPipe(item.thumb_url, API_URL)" />

              <div class="flex flex-col flex-wrap p-1">
                <h3 class="text-lg hover:text-rem-color leading-tight font-semibold break-line-2">
                  {{ item.name + ' - ' + item.year }}
                </h3>

                <h4 class="text-rem break-line-2">
                  {{ item.origin_name }}
                </h4>

                <div class="flex flex-wrap">
                  <router-link
                    class="px-2 m-1 text-sm border border-gray-300 text-gray-300 rounded-full hover:bg-rem-so-dark hover:bg-opacity-30"
                    v-for="genre in item.category"
                    :key="genre.id"
                    :to="{ name: 'Category', params: { path: 'genres', slug: genre.slug } }"
                  >
                    {{ genre.name }}
                  </router-link>
                </div>
              </div>
            </router-link>
          </li>
        </template>
      </ul>

      <template v-else-if="keyword.length">
        <div class="flex w-full justify-center">
          <span class="material-icons-outlined text-red-500 text-5xl leading-none"> cancel </span>
        </div>

        <h3 class="text-lg font-semibold">
          Không tìm thấy kết quả liên quan đến
          <span class="text text-rem-color">"{{ keyword }}"</span> !
        </h3>
      </template>
    </div>

    <ul class="min-scroll flex flex-col mt-2" v-else>
      <li class="flex gap-2 p-1" v-for="i in 8" :key="i">
        <div class="skt-item w-16 h-24 rounded-md"></div>

        <div class="flex w-full flex-col gap-3 flex-[1]">
          <div class="skt-item rounded-md w-3/4 h-5"></div>

          <div class="skt-item rounded-md w-2/3 h-5"></div>

          <div class="flex gap-4">
            <div class="skt-item rounded-md w-20 h-5"></div>
            <div class="skt-item rounded-md w-20 h-5"></div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <div
    class="fixed z-40 top-0 left-0 bottom-0 right-0 bg-rem-so-dark bg-opacity-60"
    v-if="isOpen"
    @click="$emit('close')"
  ></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Item } from '../../shared/types/film.interface'
import { getSearch } from '../../shared/services/film.service'
import { imgPipe } from '../../shared/utils'
import { API_URL } from '../../shared/constant'

defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const router = useRouter()

const keyword = ref<string>('')
const isLoading = ref<boolean>(false)
const isType = ref<boolean>(false)
const isNotFound = ref<boolean>(false)
const isHasMore = ref<boolean>()
const searchResponse = ref<Item[]>([])
const timeOutId = ref<NodeJS.Timeout | null>(null)

const handleSearch = (): void => {
  if (keyword.value.trim().length < 1) return
  isLoading.value = true
  isNotFound.value = false

  if (timeOutId.value) clearTimeout(timeOutId.value)

  timeOutId.value = setTimeout(() => {
    getSearch(encodeURIComponent(keyword.value))
      .then((res) => {
        if (!res.items.length) {
          isNotFound.value = true
          return
        }
        searchResponse.value = res.items
        if (res.pagination.totalItems / 24 > 24) isHasMore.value = true
        else isHasMore.value = false
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => (isLoading.value = false))
  }, 1000)
}

const handleClearInput = (): void => {
  keyword.value = ''
  searchResponse.value = []
}

const handleSubmit = () => {
  router.push({ path: '/search', query: { q: keyword.value } })
  emit('close')
}
</script>
