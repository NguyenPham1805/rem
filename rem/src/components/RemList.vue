<template>
  <div class="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 sm:grid-cols-3 md:grid-cols-4 p-1 lg:p-2">
    <div class="flex relative w-full h-fit drop-shadow-lg" v-for="item in list" :key="item._id">
      <router-link
        class="no-underline w-full h-fit"
        :to="{ name: 'Watch', params: { slug: item.slug } }"
      >
        <div class="w-full overflow-hidden relative">
          <span
            class="px-2 text-sm py-[2px] border z-10 bg-rem-quiet-dark border-gray-500 rounded absolute top-2 left-3"
          >
            {{ item.episode_current }}
          </span>

          <div
            class="img pb-[145%] bg-rem-quiet-dark bg-cover"
            lazy="loaded"
            v-lazy:background-image="item.thumb_url"
          ></div>
          <!-- :style="`background: url(${item.thumb_url}); background-size:cover`" -->

          <span
            class="px-2 py-2 text-sm lg:text-base absolute bottom-8 z-10 ts-lg bg-gradient-to-t from-rem-dark to-transparent w-full"
            :title="item.lang + ' - ' + item.quality"
            >{{ item.lang + ' - ' + item.quality }}</span
          >
        </div>
      </router-link>

      <div class="flex w-full absolute bottom-[-1px] z-10 left-0 overflow-hidden bg-rem-so-dark">
        <h3 class="text-lg px-3 py-1 break-line" :title="item.name + ' - ' + item.year">
          {{ item.name + ' - ' + item.year || 'N/A' }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Item } from '../shared/types/film.interface';

defineProps<{ list: Item[] }>()
</script>
