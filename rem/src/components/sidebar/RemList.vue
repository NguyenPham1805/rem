<template>
  <ul
    class="min-scroll flex flex-col w-full max-h-[85vh] py-2 px-1 mt-4 overflow-auto bg-rem-so-dark"
    v-if="loading"
  >
    <li class="flex gap-2 p-1" v-for="i in 4" :key="i">
      <div class="skt-item w-16 h-24 rounded-md"></div>

      <div class="flex w-full flex-col gap-3 flex-[1]">
        <div class="skt-item rounded-md w-40 md:w-64 h-5"></div>

        <div class="skt-item rounded-md w-36 md:w-56 h-5"></div>

        <div class="flex gap-4">
          <div class="skt-item rounded-md w-16 md:w-20 h-5"></div>
          <div class="skt-item rounded-md w-16 md:w-20 h-5"></div>
        </div>
      </div>
    </li>
  </ul>

  <ul
    class="min-scroll flex flex-col w-full max-h-[85vh] py-2 px-1 mt-4 overflow-auto bg-rem-so-dark"
    v-else
  >
    <template v-if="filmsUnComing">
      <li
        class="border-b last:border-0 border-stone-500 border-opacity-50"
        v-for="film in filmsUnComing"
        :key="film._id"
      >
        <router-link
          class="flex gap-2 p-1 hover:bg-gray-600 hover:bg-opacity-30"
          :to="{ name: 'Watch', params: { slug: film.slug } }"
        >
          <img class="w-16 rounded object-cover" v-lazy="imgPipe(film.thumb_url, API_URL)" />

          <div class="flex flex-col">
            <h2 class="break-line text-lg">{{ film.name }}</h2>
            <span class="break-line text-gray-400 font-light">{{ film.origin_name }}</span>
            <span class="capitalize text-sm">
              {{ film.time.length ? film.time : 'N/A' }}
            </span>
          </div>
        </router-link>
      </li>
    </template>

    <template v-else-if="filmsTop?.length">
      <li
        class="border-b last:border-0 border-stone-500 border-opacity-50"
        v-for="film in filmsTop"
        :key="film.slug"
      >
        <router-link
          class="flex gap-2 p-1 hover:bg-gray-600 hover:bg-opacity-30"
          :to="'/watch/' + film.slug"
        >
          <img class="w-16 rounded object-cover" v-lazy="imgPipe(film.thumb_url, API_URL)" />

          <div class="flex flex-col">
            <h2 class="break-line text-lg">{{ film.name }}</h2>
            <span class="break-line text-gray-400 font-light">{{ film.name }}</span>
            <span class="capitalize text-sm">
              {{ film?.country }} - {{ film.year ? film.year : 'N/A' }}
            </span>
          </div>
        </router-link>
      </li>
    </template>

    <template v-else-if="filmsRecent">
      <li
        class="border-b last:border-0 border-stone-500 border-opacity-50"
        v-for="film in filmsRecent"
        :key="film.slug"
      >
        <router-link
          class="flex gap-2 p-1 hover:bg-gray-600 hover:bg-opacity-30"
          :to="{
            name: 'Watch',
            params: { slug: film.slug },
            query: { episode_index: film.epLastest }
          }"
        >
          <img class="w-16 rounded object-cover" v-lazy="imgPipe(film.thumb_url, API_URL)" />

          <div class="flex flex-col">
            <h2 class="break-line text-lg">{{ film.name }}</h2>
            <span class="break-line text-gray-400 font-light">{{ film.name }}</span>
            <span>Vừa xem tập {{ film.epLastestName }}</span>
          </div>
        </router-link>
      </li>
    </template>

    <h3 class="text-xl text-center py-1" v-else>Không có lịch sử xem</h3>
  </ul>
</template>

<script lang="ts" setup>
import { FilmHistory, FilmInfoFromFirebase, Item } from '../../shared/types/film.interface'
import { imgPipe } from '../../shared/utils'
import { API_URL } from '../../shared/constant'

defineProps<{
  filmsUnComing?: Item[]
  filmsTop?: FilmInfoFromFirebase[]
  filmsRecent?: FilmHistory[]
  loading: boolean
}>()
</script>
