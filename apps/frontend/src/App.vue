<template>
  <div id="app">
    <router-view />
  </div>
  <live2d
    :style="style"
    :model="['bilibili-live/33', 'closet-default-v2&spring-2018-upper&spring-2018-lower&cba-hat']"
    :direction="direction"
    :size="size"
  />
</template>

<script setup lang="ts">
// @ts-ignore
import live2d from 'live2d-openfs'

import { ref } from 'vue'

// 位置
const direction = ref('left')
{
  /* 位置css */
}
const style = ref('position: fixed; bottom: 20px; left: 20px;z-index: 900')
{
  /* 宽高 */
}
// const width = ref(400)
// const height = ref(400)
{
  /* 大小 */
}
const size = ref(250)
</script>

<style>
#app {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>
