<template>
  <div class="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 sm:grid-cols-3 md:grid-cols-4 p-1 lg:p-2">
    <div
      class="skt-item flex relative w-full pb-[135%] drop-shadow-lg bg-rem-so-dark"
      v-for="item in 24"
      :key="item"
    ></div>
  </div>
</template>

<script lang="ts" setup></script>
