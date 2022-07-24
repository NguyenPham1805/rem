<template>
  <div class="relative" v-rem-click-away="() => (isSelectsOpen = false)">
    <button
      class="border rounded text-sm sm:text-base border-rem-color px-2 py-1 flex items-center gap-1 cursor-pointer hover:text-rem-color bg-rem-dark"
      @click="() => (isSelectsOpen = !isSelectsOpen)"
    >
      {{ keySelectPipe(keySelect) }} - {{ itemSelect.name }}
      <button class="flex group" @click.stop="$emit('delete')">
        <span
          class="material-icons-outlined text-[1.3rem] sm:text-[1.5rem] group-hover:text-rem-color transition"
        >
          close
        </span>
      </button>
    </button>

    <div
      class="absolute top-[120%] left-0 min-w-fit max-h-[50vh] overflow-auto min-scroll bg-rem-so-dark z-50 border border-rem-color"
      v-if="isSelectsOpen"
    >
      <ul class="flex flex-col justify-between">
        <li
          class="group text-sm sm:text-base hover:text-rem-color px-2 py-1 flex hover:bg-rem-quiet-dark hover:bg-opacity-30 items-center cursor-pointer transition w-full"
          :class="select.slug === 'hanh-dong' && 'hover:text-rem-color'"
          v-for="select in filter[keySelect]"
          @click="
            () => {
              $emit('change-value', select)
              isSelectsOpen = false
            }
          "
        >
          <div class="w-6 h-6">
            <span
              class="material-icons-outlined text-[1.3rem] sm:text-[1.5rem] group-hover:text-rem-color"
              v-show="select.slug === itemSelect.slug"
            >
              check
            </span>
          </div>

          <div class="w-max">{{ select.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { keySelectPipe } from '../shared/utils'
import { filter } from '../shared/constant'
import { Link } from '../shared/types/film.interface'

defineProps<{ itemSelect: Link; keySelect: string }>()
defineEmits<{ (e: 'change-value', value: Link): void; (e: 'delete'): void }>()

const isSelectsOpen = ref<boolean>(false)
</script>
