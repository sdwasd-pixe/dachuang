//简历svg
<script setup>
import { ref } from 'vue'
// 导入 SVG 组件（假设已注册为全局组件，或局部导入）
import ResumeIcon from '@/components/icons/ResumeIcon.vue'
import ForumIcon from '@/components/icons/ForumIcon.vue'
import InterviewIcon from '@/components/icons/InterviewIcon.vue'

// 数据结构：icon 字段换成组件
const mainOptions = ref([
  {
    title: '简历创建',
    icon: ResumeIcon, // SVG 组件
    color: '#e53935'
  },
  {
    title: '论坛中心',
    icon: ForumIcon,
    color: '#fdd835'
  },
  {
    title: '面试模拟',
    icon: InterviewIcon,
    color: '#2196f3'
  }
])
</script>

<template>
  <div class="home-content">
    <div class="main-options">
      <div class="option-card" v-for="opt in mainOptions" :key="opt.title">
        <!-- 用 component 动态渲染 SVG 组件 -->
        <component
            :is="opt.icon"
            class="opt-icon"
            :style="{ color: opt.color, fill: opt.color }"
        />
        <span class="opt-title">{{ opt.title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 样式和方案 1 一致，仅保留 opt-icon 样式 */
.opt-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
/* 其他样式不变 */
</style>