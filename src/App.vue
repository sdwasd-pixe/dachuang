<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <component :is="route.meta.layout || 'div'">
    <router-view />
  </component>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* 补充 1920×1080 全局适配：默认适配大屏，小屏自动兼容 */
body {
  font-family: sans-serif;
  background: #ffffff;
  min-width: 1920px;  /* 强制最小宽度1920px（大屏兜底） */
  min-height: 1080px; /* 强制最小高度1080px（大屏兜底） */
  overflow-x: hidden; /* 防止1920px以下屏幕横向滚动 */
}

/* 小屏适配：取消1920×1080强制限制 */
@media (max-width: 1920px) {
  body {
    min-width: unset;
    min-height: unset;
  }
}
</style>