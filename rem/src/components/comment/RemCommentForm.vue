<template>
  <form class="flex items-start p-1 pt-4 sm:p-2 md:p-2" @submit.prevent="handleAddComment">
    <img
      class="w-9 h-9 md:w-10 md:h-10 rounded-full"
      referrerpolicy="no-referrer"
      :src="user?.photoURL"
    />

    <button class="group p-[5px]" type="button" @click="inputFileRef?.click()">
      <span class="material-icons-outlined group-hover:text-rem-color">add</span>
    </button>

    <input
      class="hidden"
      type="file"
      accept="image/*"
      ref="inputFileRef"
      @change="handleChangeFile"
    />

    <div class="flex flex-col flex-[1] py-1 border-b">
      <input
        class="border-0 bg-transparent outline-none px-2 py-[2] input-comment"
        :placeholder="'Viết bình luận...'"
        type="text"
        autocomplete="off"
        v-model="text"
      />

      <div class="relative w-fit" v-if="previewImage">
        <button
          class="absolute top-[-5px] right-0 z-10"
          type="button"
          v-if="!changeFileLoading"
          @click="() => handleRemovePreviewImage(inputFileRef)"
        >
          <span class="material-icons-outlined w-2 h-2 text-sm">close</span>
        </button>

        <div class="relative w-fit mt-1">
          <img
            class="mt-1 max-w-full"
            :class="changeFileLoading && 'opacity-40'"
            :src="previewImage"
          />

          <div
            class="absolute h-1 bg-rem-color left-0"
            :style="{ width: progress * 100 + '%' }"
            v-if="changeFileLoading"
          ></div>
        </div>
      </div>
    </div>

    <button class="group px-1" type="submit">
      <span class="material-icons-outlined text-lg md:text-xl group-hover:text-rem-color">
        send
      </span>
    </button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from '@firebase/firestore'
import { uploadBytesResumable, ref as fireStoreRef, getDownloadURL } from '@firebase/storage'
import { toSlugPipe } from '../../shared/utils'
import { db, storage } from '../../shared/firebase'
import { User } from '../../shared/types/user.interface'

const props = defineProps<{ filmId: string; user: User | null; replyForId: string | null }>()
const emits = defineEmits(['comment'])

const inputFileRef = ref<HTMLInputElement | null>(null)
const previewImage = ref<string | null>(null)
const changeFileLoading = ref<boolean>(false)
const isComment = ref<boolean>(false)
const fileToUpload = ref<any>()
const progress = ref<number>(0)
const text = ref<string>('')

const handleChangeFile = (e: any): void => {
  changeFileLoading.value = true
  fileToUpload.value = e.target.files[0]

  if (fileToUpload.value.size > 1024 * 1024 * 20) return

  const fileReader = new FileReader()

  fileReader.onload = (e: any) => {
    previewImage.value = e.target.result
  }

  fileReader.readAsDataURL(fileToUpload.value)

  const fileRef = fireStoreRef(
    storage,
    toSlugPipe(`${Date.now().toString()}-${fileToUpload.value.name}`)
  )

  uploadBytesResumable(fileRef, fileToUpload.value).on(
    'state_changed',
    (snapshot) => {
      progress.value = snapshot.bytesTransferred / snapshot.totalBytes
    },
    (error) => {
      console.log(error)
    },
    async () => {
      previewImage.value = await getDownloadURL(fileRef)
      changeFileLoading.value = false
    }
  )
}

const handleAddComment = (): void => {
  if ((!text.value.trim().length && !previewImage) || !props.user) return
  if (isComment.value) return

  isComment.value = true

  if (props.replyForId) {
    updateDoc(doc(db, `comments/${props.replyForId}`), {
      ['hasReply']: true
    })
    addDoc(collection(db, `comments/${props.replyForId}/replies`), {
      user: props.user,
      content: text.value.trim(),
      createdAt: serverTimestamp(),
      reaction: {},
      img: previewImage.value || null
    })
      .then(() => {
        handleRemovePreviewImage(inputFileRef.value)
        previewImage.value = null
        emits('comment')
        text.value = ''
      })
      .finally(() => (isComment.value = false))
  } else {
    addDoc(collection(db, 'comments'), {
      filmId: props.filmId,
      user: props.user,
      hasReply: false,
      content: text.value.trim(),
      createdAt: serverTimestamp(),
      reaction: {},
      reply: [],
      img: previewImage.value
    })
      .then(() => {
        handleRemovePreviewImage(inputFileRef.value)
        previewImage.value = null
        text.value = ''
      })
      .finally(() => (isComment.value = false))
  }
}

const handleRemovePreviewImage = (fileTarget: any): void => {
  if (fileTarget.value) {
    try {
      fileTarget.value = ''
      previewImage.value = null
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
