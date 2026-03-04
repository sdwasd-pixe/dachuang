<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SvgBg from '@/components/SvgBg.vue'

const router = useRouter()
const account = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleRegister = () => {
  if (!account.value.trim()) {
    alert('请输入电话号码或邮箱！')
    return
  }
  if (!password.value.trim()) {
    alert('请输入密码！')
    return
  }
  if (password.value.length < 6) {
    alert('密码长度不能少于6位！')
    return
  }
  if (confirmPassword.value !== password.value) {
    alert('两次输入的密码不一致！')
    return
  }

  console.log('注册信息：', {
    account: account.value,
    password: password.value
  })
  alert('注册成功！即将跳转到登录页')
  router.push('/login')

  account.value = ''
  password.value = ''
  confirmPassword.value = ''
}
</script>

<template>
  <div class="login-page">
    <div class="svg-bg-box">
      <SvgBg />
    </div>

    <transition name="slide-fade">
      <div class="login-panel" key="register">
        <!-- 标题外层容器：控制宽度和偏移，实现和输入框居中对齐 -->
        <div class="title-container">
          <h1 class="login-title">简启未来</h1>
        </div>

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

        <div class="input-box">
          <span class="input-label">确认密码</span>
          <span class="divider">|</span>
          <input
              class="login-input"
              v-model="confirmPassword"
              placeholder="请再次输入密码"
              type="password"
          />
        </div>


        <div class="btn-wrap">
          <button class="btn primary full" @click="handleRegister">
            注册 / 登录
          </button>
        </div>

        <p class="back" @click="router.push('/login')">
          &lt; 已有账号，返回登录
        </p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
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
  margin-right: calc(clamp(40px, 8vw, 120px) - 70px);
  position: relative;
  z-index: 10;
}

/* 新增标题容器：宽度和输入框一致，偏移同步，实现居中对齐 */
.title-container {
  width: 600px; /* 和输入框宽度一致 */
  margin-left: -200px; /* 和输入框左偏移一致 */
  margin-bottom: 40px;
}

.login-title {
  font-size: 64px;
  font-weight: 600;
  text-align: center; /* 文字在容器内居中 */
  margin: 0; /* 清除默认margin，保证对齐 */
  transform: translateX(-100px);

}

.input-box {
  width: 600px;
  height: 90px;
  border-radius: 45px;
  background: white;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  overflow: hidden;
  padding: 0 20px;
  margin-right: 100px;
  margin-left: -200px;
  transform: translateX(-100px);
}

.input-box {
  display: flex;
  align-items: center;
}

.input-label {
  font-size: 24px;
  color: #666; /* 固定宽度 */

  margin: 14px;
}

.divider {
  width: 20px;       /* 固定宽度 */
  text-align: center;
  font-size: 24px;
  color: black;
}

.login-input {
  flex: 2;
  height: 45px;
  padding: 0 5px;
}

.login-input {
  flex: 1;
  height: 100%;
  border: none;
  font-size: 24px;
  outline: none;
  background: transparent;
  padding-top: 6px;   /* 往下微调 */
}

.btn-wrap {
  display: flex;
  width: 600px;
  margin-left: -200px;
  margin-bottom: 20px;
}

.btn {
  width: 100%;
  height: 90px;
  border-radius: 45px;
  font-size: 32px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;
  transform: translateX(-100px);
}

.primary {
  background: #00a9f4;
  color: #fff;
}
.primary:hover {
  background: #0098e0;
}

.back {
  margin-top: 20px;
  font-size: 20px;
  color: #888;
  cursor: pointer;
  text-align: center;
  margin-left: -200px;
  width: 600px; /* 宽度和输入框一致，文字居中 */
  transform: translateX(-100px);
}
.back:hover {
  color: #00a9f4;
}

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