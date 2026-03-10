<template>
  <div class="collect-container">
    <!-- 顶部标题栏 -->
    <div class="collect-header">
      <svg  class="icon" viewBox="0 0 1105 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="24" height="24"><path d="M1071.543358 476.241493c17.008625-17.008625 25.512937-34.017249 25.512937-51.025875 8.504312-51.025874-25.512937-93.547436-76.538811-102.051748l-246.625059-42.521562H765.388113L663.336365 51.025874C654.832052 34.017249 637.823428 17.008625 620.814803 8.504312 578.293241-8.504312 527.267367 8.504312 510.258742 51.025874L399.702681 280.642308h-8.504312l-238.120746 42.521562c-17.008625 0-34.017249 8.504312-51.025875 25.512937-34.017249 34.017249-34.017249 93.547436 0 127.564686l178.59056 178.590559v8.504313l-42.521562 255.129371c0 17.008625 0 42.521562 8.504313 59.530186 25.512937 42.521562 76.538811 59.530187 119.060373 34.01725l221.112121-119.060373H595.301866l221.112121 119.060373c8.504312 8.504312 25.512937 8.504312 42.521562 8.504312 51.025874-8.504312 76.538811-51.025874 68.034499-102.051748l-42.521562-255.129371v-8.504313l187.094872-178.590559zM833.422612 595.301866c-25.512937 17.008625-34.017249 51.025874-25.512937 76.538811l42.521562 255.129371-221.112122-110.556061c-25.512937-17.008625-59.530187-17.008625-85.043123 0L323.16387 935.47436v-8.504312l42.521562-255.129371c0-25.512937-8.504312-59.530187-25.512937-76.538811L170.086247 416.711306v-8.504312l238.120747-34.01725h-8.504313c34.017249 0 68.034499-25.512937 85.043124-51.025874L586.797553 85.043124l110.556061 229.616434 8.504312 8.504312c8.504312 25.512937 34.017249 42.521562 59.530187 42.521562l238.120746 34.017249v17.008625L833.422612 595.301866z" fill="#2c2c2c" ></path></svg>
       <h2 class="collect-title">我的收藏</h2>
    </div>

    <!-- 收藏内容列表 -->
    <div class="collect-list">
      <!-- 收藏项卡片 -->
      <article class="collect-card" v-for="post in collectedPosts" :key="post.id">
        <div class="post-header">
          <div class="avatar">
            <!--          //头像的svg的位置-->
          </div>
          <span class="author-name">{{ post.author }}</span>
        </div>
        <h3 class="post-title">{{ post.title }}</h3>
        <!-- 核心：最多显示4行，超出省略 -->
        <div class="post-content">
          {{ post.content }}
        </div>
      </article>

      <!-- 空状态/无更多提示 -->
      <div class="no-more-tip" v-if="collectedPosts.length > 0">
        —— 没有更多内容了 ——
      </div>

      <!-- 纯空状态（可选） -->
      <div class="empty-tip" v-else>
        您还没有收藏任何帖子
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useForumStore } from '@/stores/forumStore'; // 引入你的Pinia仓库

// 获取仓库实例
const forumStore = useForumStore();

// 计算属性：筛选出已收藏的帖子
const collectedPosts = computed(() => {
  return forumStore.allPosts.filter(post => post.isCollected);
});
</script>

<style scoped>
/* 页面全局容器 - 核心修改：添加白色背景框架 */
.collect-container {
  width: 1300px; /* 改为和论坛页主内容区一致的宽度，视觉统一 */
  margin: auto; /* 调整上下外边距，更协调 */
  padding: 24px; /* 内部留白，让框架包裹内容 */
  box-sizing: border-box;
  /* 新增：白色背景框架核心样式 */
  background-color: #ffffff; /* 白色背景 */
  border: 1px solid #e5e5e5; /* 浅灰色边框，和卡片边框一致 */
  border-radius: 8px; /* 圆角，和卡片风格统一 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); /* 轻微阴影，提升层次感 */
}

/* 标题栏 - 移除定位，适配新的容器背景 */
.collect-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
  /* 移除以下定位样式，因为外层容器已有白色背景 */
  /* position: relative; */
  /* left: -480px; */
  /* top: -30px; */
  /* background-color: #ffffff; */
  /* padding: 8px 16px 10px 80px; */
  /* border-radius: 4px; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); */
  /* z-index: 10; */
  /* 新增：标题栏底部边框，分隔标题和内容 */
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}

/* 收藏标题 */
.collect-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

/* 收藏列表 */
.collect-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* 新增：列表左右内边距，避免内容贴容器边缘 */
  padding: 0 8px;
}

/* 收藏卡片 - 微调样式，适配新框架 */
.collect-card {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  /* 移除卡片顶部margin，用父容器gap控制间距 */
  margin: 0;
}

/* 卡片头部 */
.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.author-name {
  font-size: 14px;
  color: #1296db; /* 匹配设计图的蓝色 */
  font-weight: 500;
}

/* 帖子标题 */
.post-title {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin: 0 0 12px 0;
  line-height: 1.4;
}

/* 核心样式：最多4行省略 */
.post-content {
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* 最多显示4行 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line; /* 保留换行符，适配原帖子格式 */
}

/* 无更多提示 */
.no-more-tip {
  text-align: center;
  font-size: 14px;
  color: #999;
  padding: 30px 0;
  margin-top: 10px;
}

/* 空状态提示 - 适配新容器宽度 */
.empty-tip {
  text-align: center;
  width: 100%; /* 改为100%，适配外层容器宽度 */
  height: 100px;
  font-size: 16px;
  color: #666;
  padding: 100px 0;
  background: #fafafa;
  border-radius: 8px;
  /* 新增：空状态居中 */
  margin: 0 auto;
}
</style>