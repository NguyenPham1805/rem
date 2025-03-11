<template>
  <nav
    class="flex w-full h-12 sm:h-14 bg-transparent items-center justify-between fixed px-4 md:px-8 z-30 transition-all duration-300"
    v-rem-scrolltop
  >
    <div class="flex h-full">
      <router-link to="/" class="no-underline w-[70px] h-full flex items-center justify-center">
        <img :src="'/rem-logo.png'" alt="rem logo" class="w-full" />
      </router-link>

      <ul class="hidden md:flex items-center justify-center flex-1 h-full ml-3">
        <li
          class="relative h-full list-none"
          v-for="route in headerRoutes"
          v-rem-dropdown="route.isDropdown"
          :key="route.path"
        >
          <router-link
            class="flex items-center justify-center h-full no-underline px-3 font-bold hover:text-rem-color"
            :class="{ 'text-rem-color': route.path === matchedRoute }"
            :to="{ name: route.routeName, params: { slug: route.path } }"
            v-if="!route.isDropdown"
          >
            {{ route.name }}
          </router-link>

          <template v-else>
            <button
              class="flex items-center justify-center h-full px-3 font-bold group hover:text-rem-color"
              :class="{ 'text-rem-color': route.path === matchedRoute }"
            >
              {{ route.name }}
              <span
                class="material-icons-outlined group-hover:text-rem-color"
                :class="{ 'text-rem-color': route.path === matchedRoute }"
                >arrow_drop_down</span
              >
            </button>

            <ul
              class="grid-cols-[1fr_1fr_1fr_1fr] grid p-1 w-[450px] absolute left-[-150px] opacity-0 pointer-events-none bg-rem-dark bg-opacity-80 shadow-md rounded-lg transition-all"
            >
              <li v-for="data in route.dropdownData" :key="data.slug">
                <router-link
                  :to="{ name: route.routeName, params: { path: route.path, slug: data.slug } }"
                  class="flex items-center justify-center py-[6px] hover:bg-zinc-700 hover:bg-opacity-80 w-full h-full bg-opacity-10 hover:text-rem-color"
                >
                  {{ data.name }}
                </router-link>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </div>

    <div class="flex items-center h-full">
      <button
        class="flex rounded-full bg-transparent items-center justify-center p-2"
        @click="isSearchOpen = true"
      >
        <span class="material-icons-outlined text-2xl md:text-[28px] hover:text-rem-color">
          search
        </span>
      </button>

      <div class="relative" v-if="user" v-rem-click-away="closeMenu">
        <button class="hidden md:flex items-center" @click="isMenuDropdownOpen = true">
          <div class="flex items-center justify-center overflow-hidden w-9 h-9 rounded-full">
            <img class="object-cover w-full" referrerpolicy="no-referrer" :src="user.photoURL" />
          </div>

          <span class="material-icons">arrow_drop_down</span>
        </button>

        <div
          class="flex flex-col rounded-md overflow-hidden bg-rem-dark bs-lg absolute botton-4 right-0 h-fit w-36"
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
            @click="handleSignOut"
          >
            <span class="material-icons-outlined group-hover:text-rem-color"> logout </span>
            Đăng xuất
          </button>
        </div>
      </div>

      <button
        class="flex rounded-full bg-transparent items-center justify-center p-2"
        @click="openSignIn"
        v-else
      >
        <span class="material-icons-outlined text-[26px] md:text-3xl hover:text-rem-color">
          account_circle
        </span>
      </button>

      <button
        class="flex rounded-full bg-transparent items-center justify-center p-2 md:hidden"
        @click="isMBMenuOpen = true"
      >
        <span class="material-icons-outlined text-[26px] md:text-3xl hover:text-rem-color">
          menu
        </span>
      </button>
    </div>
  </nav>

  <rem-mobile-sidebar
    :isOpen="isMBMenuOpen"
    :user="user"
    @close="isMBMenuOpen = false"
    @sign-out="handleSignOut"
  />

  <rem-search :isOpen="isSearchOpen" @close="isSearchOpen = false" />

  <rem-sign-in-form />
</template>

<script lang="ts" setup>
import { signOut } from '@firebase/auth'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { auth } from '../../shared/firebase'
import { headerRoutes } from '../../shared/headerRouter'
import { User, UserState } from '../../shared/types/user.interface'
import { UserAction } from '../../store/user/user.actions'
import RemMobileSidebar from './RemMobileSidebar.vue'
import RemSearch from './RemSearch.vue'
import RemSignInForm from './RemSignInForm.vue'

const route = useRoute()
const store = useStore<UserState>()

const isMBMenuOpen = ref<boolean>(false)
const isSearchOpen = ref<boolean>(false)
const isMenuDropdownOpen = ref<boolean>(false)
const matchedRoute = ref<string>('/')
const user = computed<User | null>(() => store.getters.getUser)

const openSignIn = () => store.dispatch(UserAction.TOGGLE_SIGN_IN, true)

const closeMenu = () => (isMenuDropdownOpen.value = false)

const handleSignOut = (): void => {
  signOut(auth)
  isMBMenuOpen.value = false
  store.dispatch(UserAction.SET_USER, null)
}

watch(
  () => route.path,
  () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    matchedRoute.value = route.path.split('/')[2]
  }
)
</script>
