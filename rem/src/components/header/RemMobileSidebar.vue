<template>
  <div
    class="min-scroll flex flex-col w-full mb:w-[380px] h-full p-2 fixed z-50 overflow-auto bg-rem-quiet-dark transition-all duration-300"
    :style="[isOpen ? { left: '0%' } : { left: '-100%' }]"
  >
    <div class="flex px-2 justify-between mt-2">
      <button class="ml-4 self-start" @click="$emit('close')">
        <span class="material-icons-outlined text-2xl md:text-[28px] hover:text-rem-color">
          west
        </span>
      </button>

      <div class="relative" v-if="user" v-rem-click-away="() => (isMenuDropdownOpen = false)">
        <button class="cursor-pointer" @click="() => (isMenuDropdownOpen = true)">
          <span class="material-icons">more_vert</span>
        </button>

        <div
          class="flex flex-col rounded overflow-hidden bg-rem-dark bs-lg absolute botton-4 right-0 h-fit w-36"
          v-if="isMenuDropdownOpen"
        >
          <button
            class="group px-3 gap-1 font-semibold py-2 flex items-center hover:text-rem-color hover:bg-rem-quiet-dark hover:bg-opacity-40"
          >
            <span class="material-icons-outlined group-hover:text-rem-color"> account_circle </span>
            Tài Khoản
          </button>

          <button
            class="group px-3 gap-1 font-semibold py-2 flex items-center hover:text-rem-color hover:bg-rem-quiet-dark hover:bg-opacity-40"
          >
            <span class="material-icons-outlined group-hover:text-rem-color"> notifications </span>
            Thông báo
          </button>

          <router-link
            class="group px-3 gap-1 font-semibold py-2 flex items-center hover:text-rem-color hover:bg-rem-quiet-dark hover:bg-opacity-40"
            @click="$emit('close')"
            to="/history"
          >
            <span class="material-icons-outlined group-hover:text-rem-color"> history </span>
            Lịch sử
          </router-link>

          <button
            class="group px-3 gap-1 font-semibold py-2 flex items-center hover:text-rem-color hover:bg-rem-quiet-dark hover:bg-opacity-40"
          >
            <span class="material-icons-outlined group-hover:text-rem-color"> settings </span>
            Cài đặt
          </button>

          <button
            class="group px-3 gap-1 font-semibold py-2 flex items-center hover:text-rem-color hover:bg-rem-quiet-dark hover:bg-opacity-40"
            @click="$emit('sign-out')"
          >
            <span class="material-icons-outlined group-hover:text-rem-color"> logout </span>
            Đăng xuất
          </button>
        </div>
      </div>
    </div>

    <div class="flex gap-2 items-center w-full justify-center" v-if="user">
      <div class="flex items-center w-16 h-16 justify-center rounded-full overflow-hidden">
        <img class="w-full" referrerpolicy="no-referrer" :src="user.photoURL" />
      </div>

      <div class="flex flex-col">
        <h2 class="font-semibold text-2xl">{{ user.displayName }}</h2>
        <span class="leading-4 text-rem cursor-pointer">{{ user.email }}</span>
        <div class="leading-4">
          Tham giao vào: <span class="font-light">{{ datePipe(user.createdAt) }}</span>
        </div>
      </div>
    </div>

    <ul class="flex flex-col w-full p-1 mt-4">
      <li
        class="w-full border-b last:border-0"
        v-for="headerRoute in headerRoutes"
        :key="headerRoute.path"
      >
        <router-link
          class="flex w-full items-center p-2 hover:text-rem-color"
          :to="{ name: headerRoute.routeName, params: { slug: headerRoute.path } }"
          v-if="!headerRoute.isDropdown"
          @click="$emit('close')"
        >
          {{ headerRoute.name }}
        </router-link>

        <template v-else>
          <button
            class="flex w-full items-center p-2 hover:text-rem-color font-medium"
            v-rem-mb-dropdown
          >
            {{ headerRoute.name }}
            <span class="material-icons-outlined">arrow_drop_down</span>
          </button>

          <ul class="grid grid-cols-[1fr_1fr] px-1 w-full h-0 overflow-hidden bg-rem-dark">
            <li v-for="data in headerRoute.dropdownData" :key="data.slug">
              <router-link
                class="flex items-center justify-center py-[6px] hover:bg-zinc-700 hover:bg-opacity-80 w-full h-full hover:text-rem-color"
                :to="{
                  name: headerRoute.routeName,
                  params: { path: headerRoute.path, slug: data.slug }
                }"
                @click="$emit('close')"
              >
                {{ data.name }}
              </router-link>
            </li>
          </ul>
        </template>
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
import { headerRoutes } from '../../shared/headerRouter'
import { datePipe } from '../../shared/utils'
import { User } from '../../shared/types/user.interface'

defineProps<{ isOpen: boolean; user: User | null }>()
defineEmits(['close', 'sign-out'])

const isMenuDropdownOpen = ref<boolean>(false)
</script>
