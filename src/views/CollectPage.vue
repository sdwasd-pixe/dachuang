<template>
  <div class="collect-page">
    <!-- 顶部标题栏 -->
    <div class="collect-header">
      <div class="header-left">
        <svg class="icon-star" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
        </svg>
        <h1>我的收藏</h1>
      </div>
      <div class="header-right">
        <button class="back-btn" @click="$router.push('/forum')">
          返回论坛
        </button>
      </div>
    </div>

    <!-- 内容区 -->
    <div class="collect-content">
      <!-- 空状态 -->
      <div v-if="collectedPosts.length === 0" class="empty-state">
        <div class="empty-box">
          <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
          </svg>
          <p class="empty-text">暂无收藏内容</p>
          <span class="empty-desc">快去论坛收藏喜欢的帖子吧～</span>
          <button class="go-btn" @click="$router.push('/forum')">
            去逛逛
          </button>
        </div>
      </div>

      <!-- 收藏列表 -->
      <div v-else class="collect-list">
        <div
            v-for="post in collectedPosts"
            :key="post.id"
            class="collect-card"
        >
          <!-- 作者信息 -->
          <div class="card-header">
            <div class="avatar">
              {{ post.author.slice(0,1) }}
            </div>
            <div class="author-info">
              <div class="name">{{ post.author }}</div>
              <div class="time">收藏于 ···</div>
            </div>
            <button
                class="uncollect-btn"
                @click.stop="toggleCollect(post.id)"
            >
              已收藏
            </button>
          </div>

          <!-- 内容 -->
          <div class="card-body" @click="$router.push(`/forum/${post.id}`)">
            <h3 class="post-title" v-if="post.title">{{ post.title }}</h3>
            <p class="post-content">{{ post.content }}</p>

            <!-- 图片预览 -->
            <div v-if="post.images?.length" class="post-images">
              <img
                  v-for="(img, idx) in post.images.slice(0,3)"
                  :key="idx"
                  :src="img"
                  alt=""
              />
            </div>
          </div>

          <!-- 底部操作 -->
          <div class="card-footer">
            <div class="action">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span>{{ post.isLiked ? '已点赞' : '点赞' }}</span>
            </div>
            <div class="action">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>{{ post.comments?.length || 0 }} 条评论</span>
            </div>
            <div class="action active">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>
              <span>已收藏</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useForumStore } from '@/stores/forumStore'

// 1. 获取 store 实例
const forumStore = useForumStore()

// 2. 使用 storeToRefs 提取响应式数据 (包含我们在 store 中定义的 getter)
// 这样 collectedPosts 就能在 template 中直接使用了
const { collectedPosts } = storeToRefs(forumStore)

// 3. 提取方法 (actions 不需要 storeToRefs)
const { toggleCollect } = forumStore
</script>

<style scoped>
/* 整体页面 */
.collect-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 20px;
  background: #f7f8fa;
}

/* 顶部标题栏 */
.collect-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.icon-star {
  width: 26px;
  height: 26px;
  color: #ffc107;
}
.header-left h1 {
  font-size: 24px;
  font-weight: 600;
  color: #1d2129;
  margin: 0;
}
.back-btn {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background: #fff;
  color: #4e5969;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: 0.2s;
}
.back-btn:hover {
  background: #f2f3f5;
}

/* 内容区 */
.collect-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 空状态 */
.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
}
.empty-box {
  text-align: center;
  color: #86909c;
}
.empty-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 16px;
  color: #c9cdd4;
}
.empty-text {
  font-size: 16px;
  margin: 0 0 6px;
  color: #4e5969;
}
.empty-desc {
  font-size: 14px;
  color: #86909c;
  display: block;
  margin-bottom: 24px;
}
.go-btn {
  padding: 10px 24px;
  border-radius: 20px;
  border: none;
  background: #1890ff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
}
.go-btn:hover {
  background: #096dd9;
}

/* 收藏卡片列表 */
.collect-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.collect-card {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  border: 1px solid #e5e6eb;
  transition: 0.2s;
  cursor: pointer;
}
.collect-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  transform: translateY(-1px);
}

/* 卡片头部 */
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e8f3ff;
  color: #1890ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
}
.author-info {
  flex: 1;
  margin-left: 12px;
}
.name {
  font-size: 15px;
  font-weight: 500;
  color: #1d2129;
  margin-bottom: 2px;
}
.time {
  font-size: 12px;
  color: #86909c;
}
.uncollect-btn {
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid #e5e6eb;
  background: #f7f8fa;
  color: #4e5969;
  font-size: 12px;
  cursor: pointer;
  transition: 0.2s;
}
.uncollect-btn:hover {
  background: #f2f3f5;
  color: #f53f3f;
  border-color: #f53f3f;
}

/* 卡片内容 */
.card-body {
  margin-bottom: 20px;
}
.post-title {
  font-size: 18px;
  font-weight: 600;
  color: #1d2129;
  margin: 0 0 10px;
  line-height: 1.4;
}
.post-content {
  font-size: 15px;
  color: #4e5969;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.post-images {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}
.post-images img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  background: #f2f3f5;
}

/* 底部操作 */
.card-footer {
  display: flex;
  gap: 30px;
  padding-top: 16px;
  border-top: 1px solid #f2f3f5;
}
.action {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #86909c;
}
.action.active {
  color: #ffc107;
}
</style>