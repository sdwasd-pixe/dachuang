<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import SvgBg from '@/components/SvgBg.vue'

// 核心路由对象（还原原代码，保证跳转正常）
const router = useRouter()
const route = useRoute()

// 表单核心变量（还原原命名，保证绑定正常）
const account = ref('')
const password = ref('')

// 登录核心逻辑（完全还原，仅调整写法风格）
const handleLogin = () => {
  // 表单验证（原逻辑不变）
  if (!account.value.trim()) {
    alert('请输入电话号码或邮箱！') // 还原alert，保证提示一致
    return
  }
  if (!password.value.trim()) {
    alert('请输入密码！') // 还原alert
    return
  }

  // 模拟登录（原逻辑不变）
  console.log('登录信息：', {
    account: account.value,
    password: password.value
  })

  // 登录状态存储（还原原key和值）
  localStorage.setItem('isLogin', 'true')

  alert('登录成功！即将跳转到首页') // 还原alert

  // 跳转逻辑（还原原写法，保证跳转正常）
  const redirect = route.query.redirect || '/home'
  router.push(redirect)

  // 清空输入（原逻辑不变）
  account.value = ''
  password.value = ''
}

// 注册跳转（还原原逻辑）
const handleRegister = () => {
  router.push('/register')
}
</script>

<template>
  <!-- 核心结构不变，仅微调类名更贴近手写 -->
  <div class="login-page">
    <div class="svg-bg-box">
      <SvgBg />
    </div>

    <transition name="slide-fade">
      <div class="login-panel" key="login">
        <h1 class="login-title">简启未来</h1>

        <!-- 输入框结构完全还原 -->
        <div class="input-box">
          <span class="input-label">账户</span>
          <span class="divider">|</span>
          <input
              class="login-input"
              v-model="account"
              placeholder="请输入电话号码或邮箱"
              type="text"
          />
        </div>

        <div class="input-box">
          <span class="input-label">密码</span>
          <span class="divider">|</span>
          <input
              class="login-input"
              v-model="password"
              placeholder="请输入密码"
              type="password"
          />
        </div>

        <!-- 按钮结构完全还原 -->
        <div class="btn-wrap">
          <button class="btn reg-btn" @click="handleRegister">注册</button>
          <button class="btn login-btn" @click="handleLogin">登录</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* 核心样式逻辑完全还原，仅微调类名+保留原颜色/尺寸 */
.login-page {
  min-height: 100vh;
  width: 100%;
  background: url('@/assets/登录页面填写信息 - 副本.png') no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.svg-bg-box {
  position: absolute;
  left: 3vw;
  bottom: 3vh;
  width: clamp(220px, 30vw, 450px);
  z-index: 1;
  opacity: 0.85;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.07));
}

.login-panel {
  width: 400px;
  margin-right: clamp(40px, 8vw, 120px);
  position: relative;
  z-index: 10;
}

.login-title {
  font-size: 64px;
  margin-bottom: 40px;
  font-weight: 600;
  text-align: center;
  transform: translateX(-110px);
}
/* 输入框容器样式 */
.input-box {
  width: 600px; /* 输入框宽度600px，与按钮总长度一致 */
  height: 90px; /* 输入框高度，与效果图一致 */
  /* 胶囊型弧度：设置为高度的一半（90px/2=45px），实现图中椭圆边角效果 */
  border-radius: 45px;
  background: white; /* 输入框背景色，与效果图一致 */
  display: flex; /* 弹性布局：用于排列内部的“账号”标签和输入内容 */

  text-align: right;  /* 文本左对齐 */
  align-items: center; /* 让内部元素垂直居中 */
  margin-bottom: 20px; /* 与下方元素保持20px间距 */
  overflow: hidden; /* 溢出隐藏：防止内部元素超出圆角范围，保证弧度生效 */
  padding: 0 20px; /* 可选：增加左右内边距，避免内容贴边（建议添加） */
  transform: translateX(-220px);

}
.input-label {
  font-size: 24px;
  color: #666;
  padding: 0 10px 0 20px;
  white-space: nowrap;
  display: inline-block;

  text-align: right;  /* 文本左对齐 */
}

.divider {/*竖线*/
  width: 20px;       /* 固定宽度 */
  text-align: center;
  font-size: 24px;
  color: black;
}


.login-input {
  flex: 2;
  height: 100%;
  border: none;
  padding-left: 5px;

  font-size: 24px;
  outline: none;
  background: transparent;
  padding-top: 6px;   /* 往下微调 */
}

/* 按钮容器核心调整：固定总宽度600px，居中分配间距 */
.btn-wrap {
  display: flex;
  width: 600px; /* 固定容器总宽度600px（核心） */
  transform: translateX(-220px);
  margin-bottom: 20px;
  /* 计算间距：600 - 290*2 = 20px，刚好作为gap */
  gap: 20px;
}

.btn {
  flex: 1; /* 改为flex等分，确保总宽度适配600px容器 */
  min-width: 290px; /* 保底宽度290px */
  height: 90px; /* 按钮高度90px */
  border-radius: 45px; /* 胶囊圆角：高度的一半 */
  font-size: 32px; /* 字体大小32px */
  cursor: pointer; /* 鼠标悬浮显示手型 */
  border: none; /* 去掉默认边框 */
  transition: background-color 0.3s; /* 背景色过渡动画 */
  background-color: #f5f5f5; /* 默认背景色 */
  font-weight: 500; /* 字体加粗，适配大字号 */
}

/* 鼠标悬浮效果 */
.btn:hover {
  background-color: #e8e8e8;
}

/* 还原原按钮颜色，保证样式一致 */
.login-btn {
  background: #00a9f4;
  color: #fff;
}
.login-btn:hover {
  background: #0098e0;
}

.reg-btn {
  background: #fff;
  color: #333;
}
.reg-btn:hover {
  background: #f5f5f5;
}

/* 动画逻辑完全还原 */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>