<template>
  <div class="my-2 flex flex-col items-center" v-if="isLoading">
    <div class="sk-cube-grid">
      <div class="sk-cube sk-cube1"></div>
      <div class="sk-cube sk-cube2"></div>
      <div class="sk-cube sk-cube3"></div>
      <div class="sk-cube sk-cube4"></div>
      <div class="sk-cube sk-cube5"></div>
      <div class="sk-cube sk-cube6"></div>
      <div class="sk-cube sk-cube7"></div>
      <div class="sk-cube sk-cube8"></div>
      <div class="sk-cube sk-cube9"></div>
    </div>

    <p class="text-gray-400">Đang tải bình luận...</p>
  </div>

  <div class="flex flex-col">
    <h2 class="flex items-center w-fit my-2 text-lg text-rem-color border-b-2 border-rem-color">
      <span class="material-icons-outlined text-rem-color text-xl"> chat </span>
      Bình luận ({{ totalComment }})
    </h2>

    <div class="flex flex-col bg-rem-so-dark bg-opacity-50 m-2">
      <rem-comment-form :film-id="id || ''" :user="user" :reply-for-id="replyForId" v-if="user" />

      <p class="font-light ml-4 mt-2" v-else>
        Bạn cần <button class="text-rem" @click="openSignIn">đăng nhập</button> để bình luận
      </p>

      <div class="flex flex-col p-2 pb-4 sm:p-3 gap-2" ref="cmtContainerRef">
        <div
          class="flex flex-col mt-2"
          v-for="(comment, index) in commentList"
          :key="comment.commentId"
        >
          <rem-comment-item
            :is-reply="false"
            :comment="comment"
            :user="user"
            @open-reply="() => handleAppendFromReply(index, comment.commentId!)"
          />

          <template v-if="comment.hasReply">
            <rem-reply
              :comment-id="comment.commentId!"
              :user="user"
              @open-reply="() => handleAppendFromReply(index, comment.commentId!)"
            />
          </template>
        </div>

        <div class="ml-3 sm:ml-4" v-show="isOpenFormReply && !!totalComment" ref="fromReplyRef">
          <rem-comment-form
            :film-id="id || ''"
            :reply-for-id="replyForId"
            :user="user"
            @comment="
              () => {
                replyForId = null
                isOpenFormReply = false
              }
            "
          />
        </div>

        <h2 class="text-base sm:text-xl text-center" v-if="!totalComment && user">
          Hãy là người đầu tiên đánh giá về bộ phim này.
        </h2>

        <h2 class="text-base sm:text-xl text-center" v-if="!totalComment && !user">
          Chưa có bình luận nào
        </h2>

        <button
          class="group flex items-center self-start m-2 hover:text-rem-color"
          v-if="totalComment > limitComment"
          @click="() => limitComment + 10"
        >
          Tải thêm bình luận
          <span class="material-icons group-hover:text-rem-color"> chevron_right </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onUnmounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  limit,
  where,
  Unsubscribe
} from '@firebase/firestore'
import RemCommentForm from './RemCommentForm.vue'
import RemCommentItem from './RemCommentItem.vue'
import RemReply from './RemReply.vue'
import { Comment } from '../../shared/types/comment.interface'
import { db } from '../../shared/firebase'
import { User } from '../../shared/types/user.interface'
import { UserAction } from '../../store/user/user.actions'

const props = defineProps<{ id: string | null; loading: boolean }>()
const store = useStore<User>()

const commentList = ref<Comment[] | null>(null)
const fromReplyRef = ref<HTMLDivElement | null>(null)
const cmtContainerRef = ref<HTMLDivElement | null>(null)
const isOpenFormReply = ref<boolean>(false)
const replyForId = ref<string | null>(null)
const totalComment = ref<number>(0)
const limitComment = ref<number>(10)
const isLoading = ref<boolean>(false)
const user = computed<User | null>(() => store.getters.getUser)
const unsubscribe = ref<Unsubscribe>(() => {})

const openSignIn = (): void => {
  store.dispatch(UserAction.TOGGLE_SIGN_IN, true)
}

const handleAppendFromReply = (index: number, cmtId: string): void => {
  replyForId.value = cmtId
  if (cmtContainerRef.value?.contains(fromReplyRef.value)) {
    cmtContainerRef.value.removeChild(fromReplyRef.value!)
  }

  if (index + 1 >= cmtContainerRef.value!.children.length) {
    cmtContainerRef.value!.appendChild(fromReplyRef.value!)
    isOpenFormReply.value = true
    return
  }

  cmtContainerRef.value!.insertBefore(
    fromReplyRef.value!,
    cmtContainerRef.value!.children[index + 1]
  )
  isOpenFormReply.value = true
}

watch(
  () => props.id,
  (id) => {
    if (!id) return
    unsubscribe.value = onSnapshot(
      query(
        collection(db, 'comments'),
        where('filmId', '==', id),
        orderBy('createdAt', 'desc'),
        limit(limitComment.value)
      ),
      (snapshot) => {
        totalComment.value = snapshot.size
        commentList.value = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            commentId: doc.id
          } as Comment
        })
        isLoading.value = false
      }
    )
  }
)

onUnmounted(unsubscribe.value)
</script>

<style scoped>
.sk-cube-grid {
  width: 40px;
  height: 40px;
}

.sk-cube-grid .sk-cube {
  width: 32%;
  height: 32%;
  background-color: #797979;
  float: left;
  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
}
.sk-cube-grid .sk-cube1 {
  animation-delay: 0.2s;
}
.sk-cube-grid .sk-cube2 {
  animation-delay: 0.3s;
}
.sk-cube-grid .sk-cube3 {
  animation-delay: 0.4s;
}
.sk-cube-grid .sk-cube4 {
  animation-delay: 0.1s;
}
.sk-cube-grid .sk-cube5 {
  animation-delay: 0.2s;
}
.sk-cube-grid .sk-cube6 {
  animation-delay: 0.3s;
}
.sk-cube-grid .sk-cube7 {
  animation-delay: 0s;
}
.sk-cube-grid .sk-cube8 {
  animation-delay: 0.1s;
}
.sk-cube-grid .sk-cube9 {
  animation-delay: 0.2s;
}

@keyframes sk-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    transform: scale3D(1, 1, 1);
  }
  35% {
    transform: scale3D(0, 0, 1);
  }
}
</style>
