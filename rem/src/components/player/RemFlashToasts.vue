<template>
  <div
    v-if="type === 'mute' || type === 'volup' || type === 'voldown'"
    class="bg-rem-so-dark bg-opacity-40 absolute px-4 py-2 top-[15%] left-1/2 -translate-x-1/2"
  >
    {{ volume }}%
  </div>

  <div
    class="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    v-if="type === 'play'"
  >
    <div class="fade w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-rem-so-dark bg-opacity-40">
      <span
        class="material-icons w-full h-full flex items-center justify-center text-4xl sm:text-5xl"
      >
        play_arrow
      </span>
    </div>
  </div>

  <div
    class="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    v-else-if="type === 'pause'"
  >
    <div class="fade w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-rem-so-dark bg-opacity-40">
      <span
        class="material-icons-outlined w-full h-full flex items-center justify-center text-4xl sm:text-5xl"
      >
        pause
      </span>
    </div>
  </div>

  <div
    class="flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-3/4"
    v-else-if="type === 'backward'"
  >
    <div class="fade w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-rem-so-dark bg-opacity-40">
      <span
        class="material-icons-outlined w-full h-full flex items-center justify-center text-4xl sm:text-5xl"
      >
        fast_forward
      </span>
    </div>
  </div>

  <div
    class="flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/4"
    v-else-if="type === 'forward'"
  >
    <div class="fade w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-rem-so-dark bg-opacity-40">
      <span
        class="material-icons-outlined w-full h-full flex items-center justify-center text-4xl sm:text-5xl rotate-180"
      >
        fast_forward
      </span>
    </div>
  </div>

  <div
    class="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    v-else-if="type === 'mute'"
  >
    <div class="fade w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-rem-so-dark bg-opacity-40">
      <span
        class="material-icons w-full h-full flex items-center justify-center text-4xl sm:text-5xl"
      >
        volume_off
      </span>
    </div>
  </div>

  <div
    class="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    v-else-if="type === 'volup'"
  >
    <div class="fade w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-rem-so-dark bg-opacity-40">
      <span
        class="material-icons w-full h-full flex items-center justify-center text-4xl sm:text-5xl"
      >
        volume_up
      </span>
    </div>
  </div>

  <div
    class="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    v-else-if="type === 'voldown'"
  >
    <div class="fade w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-rem-so-dark bg-opacity-40">
      <span
        class="material-icons w-full h-full flex items-center justify-center text-4xl sm:text-5xl"
      >
        volume_down
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
export type TypeToast =
  | 'backward'
  | 'forward'
  | 'play'
  | 'pause'
  | 'mute'
  | 'volup'
  | 'voldown'
  | 'idle'

defineProps<{ type: TypeToast; volume: number }>()
</script>

<style scoped>
.fade {
  animation: fade 500ms ease-out;
}

@keyframes fade {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(1.5);
  }
}
</style>
