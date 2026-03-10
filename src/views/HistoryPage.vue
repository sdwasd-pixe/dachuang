<template>
  <div class="history-container">
    <!-- 标题栏：带清空按钮（布局对齐收藏页） -->
    <div class="history-header">
      <div class="header-left">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M959.825022 191.939717C959.825022 121.2479 902.517291 63.940169 831.825474 63.940169H191.939717C121.2479 63.940169 63.940169 121.2479 63.940169 191.939717v639.885757C63.940169 902.517291 121.2479 959.825022 191.939717 959.825022h639.885757c70.691817 0 127.999548-57.307731 127.999548-127.999548V191.939717z m-63.940168 640.059154A63.835408 63.835408 0 0 1 831.912173 895.884854H192.087827c-17.112123 0-33.270563-6.574639-45.372232-18.67631S127.880338 849.110994 127.880338 831.998871V192.001129A64.236389 64.236389 0 0 1 192.087827 127.880338h639.824346A64.037705 64.037705 0 0 1 895.884854 192.001129v639.997742z" fill="#2c2c2c"></path>
          <path d="M511.998194 192.001129c-176.73135 0-320.000677 143.269328-320.000678 320.000677s143.269328 320.000677 320.000678 320.000678 320.000677-143.269328 320.000677-320.000678-143.269328-320.000677-320.000677-320.000677z m256.060508 320.000677a254.568571 254.568571 0 0 1-43.710511 143.121218 256.988905 256.988905 0 0 1-112.708094 92.83968 255.641465 255.641465 0 0 1-242.755896-23.596451 256.992518 256.992518 0 0 1-92.839681-112.708094 255.641465 255.641465 0 0 1 23.596452-242.755896 256.992518 256.992518 0 0 1 112.708094-92.83968 255.641465 255.641465 0 0 1 242.755896 23.596451 256.988905 256.988905 0 0 1 92.83968 112.708094 254.395174 254.395174 0 0 1 20.11406 99.631066z" fill="#2c2c2c"></path>
          <path d="M544.033302 498.64662V351.851551a31.970084 31.970084 0 0 0-63.940169 0v160.031045a31.970084 31.970084 0 0 0 9.356217 22.595805L617.365812 662.521299a31.970084 31.970084 0 1 0 45.231348-45.195223z" fill="#2c2c2c"></path>
        </svg>
        <h2 class="history-title">浏览历史</h2>
      </div>
      <button class="clear-btn" @click="showClearModal = true">清空历史</button>
    </div>

    <!-- 历史记录列表 -->
    <div class="history-list">
      <!-- 遍历历史记录 -->
      <article class="history-card" v-for="item in historyList" :key="item.id" v-if="historyList.length > 0">
        <div class="post-header">
          <div class="avatar"></div>
          <span class="author-name">{{ item.author }}</span>
          <!-- 操作类型标签 -->
          <span class="action-tag" :class="item.actionType">
            {{ actionText[item.actionType] }}
          </span>
        </div>
        <h3 class="post-title">{{ item.title || '无标题' }}</h3>
        <div class="post-content">
          {{ item.content || '无内容' }}
        </div>
      </article>

      <!-- 无更多提示 -->
      <div class="no-more-tip" v-if="historyList.length > 0">
        —— 没有更多内容了 ——
      </div>

      <!-- 空状态 -->
      <div class="empty-tip" v-else>
        暂无浏览历史记录
      </div>
    </div>

    <!-- 清空确认弹框 -->
    <div class="clear-modal-overlay" v-if="showClearModal" @click="showClearModal = false">
      <div class="clear-modal" @click.stop>
        <div class="clear-modal-content">
          <p class="clear-tip-text">清空之后就什么都没有了哦~</p>
          <div class="clear-modal-btns">
            <button class="confirm-btn" @click="handleClearConfirm">确认</button>
            <button class="cancel-btn" @click="showClearModal = false">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useForumStore } from '@/stores/forumStore'

// 获取仓库实例
const forumStore = useForumStore()
// 控制清空弹框显示/隐藏
const showClearModal = ref(false)

// 读取历史记录
const historyList = computed(() => {
  console.log('当前历史记录：', forumStore.historyList);
  return forumStore.historyList || [];
});

// 操作类型文字映射
const actionText = {
  like: '点赞',
  comment: '评论',
  collect: '收藏'
};

// 确认清空历史记录
const handleClearConfirm = () => {
  forumStore.clearHistory()
  showClearModal.value = false
  alert('历史记录已清空！')
}
</script>

<style scoped>
/* 基础容器：完全对齐收藏页 */
.history-container {
  width: 1300px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

/* 标题栏：对齐收藏页布局 */
.history-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 30px; /* 统一收藏页的30px间距 */
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}

/* 标题左侧容器（图标+文字） */
.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* 图标样式：统一收藏页 */
.icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

/* 标题文字：统一收藏页 */
.history-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

/* 清空按钮：优化样式，保持交互性 */
.clear-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 20px;
  background-color: #1890ff; /* 统一设计规范的蓝色 */
  border: none;
  border-radius: 98px;
  color: white;
  font-size: 16px; /* 统一字体大小 */
  cursor: pointer;
  transition: background-color 0.2s;
}
.clear-btn:hover {
  background-color: #096dd9;
}

/* 列表容器：完全对齐收藏页 */
.history-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 8px;
}

/* 卡片样式：完全对齐收藏页 */
.history-card {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  margin: 0;
}

/* 卡片头部：继承收藏页样式，新增标签样式 */
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
  color: #1296db;
  font-weight: 500;
}

/* 操作标签：保留功能，优化样式 */
.action-tag {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 3px;
  background: #f5f5f5;
  color: #666;
}
.action-tag.like { color: #ff4d4f; background: #ffeae6; }
.action-tag.comment { color: #1890ff; background: #e6f7ff; }
.action-tag.collect { color: #faad14; background: #fff7e6; }

/* 帖子标题：完全对齐收藏页 */
.post-title {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin: 0 0 12px 0;
  line-height: 1.4;
}

/* 内容文本：完全对齐收藏页 */
.post-content {
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;
}

/* 提示文本：完全对齐收藏页 */
.no-more-tip {
  text-align: center;
  font-size: 14px;
  color: #999;
  padding: 30px 0;
  margin-top: 10px;
}
.empty-tip {
  text-align: center;
  width: 100%;
  height: 100px;
  font-size: 16px;
  color: #666;
  padding: 100px 0;
  background: #fafafa;
  border-radius: 8px;
  margin: 0 auto;
}

/* 清空确认弹框：保留功能，优化样式 */
.clear-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.clear-modal {
  width: 400px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  box-sizing: border-box;
}

.clear-tip-text {
  font-size: 18px;
  color: #333;
  text-align: center;
  margin: 0 0 24px 0;
  line-height: 1.5;
}

.clear-modal-btns {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.cancel-btn {
  padding: 8px 24px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  color: #666;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
}
.cancel-btn:hover {
  border-color: #999;
  color: #333;
}

.confirm-btn {
  padding: 8px 24px;
  border: none;
  border-radius: 6px;
  background-color: #1890ff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
}
.confirm-btn:hover {
  background-color: #096dd9;
}
</style>