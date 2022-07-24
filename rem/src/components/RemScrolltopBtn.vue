<template>
  <button
    v-if="isDisplay"
    class="flex p-2 md:p-3 border border-rem-color hover:bg-rem-color hover:bg-opacity-30 rounded-md fixed right-5 bottom-5 md:right-10 md:bottom:10 transition-all z-30"
    @click="scrollTop"
  >
    <span class="material-icons-outlined text-rem-color text-2xl font-bold leading-none">
      expand_less
    </span>
  </button>
</template>

<script lang="ts" setup>
import { ref, onBeforeUnmount } from 'vue'

const isDisplay = ref<boolean>(false)

const handleScroll = (): void => {
  if (window.pageYOffset > 1000) {
    isDisplay.value = true
  } else {
    isDisplay.value = false
  }
}

const scrollTop = (): void => window.scrollTo({ top: 0, behavior: 'smooth' })

window.addEventListener('scroll', handleScroll)

onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>
