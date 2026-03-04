<script setup>
import { useRoute } from 'vue-router'
import TopNav from '@/components/TopNav.vue'

const route = useRoute()
// 排除登录/注册页
const isAuthPage = ['Login', 'Register'].includes(route.name)
</script>

<template>
  <div class="main-layout">
    <!-- 导航栏（非登录页显示） -->
    <TopNav v-if="!isAuthPage" />
    <!-- 页面内容（自动预留导航栏高度） -->
    <main class="page-content" :style="{ paddingTop: !isAuthPage ? '60px' : '0' }">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.main-layout {
  min-height: 100vh;
  background: #f5f5f5;
}

.page-content {
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 20px;
  box-sizing: border-box;
}

/* 移动端 */
@media (max-width: 768px) {
  .page-content {
    padding-top: 50px !important;
    min-height: calc(100vh - 50px);
  }
}
</style>