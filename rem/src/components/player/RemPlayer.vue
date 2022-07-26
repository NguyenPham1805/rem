<template>
  <div class="skt-alt mt-8 w-full pb-[55%] relative" v-if="loading">
    <div class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div class="sk-fading-circle">
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
      </div>
    </div>
  </div>

  <div
    class="flex items-center mt-8 w-full h-fit relative"
    :class="!source && 'select-none pointer-events-none'"
    ref="containerRef"
    @mousemove="handleScreenHover"
    @mouseleave="() => (isHover = false)"
    @click="(e) => handleClickCapture(e)"
    v-else
  >
    <video id="mainVideo" ref="playerRef" @waiting="isDataLoading = true"></video>

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
      v-if="!source"
    >
      Mới có trailer hoặc chưa cập nhật thôi nha ae đợi mấy ông ad hôm nào update cho nhé :))
    </div>

    <div
      class="absolute top-0 left-0 w-full bg-gradient-to-b from-rem-so-dark to-transparent transition duration-300"
      :class="isHover || isPause ? 'opacity-100' : 'opacity-0'"
      @click.stop=""
      v-if="name && epName"
    >
      <h1 class="text-xl sm:text-2xl p-2 sm:p-4 w-[90%]">{{ name }} - {{ epName }}</h1>
    </div>

    <button
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      v-if="isPause"
      @click.stop="handleTogglePlay"
    >
      <span class="material-icons text-4xl sm:text-6xl leading-none">play_arrow</span>
    </button>

    <button
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      v-if="end"
      @click.stop="handleTogglePlay"
    >
      <span class="material-icons text-4xl sm:text-6xl leading-none">replay</span>
    </button>

    <rem-flash-toasts :type="typeToat" :volume="+volume" />

    <div class="spinner pointer-events-none" v-if="isDataLoading">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>

    <div
      class="flex flex-col w-full absolute bottom-0 left-0 px-3 bg-gradient-to-t from-rem-so-dark to-transparent transition duration-300"
      :class="isHover || isPause ? 'opacity-100' : 'opacity-0'"
      @click.stop=""
      v-if="player"
    >
      <div
        class="flex flex-col h-4 w-full group justify-end cursor-pointer"
        ref="seekRef"
        @mousedown="
          (e) => {
            isSeeking = true
            handleHoverTimeline(e)
          }
        "
        @mousemove="handleHoverTimeline"
        @mouseup="() => (isSeeking = false)"
        @mouseleave="handleLeaveTimeline"
      >
        <div
          class="group relative h-1 w-full group-hover:h-2 transition-all duration-150 bg-rem-light bg-opacity-60"
        >
          <div
            class="h-full bg-rem-color absolute top-0 left-0 group-hover:after:w-4 group-hover:after:h-4 after:w-0 after:h-0 after:transition-all after:absolute after:content-[''] after:bg-rem-color after:top-0 after:right-0 after:rounded-full after:translate-x-[50%] after:translate-y-[-20%]"
            :style="{ width: (duration !== 0 ? (currentTime / duration) * 100 : 0) + '%' }"
          ></div>
        </div>

        <span
          class="hidden absolute -top-9 px-2 py-1 text-sm text-rem-color font-light bg-rem-so-dark rounded-sm pointer-events-none -translate-x-1/2 after:content-[''] after:absolute after:w-2 after:h-2 after:left-1/2 after:-bottom-1 after:bg-rem-so-dark after:rotate-45 after:-translate-x-1/2"
          ref="timeTooltip"
        >
          {{ timePipe(timeHover) }}
        </span>
      </div>

      <div class="flex justify-between p-1">
        <div class="flex gap-1">
          <button
            class="group flex p-1"
            :class="epIndex < 1 && 'pointer-events-none select-none'"
            title="Tập trước đó"
            @click.stop="$emit('change-ep', 'prev')"
          >
            <span
              class="material-icons leading-none group-hover:text-rem-color sm:text-3xl sm:leading-none"
            >
              skip_previous
            </span>
          </button>

          <button class="group flex p-1" :title="'Phát'" @click.stop="handleTogglePlay">
            <span
              class="material-icons leading-none group-hover:text-rem-color sm:text-3xl sm:leading-none"
            >
              {{ isPause ? 'play_arrow' : 'pause' }}
            </span>
          </button>

          <button
            class="group flex p-1"
            :class="epIndex > totalEp - 1 && 'pointer-events-none select-none'"
            title="Tập kế tiếp"
            @click.stop="$emit('change-ep', 'next')"
          >
            <span
              class="material-icons leading-none group-hover:text-rem-color sm:text-3xl sm:leading-none"
            >
              skip_next
            </span>
          </button>

          <div class="volume-container group hidden items-center sm:flex">
            <button class="group flex p-1" :title="'Âm lượng'" @click.stop="handleToggleVolume">
              <span
                class="material-icons leading-none group-hover:text-rem-color text-xl sm:text-2xl sm:leading-none"
              >
                {{ volume > 50 ? 'volume_up' : volume === 0 ? 'volume_off' : 'volume_down' }}
              </span>
            </button>

            <input
              class="volume-input"
              type="range"
              min="0"
              max="100"
              v-model="volume"
              @change="(e: any) => +e.target.value"
            />
          </div>

          <div class="flex items-center ml-2 text-sm sm:text-base font-light">
            <span>{{ timePipe(currentTime) }}</span> /
            <span>{{ timePipe(duration) }}</span>
          </div>
        </div>

        <div class="flex gap-1 items-center relative">
          <button class="group flex p-1" title="Cài đặt" @click.stop="handleActiveSetting(true)">
            <span
              class="material-icons leading-none group-hover:text-rem-color text-xl sm:text-2xl sm:leading-none"
            >
              settings
            </span>
          </button>

          <button
            class="group flex p-1"
            :title="'Chế độ toàn màn hình'"
            @click.stop="() => (isFullScreen = !isFullScreen)"
          >
            <span
              class="material-icons leading-none group-hover:text-rem-color text-2xl sm:text-3xl sm:leading-none"
            >
              {{ isFullScreen ? 'fullscreen_exit' : 'fullscreen' }}
            </span>
          </button>

          <div
            class="absolute bottom-12 right-3 sm:bottom-16 sm:right-5 min-h-[120px] w-52 sm:w-64 rounded-sm overflow-x-hidden overflow-y-auto bg-rem-so-dark bg-opacity-70 min-scroll transition-all duration-300"
            v-if="isSettingActive"
          >
            <div
              class="relative transition-all duration-300"
              :style="{ height: popupHeight + 'px' }"
            >
              <div
                class="absolute bottom-0 w-52 sm:w-64 sm:max-h-32 flex flex-col justify-center overflow-x-hidden overflow-y-auto transition-all duration-300"
                :class="popupActive === 'menu' ? 'left-0 opacity-100' : '-left-full opacity-0'"
                ref="menuRef"
              >
                <div
                  class="flex p-2 cursor-pointer hover:bg-rem-quiet-dark hover:bg-opacity-30 justify-between transition duration-300"
                  @click.stop="setPopupActive('speed')"
                >
                  <div class="text-sm font-semibold flex items-center">
                    <span class="material-icons-outlined mr-1"> slow_motion_video </span>Tốc độ phát
                  </div>

                  <div class="flex items-center">
                    Chuẩn <span class="material-icons"> chevron_right </span>
                  </div>
                </div>

                <div
                  class="flex p-2 cursor-pointer hover:bg-rem-quiet-dark hover:bg-opacity-30 justify-between transition duration-300"
                  @click.stop="setPopupActive('subtitles')"
                >
                  <div class="text-sm font-semibold flex items-center">
                    <span class="material-icons-outlined mr-1"> subtitles </span>Phụ đề
                  </div>

                  <div class="flex items-center">
                    Tắt <span class="material-icons"> chevron_right </span>
                  </div>
                </div>

                <div
                  class="flex p-2 cursor-pointer hover:bg-rem-quiet-dark hover:bg-opacity-30 justify-between transition duration-300"
                  @click.stop="setPopupActive('quality')"
                >
                  <div class="text-sm font-semibold flex items-center">
                    <span class="material-icons-outlined mr-1"> tune </span>Chất lượng
                  </div>

                  <div class="flex items-center">
                    1080p <span class="material-icons"> chevron_right </span>
                  </div>
                </div>
              </div>

              <div
                class="absolute bottom-0 w-52 max-h-64 sm:w-64 flex flex-col transition-all duration-300 overflow-x-hidden overflow-y-auto min-scroll"
                :class="popupActive === 'speed' ? 'right-0 opacity-100' : '-right-full opacity-0'"
                ref="speedRef"
              >
                <div
                  class="flex px-2 py-3 cursor-pointer font-semibold border-b border-gray-200"
                  @click.stop="setPopupActive('menu')"
                >
                  <span class="material-icons mr-1"> chevron_left </span>Tốc độ phát
                </div>

                <div
                  class="flex items-center px-3 py-2 cursor-pointer hover:bg-rem-quiet-dark hover:bg-opacity-30 transition duration-300"
                  v-for="i in 8"
                  :key="i"
                  @click.stop="handleChangeSpeed(i / 4)"
                >
                  <div class="w-6 mr-2">
                    <span class="material-icons-outlined text-xl" v-show="i / 4 === playbackSpeed">
                      check
                    </span>
                  </div>
                  {{ i / 4 === 1 ? 'Chuẩn' : i / 4 + 'x' }}
                </div>
              </div>

              <div
                class="absolute bottom-0 right-0 w-52 max-h-64 sm:w-64 transition-all duration-300 flex flex-col overflow-x-hidden overflow-y-auto"
                :class="popupActive === 'quality' ? 'right-0 opacity-100' : '-right-full opacity-0'"
                ref="qualityRef"
              >
                <div
                  class="flex p-2 sm:px-2 sm:py-3 cursor-pointer font-semibold border-b border-gray-200"
                  @click.stop="setPopupActive('menu')"
                >
                  <span class="material-icons mr-1"> chevron_left </span>Chất lượng
                </div>

                <div
                  class="flex items-center px-3 py-2 cursor-pointer transition-all duration-300 hover:bg-rem-quiet-dark hover:bg-opacity-30"
                  v-for="quality in [1080, 720, 480, 360, 144]"
                  :key="quality"
                  @click.stop="handleActiveSetting(false)"
                >
                  <div class="w-6 mr-2">
                    <span class="material-icons-outlined text-xl" v-show="quality === 1080">
                      check
                    </span>
                  </div>
                  {{ quality }}p
                </div>
              </div>

              <div
                class="absolute bottom-0 w-52 max-h-64 sm:w-64 flex flex-col transition duration-300"
                :class="
                  popupActive === 'subtitles' ? 'right-0 opacity-100' : '-right-full opacity-0'
                "
                ref="subtitlesRef"
              >
                <div
                  class="flex p-2 sm:px-2 sm:py-3 cursor-pointer font-semibold border-b border-gray-200"
                  @click.stop="setPopupActive('menu')"
                >
                  <span class="material-icons mr-1"> chevron_left </span>Phụ đề
                </div>

                <div
                  class="flex items-center px-3 py-2 cursor-pointer transition duration-300 hover:bg-rem-quiet-dark hover:bg-opacity-30"
                  v-for="sub in ['Tiếng việt', 'English', 'Tắt']"
                  @click.stop="handleActiveSetting(false)"
                  :key="sub"
                >
                  <div class="w-6 mr-2">
                    <span class="material-icons-outlined text-xl" v-show="sub === 'Tắt'">
                      check
                    </span>
                  </div>
                  {{ sub }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import {} from 'vue-router'
import {
  setDoc,
  serverTimestamp,
  doc,
  updateDoc,
  getDoc,
  DocumentData,
  DocumentSnapshot
} from '@firebase/firestore'
import videojs, { VideoJsPlayer } from 'video.js'
import RemFlashToasts, { TypeToast } from './RemFlashToasts.vue'
import { timePipe } from '../../shared/utils'
import { db } from '../../shared/firebase'

type PopupActiveType = 'menu' | 'speed' | 'quality' | 'subtitles'

interface PlayerProp {
  uid?: string
  filmId: string | null
  epName: string | null
  name: string | null
  epIndex: number | 0
  prevEp: number | 0
  prevEpName: string | '1'
  totalEp: number | 1
  source?: string
  loading: boolean
}

const props = defineProps<PlayerProp>()
defineEmits<{ (e: 'change-ep', ep: 'prev' | 'next'): void }>()

const playerRef = ref<HTMLVideoElement | null>(null)
const seekRef = ref<HTMLDivElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const player = ref<VideoJsPlayer | null>(null)
const typeToat = ref<TypeToast>('idle')
const popupActive = ref<PopupActiveType>('menu')

const menuRef = ref<HTMLDivElement | null>(null)
const speedRef = ref<HTMLDivElement | null>(null)
const subtitlesRef = ref<HTMLDivElement | null>(null)
const qualityRef = ref<HTMLDivElement | null>(null)
const timeTooltip = ref<HTMLSpanElement | null>(null)

const popupHeight = ref<number>(0)
const currentTime = ref<number>(0)
const duration = ref<number>(0)
const timeHover = ref<number>(0)
const timeOutId = ref<NodeJS.Timeout | null>(null)
const toastId = ref<NodeJS.Timeout | null>(null)
const volume = ref<number>(JSON.parse(localStorage.getItem('volume') || '100'))
const playbackSpeed = ref<number>(1)
const isDataLoading = ref<boolean>(false)
const isPause = ref<boolean>(false)
const isSettingActive = ref<boolean>(false)
const isSeeking = ref<boolean>(false)
const isFullScreen = ref<boolean>(false)
const isHover = ref<boolean>(false)
const end = ref<boolean>(false)

const popups: { [key: string]: any } = {
  menu: menuRef,
  speed: speedRef,
  subtitles: subtitlesRef,
  quality: qualityRef
}

const isMobile = () => /iPhone|iPad|iPod|Android/i.test(window?.navigator?.userAgent)

const changePopupHeight = (popupType: PopupActiveType) => {
  if (popups[popupType].value) {
    const elementHeight = popups[popupType].value.offsetHeight
    popupHeight.value = elementHeight > 256 ? 256 : elementHeight
  }
}

const setPopupActive = (type: PopupActiveType): void => {
  popupActive.value = type
  changePopupHeight(type)
}

const handleActiveSetting = (isOpen: boolean): void => {
  if (isOpen) {
    setTimeout(() => {
      changePopupHeight('menu')
      popupActive.value = 'menu'
    }, 0)
  } else {
    changePopupHeight('menu')
    popupActive.value = 'menu'
  }
  isSettingActive.value = !isSettingActive.value
}

const handleClickCapture = (e: any): void => {
  if (e.detail === 2 && !isMobile()) {
    isFullScreen.value = true
  } else {
    handleTogglePlay()
  }
}

const handleTogglePlay = (): void => {
  if (isSettingActive.value) {
    isSettingActive.value = false
    return
  }
  if (currentTime.value >= duration.value) {
    currentTime.value = 0
  }
  isPause.value = !isPause.value
}

const handleHoverTimeline = (e: any) => {
  if (!playerRef.value || !seekRef.value || !timeTooltip.value) return

  const offset =
    (e.clientX - (e.target as any).getBoundingClientRect().left) / seekRef.value.offsetWidth

  const newTime = (Math.abs(offset) === Infinity || isNaN(offset) ? 0 : offset) * duration.value

  if (isSeeking.value) {
    currentTime.value = newTime
    player.value?.currentTime(currentTime.value)
  }
  timeHover.value = newTime

  timeTooltip.value.style.display = 'block'
  timeTooltip.value.style.left = e.offsetX + 15 + 'px'
}

const handleLeaveTimeline = () => {
  isSeeking.value = false
  timeTooltip.value!.style.display = 'none'
}

const handleExitScreenFull = (): void => {
  if (!document.fullscreenElement) {
    isFullScreen.value = false
  }
}

const handleToggleVolume = () => {
  volume.value = volume.value === 0 ? 100 : 0
}

const handleScreenHover = (): void => {
  if (timeOutId.value) clearTimeout(timeOutId.value)
  isHover.value = true
  timeOutId.value = setTimeout(() => {
    isHover.value = false
  }, 2000)
}

const handleKeyup = (e: KeyboardEvent): void => {
  if (!player.value || player.value?.duration() < 1) return
  if (
    document.querySelectorAll('.input-comment')[0] === document.activeElement ||
    document.querySelectorAll('.input-comment')[1] === document.activeElement
  )
    return
  if (document.getElementById('search-input') === document.activeElement) return
  if (containerRef.value?.contains(document.activeElement)) (document.activeElement as any)?.blur()

  if (e.key === ' ' || e.key === 'k') isPause.value = !isPause.value
  if (e.key === 'ArrowLeft') {
    player.value.currentTime(currentTime.value - 10 > 0 ? (currentTime.value -= 10) : 0)
    typeToat.value = 'forward'
  }
  if (e.key === 'ArrowRight') {
    player.value.currentTime(
      currentTime.value + 10 < player.value.duration()
        ? (currentTime.value += 10)
        : player.value.duration()
    )
    typeToat.value = 'backward'
  }
  if (e.key === 'ArrowUp') {
    if (volume.value + 5 > 100) {
      volume.value = 100
      return
    }
    volume.value = volume.value + 5
    typeToat.value = 'volup'
  }
  if (e.key === 'ArrowDown') {
    if (volume.value - 5 < 0) {
      volume.value = 0
      return
    }
    volume.value = volume.value - 5
    typeToat.value = 'voldown'
  }
  if (e.key === 'f') isFullScreen.value = !isFullScreen.value
  if (e.key === 'm') {
    typeToat.value = 'mute'
    handleToggleVolume()
  }
}

const handleKeyDown = (e: KeyboardEvent): void => {
  if (!player.value || player.value?.duration() < 1) return
  if (
    document.querySelectorAll('.input-comment')[0] === document.activeElement ||
    document.querySelectorAll('.input-comment')[1] === document.activeElement
  )
    return
  if (document.getElementById('search-input') === document.activeElement) return
  if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault()
}

const handleChangeSpeed = (speed: number): void => {
  setPopupActive('menu')
  playbackSpeed.value = speed
}

const createPlayer = (source: string): void => {
  if (playerRef.value && props.source) {
    player.value = videojs(
      playerRef.value!,
      {
        autoplay: true,
        controls: false,
        controlBar: false,
        sources: [{ src: props.source! }]
      },
      function () {
        this.on('timeupdate', () => {
          currentTime.value = this.currentTime() || 0
        })
        this.on('loadeddata', () => {
          currentTime.value = this.currentTime() || 0
          duration.value = this.duration() || 0
        })
        this.on('playing', () => {
          isPause.value = this.paused()
          isDataLoading.value = false
        })
        this.on('pause', () => {
          isPause.value = true
        })
        this.on('ended', () => {
          isPause.value = true
          end.value = true
        })

        this.src({ src: source })

        getCurrentTime()?.then((snapshot) => {
          this.currentTime(snapshot.data()?.currentTime || 0)
        })

        window.addEventListener('keyup', handleKeyup, { capture: false })
        window.addEventListener('keydown', handleKeyDown, { capture: false })
      }
    )

    document.querySelector<HTMLDivElement>('.vjs-loading-spinner')?.remove()
    document.querySelector<HTMLDivElement>('.vjs-text-track-display')?.remove()
    document.querySelector<HTMLDivElement>('.vjs-error-display')?.remove()
    document.querySelector<HTMLDivElement>('.vjs-modal-dialog')?.remove()
    document.querySelector<HTMLDivElement>('.vjs-big-play-button')?.remove()
  }
}

const addHistory = (): void => {
  if (!props.uid || currentTime.value < 10) return
  setDoc(doc(db, `users/${props.uid}/recent/${props.filmId}/episode/${props.prevEp || 0}`), {
    epIndex: props.prevEp || 0,
    epName: props.prevEpName || '1',
    currentTime: currentTime.value,
    duration: duration.value,
    createdAt: serverTimestamp()
  })

  updateDoc(doc(db, `users/${props.uid}/recent/${props.filmId}`), {
    epLastestName: props.prevEpName || '1',
    epLastest: props.prevEp || 0
  })
}

const getCurrentTime = (): Promise<DocumentSnapshot<DocumentData>> | null => {
  if (!props.uid) return null
  return getDoc(doc(db, `users/${props.uid}/recent/${props.filmId}/episode/${props.epIndex || 0}`))
}

document.addEventListener('fullscreenchange', handleExitScreenFull)

watch(
  () => playerRef.value,
  () => createPlayer(props.source!)
)

watch(
  () => isPause.value,
  () => {
    if (isPause.value) {
      player.value?.pause()
      typeToat.value = 'pause'
    } else {
      player.value?.play()
      typeToat.value = 'play'
    }
  }
)

watch(
  () => props.source,
  (source) => {
    if (!source?.length) return
    end.value = false
    addHistory()
    setTimeout(() => {
      createPlayer(source)
    }, 0)
  }
)

watch(
  () => typeToat.value,
  () => {
    if (toastId.value) clearTimeout(toastId.value)
    toastId.value = setTimeout(() => {
      typeToat.value = 'idle'
    }, 500)
  }
)

watch(
  () => isFullScreen.value,
  (isFullScreen) => {
    if (isFullScreen) containerRef.value?.requestFullscreen()
    else document.fullscreenElement && document.exitFullscreen()
  }
)

watch(
  () => volume.value,
  (volume) => {
    player.value?.volume(volume / 100)
    localStorage.setItem('volume', JSON.stringify(volume))
  }
)

watch(
  () => playbackSpeed.value,
  (value) => player.value?.playbackRate(value)
)

onBeforeUnmount(() => {
  if (!props.uid || currentTime.value < 10) return
  setDoc(doc(db, `users/${props.uid}/recent/${props.filmId}/episode/${props.epIndex || 0}`), {
    epIndex: props.epIndex || 0,
    epName: props.epName || '1',
    currentTime: currentTime.value,
    duration: duration.value,
    createdAt: serverTimestamp()
  })

  updateDoc(doc(db, `users/${props.uid}/recent/${props.filmId}`), {
    epLastest: props.epIndex || 0,
    epLastestName: props.epName || '1'
  })
  document.removeEventListener('fullscreenchange', handleExitScreenFull)
  window.removeEventListener('keyup', handleKeyup, { capture: false })
  window.removeEventListener('keydown', handleKeyDown, { capture: false })
})
</script>

<style scoped>
#mainVideo {
  width: 100%;
  height: fit-content;
}
.vjs-paused,
.vjs_video_3-dimensions {
  width: 100% !important;
  height: fit-content !important;
  background: #131313;
}

video {
  width: 100%;
  background: #131313;
}

.vjs-text-track-display {
  padding-bottom: 55%;
  background: #141414;
}

.volume-input {
  -webkit-appearance: none;
  width: 0;
  height: 3px;
  background: #fff;
  cursor: pointer;
  transition: 0.2s;
}

.volume-input::-webkit-slider-thumb {
  opacity: 0;
  -webkit-appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  transition: 50ms;
}

.volume-container:focus > .volume-input,
.volume-container:hover > .volume-input {
  width: 80px;
}

.volume-container:hover > .volume-input::-webkit-slider-thumb {
  opacity: 1;
}

.spinner {
  width: 40px;
  height: 40px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #8d8d8d;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: sk-bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

.sk-fading-circle {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
}

.sk-fading-circle .sk-circle {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.sk-fading-circle .sk-circle:before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: #9c9c9c;
  border-radius: 100%;
  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
}
.sk-fading-circle .sk-circle2 {
  transform: rotate(30deg);
}
.sk-fading-circle .sk-circle3 {
  transform: rotate(60deg);
}
.sk-fading-circle .sk-circle4 {
  transform: rotate(90deg);
}
.sk-fading-circle .sk-circle5 {
  transform: rotate(120deg);
}
.sk-fading-circle .sk-circle6 {
  transform: rotate(150deg);
}
.sk-fading-circle .sk-circle7 {
  transform: rotate(180deg);
}
.sk-fading-circle .sk-circle8 {
  transform: rotate(210deg);
}
.sk-fading-circle .sk-circle9 {
  transform: rotate(240deg);
}
.sk-fading-circle .sk-circle10 {
  transform: rotate(270deg);
}
.sk-fading-circle .sk-circle11 {
  transform: rotate(300deg);
}
.sk-fading-circle .sk-circle12 {
  transform: rotate(330deg);
}
.sk-fading-circle .sk-circle2:before {
  animation-delay: -1.1s;
}
.sk-fading-circle .sk-circle3:before {
  animation-delay: -1s;
}
.sk-fading-circle .sk-circle4:before {
  animation-delay: -0.9s;
}
.sk-fading-circle .sk-circle5:before {
  animation-delay: -0.8s;
}
.sk-fading-circle .sk-circle6:before {
  animation-delay: -0.7s;
}
.sk-fading-circle .sk-circle7:before {
  animation-delay: -0.6s;
}
.sk-fading-circle .sk-circle8:before {
  animation-delay: -0.5s;
}
.sk-fading-circle .sk-circle9:before {
  animation-delay: -0.4s;
}
.sk-fading-circle .sk-circle10:before {
  animation-delay: -0.3s;
}
.sk-fading-circle .sk-circle11:before {
  animation-delay: -0.2s;
}
.sk-fading-circle .sk-circle12:before {
  animation-delay: -0.1s;
}

@keyframes sk-circleFadeDelay {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
</style>
