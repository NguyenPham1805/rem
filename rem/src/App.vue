<template>
  <rem-header></rem-header>

  <div class="rem-container flex flex-col lg:flex-row gap-4">
    <div class="w-full lg:w-[65%] min-h-screen">
      <router-view></router-view>
    </div>

    <rem-sidebar></rem-sidebar>
  </div>

  <rem-footer></rem-footer>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { onAuthStateChanged } from '@firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import RemHeader from './components/header/RemHeader.vue'
import RemFooter from './components/footer/RemFooter.vue'
import RemSidebar from './components/sidebar/RemSidebar.vue'
import { auth } from './shared/firebase'
import { RootState } from './store'
import { UserAction } from './store/user/user.actions'
import { db } from './shared/firebase'

const store = useStore<RootState>()

onAuthStateChanged(auth, (user) => {
  if (user) {
    const currentUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      createdAt: user.metadata.creationTime
    }
    setDoc(doc(db, 'users', user.uid), currentUser)
    store.dispatch(UserAction.SET_USER, currentUser)
  } else store.dispatch(UserAction.SET_USER, null)
})
</script>
