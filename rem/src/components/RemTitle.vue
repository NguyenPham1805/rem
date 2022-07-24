<template>
  <div class="h-9 md:h-10 bg-rem-so-dark mt-3 md:mt-4" v-if="loading"></div>

  <div class="flex bg-rem-so-dark mt-3 md:mt-4 overflow-hidden" v-else>
    <h1
      class="flex relative ml-5 py-1 px-8 font-semibold text-xl bg-rem-color text-rem-dark lg:text-2xl z-2 before:absolute before:content-[''] before:top-0 before:w-[30px] before:h-[30px] before:left-0 before:z-1 before:rotate-45 before:translate-x-[-14px] before:translate-y-[2px] lg:before:translate-y-[5px] before:bg-rem-so-dark after:absolute after:content-[''] after:top-0 after:w-[30px] after:h-[30px] after:z-0 after:right-0 after:bg-rem-color after:rotate-45 after:translate-x-[14px] after:translate-y-[2px] lg:after:translate-y-[5px]"
    >
      {{ title }}
    </h1>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ title: string; loading: boolean }>()
</script>
