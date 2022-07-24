<template>
  <div class="w-[100vw] h-[100vh] fixed z-10 bg-rem-dark left-0 top-0">
    <div
      class="flex w-full h-full items-center justify-center flex-col"
      :style="{ backgroundImage: 'url(/p404.png)' }"
      ref="container"
      @mousemove="handleMouseMove"
    >
      <p class="font-light text-center max-w-[85%] sm:text-lg">
        Bạn vừa lạc isekai vào thế giới alime. Nhưng rất tiếc thế giới này không có gì :((
      </p>

      <h1 class="text-white text-6xl sm:text-8xl font-thin">404</h1>

      <h2 class="text-rem-color text-4xl sm:text-6xl font-extralight">Not Found</h2>

      <img class="w-[200px]" src="/rem404.png" />

      <button
        class="border text-lg px-4 mt-4 border-rem-color text-rem-color hover:bg-rem-color hover:bg-opacity-40"
        @click="handleReturn"
      >
        Trở về
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const container = ref<HTMLDivElement | null>(null)
const router = useRouter()

onMounted(() => {
  document.body.style.overflow = 'hidden'
  document.title = 'Not Found | 404'
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})

const handleMouseMove = (e: MouseEvent) => {
  let x = e.clientX / 5
  let y = e.clientY / 5
  container.value!.style.backgroundPositionX = x + 'px'
  container.value!.style.backgroundPositionY = y + 'px'
}

const handleReturn = () => router.back()
</script>
