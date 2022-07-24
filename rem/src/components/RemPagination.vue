<template>
  <div class="flex justify-center mt-4 md:mt-8">
    <ul class="flex font-semibold">
      <li v-if="currentPage > 1">
        <button
          class="flex h-10 w-10 items-center justify-center"
          @click="$emit('change-page', currentPage - 1)"
        >
          <span class="material-icons-outlined">arrow_back_ios</span>
        </button>
      </li>

      <li class="flex h-10 w-10 items-center justify-center" v-if="currentPage > 1">
        <button @click="$emit('change-page', 1)">1</button>
      </li>

      <li class="flex h-10 w-10 items-center justify-center" v-if="currentPage > 2">
        <span>. . .</span>
      </li>

      <li>
        <form
          class="border mx-2 border-zinc-500"
          @submit.prevent="$emit('change-page', currentPage)"
        >
          <input
            class="h-9 w-9 text-rem-color bg-transparent text-center outline-0"
            type="number"
            v-model="currentPage"
            @input="$emit('check-page', currentPage)"
            autocomplete="off"
          />
        </form>
      </li>

      <li class="flex h-10 w-10 items-center justify-center" v-if="currentPage < totalPages - 1">
        <span>. . .</span>
      </li>

      <li class="flex h-10 w-10 items-center justify-center" v-if="currentPage < totalPages">
        <button @click="$emit('change-page', totalPages)">
          {{ totalPages }}
        </button>
      </li>

      <li class="flex h-10 w-10 items-center justify-center" v-if="currentPage < totalPages">
        <button @click="$emit('change-page', currentPage + 1)">
          <span class="material-icons-outlined">arrow_forward_ios</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineEmits<{ (e: 'change-page', page: number): void; (e: 'check-page', page: number): void }>()

const props = defineProps<{ currentPage: number; totalPages: number }>()
const currentPage = ref<number>(props.currentPage)
</script>
