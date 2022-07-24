<template>
  <div class="flex flex-col pl-2 sm:pl-4 ml-3 sm:ml-4 border-l border-rem-color border-opacity-30">
    <rem-comment-item
      :comment="reply"
      :user="user"
      :comment-id="commentId"
      :is-reply="true"
      v-for="reply in replies"
      :key="reply.commentId"
      @open-reply="$emit('open-reply')"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted } from 'vue'
import { collection, onSnapshot, query, orderBy } from '@firebase/firestore'
import RemCommentItem from './RemCommentItem.vue'
import { CommentReply } from '../../shared/types/comment.interface'
import { User } from '../../shared/types/user.interface'
import { db } from '../../shared/firebase'

const props = defineProps<{ user: User | null; commentId: string }>()
defineEmits(['open-reply'])

const replies = ref<CommentReply[]>([])

const unsubscribe = onSnapshot(
  query(collection(db, `comments/${props.commentId}/replies`), orderBy('createdAt', 'asc')),
  (snapshot) => {
    replies.value = snapshot.docs.map((doc) => {
      return { commentId: doc.id, ...doc.data() } as CommentReply
    })
  }
)

onUnmounted(unsubscribe)
</script>
