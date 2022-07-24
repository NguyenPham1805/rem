<template>
  <div class="flex group mt-2" v-if="comment">
    <img
      class="rounded-full"
      :class="isReply ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-9 h-9 sm:w-10 sm:h-10'"
      referrerpolicy="no-referrer"
      :src="comment.user?.photoURL"
    />

    <div class="flex flex-col p-1 w-full">
      <div class="flex justify-between h-6">
        <div class="flex gap-2 items-start">
          <h4 class="font-semibold leading-none">{{ comment.user.displayName }}</h4>

          <div class="span font-light text-sm text-gray-400">
            {{ timeLeftPipe(new Date(comment.createdAt?.seconds * 1000 || Date.now())) }}
          </div>
        </div>

        <button class="hidden group-hover:block" @click="() => (isOpenOption = true)">
          <span class="material-icons-outlined">more_vert</span>
        </button>
      </div>

      <div class="w-full p-1">
        <p class="font-normal">
          {{ comment.content }}
        </p>

        <img class="max-w-full mt-1" :src="comment.img" v-if="comment.img" />
      </div>

      <div class="flex gap-5 ml-4">
        <button
          class="flex items-center"
          :class="!user && 'pointer-events-none select-none'"
          title="thích"
          @click="() => handleAddReaction(1)"
        >
          {{ reactionPipe(comment?.reaction || {}, 1) }}
          <span
            class="text-lg md:text-xl leading-none ml-1 translate-y-[-2px]"
            :class="
              checkReactionPipe(comment?.reaction || {}, user?.uid, 1)
                ? 'material-icons text-rem'
                : 'material-icons-outlined'
            "
          >
            thumb_up
          </span>
        </button>

        <button
          class="flex items-center"
          :class="!user && 'pointer-events-none select-none'"
          title="không thích"
          @click="() => handleAddReaction(2)"
        >
          {{ reactionPipe(comment?.reaction || {}, 2) }}
          <span
            class="text-lg md:text-xl leading-none ml-1 translate-y-[3px]"
            :class="
              checkReactionPipe(comment?.reaction || {}, user?.uid, 2)
                ? 'material-icons text-rem'
                : 'material-icons-outlined'
            "
          >
            thumb_down
          </span>
        </button>

        <button class="font-semibold hover:text-rem-color" @click="$emit('open-reply')">
          Trả lời
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { doc, updateDoc } from '@firebase/firestore'
import { timeLeftPipe, reactionPipe, checkReactionPipe } from '../../shared/utils'
import { Comment, CommentReply } from '../../shared/types/comment.interface'
import { User } from '../../shared/types/user.interface'
import { db } from '../../shared/firebase'

const props = defineProps<{
  isReply: boolean
  comment: Comment | CommentReply | null
  commentId?: string
  user: User | null
}>()

defineEmits(['open-reply'])

const isOpenOption = ref<boolean>(false)

const handleAddReaction = (type: number): void => {
  if (!props.user) return

  const reaction =
    Object.entries(props.comment?.reaction || {}).find(
      (react) => react[0] === props.user?.uid
    )?.[1] === type
      ? 0
      : type

  if (props.isReply && props.commentId) {
    updateDoc(doc(db, `comments/${props.commentId}/replies/${props.comment?.commentId}`), {
      [`reaction.${props.user.uid}`]: reaction
    })
  } else {
    updateDoc(doc(db, `comments/${props.comment?.commentId}`), {
      [`reaction.${props.user.uid}`]: reaction
    })
  }
}
</script>
