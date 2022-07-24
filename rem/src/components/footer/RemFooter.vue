<template>
  <div
    class="flex flex-col-reverse sm:flex-row gap-2 py-2 px-3 md:px-10 justify-between items-center border-solid border-t border-gray-500 bg-rem-dark"
  >
    <div class="flex flex-col">
      <h4 class="text-gray-400">
        <span class="text-rem underline cursor-pointer text-lg">remapp.tv</span> | Web xem phim giải
        trí miễn phí không quảng cáo.
      </h4>

      <p class="leading-4">
        Mọi thông tin liên hệ :
        <span class="font-light cursor-pointer text-teal-600">
          ongphamtrungnguendeveloper@email.dev
        </span>
      </p>
    </div>

    <div class="flex items-center justify-end">
      <router-link class="w-[70px] h-full" to="/">
        <img class="w-full" :src="'/rem-logo.png'" alt="rem logo" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
