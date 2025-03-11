<template>
  <div
    class="flex flex-col transition-all items-center w-80 sm:w-96 fixed px-6 py-12 bg-rem-dark rounded-xl left-[50%] translate-x-[-50%] z-50 duration-500"
    :style="[isOpen ? { top: '100px' } : { top: '-500px' }]"
  >
    <button class="absolute top-4 right-4" @click="closeSignIn">
      <span class="material-icons-outlined text-2xl md:text-[28px] hover:text-rem-color">
        close
      </span>
    </button>

    <img class="w-24" :src="'/rem-logo.png'" />

    <h3 class="text-lg text-center mt-4 sm:text-xl">
      Đăng nhập vào <span>Rem</span> để có trải nghiệm tốt nhất!
    </h3>

    <p class="text-gray-400 mt-4 text-center">
      Trên <span class="text-rem-color">27k</span> phim nhiều thể loại. và vẫn đang được cập nhật
      mỗi ngày
    </p>

    <div class="flex flex-col px-4 gap-3 mt-4 w-full">
      <h3 class="text-rem-color">Bạn có thể đăng nhập với:</h3>

      <button
        class="flex items-center justify-center gap-2 p-1 rounded w-full border-2 border-rem text-xl hover:bg-rem hover:text-rem-so-dark transition font-normal"
        @click="handleFBSignIn"
      >
        <img class="w-10" :src="'/icon-facebook.png'" />
        Facebook
      </button>

      <button
        class="flex items-center justify-center gap-2 p-1 rounded w-full border-2 border-white text-xl hover:bg-white hover:text-rem-so-dark transition font-normal"
        @click="handleGGSignIn"
      >
        <img class="w-10" :src="'/icon-google.png'" />
        Google
      </button>
    </div>
  </div>

  <div
    v-if="isOpen"
    class="fixed top-0 right-0 bottom-0 left-0 bg-rem-so-dark z-40 bg-opacity-60"
    @click="closeSignIn"
  ></div>
</template>

<script lang="ts" setup>
import {
  AuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup
} from '@firebase/auth'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { auth } from '../../shared/firebase'
import { User } from '../../shared/types/user.interface'
import { UserAction } from '../../store/user/user.actions'

const store = useStore<User>()
const isOpen = computed<boolean>(() => store.getters.getSignInState)

const closeSignIn = () => store.dispatch(UserAction.TOGGLE_SIGN_IN, false)

const handleSignIn = (provider: AuthProvider) => {
  closeSignIn()
  signInWithPopup(auth, provider).catch((err) => console.log(err))
}

const handleFBSignIn = () => {
  handleSignIn(new FacebookAuthProvider())
}

const handleGGSignIn = () => {
  handleSignIn(new GoogleAuthProvider())
}
</script>
