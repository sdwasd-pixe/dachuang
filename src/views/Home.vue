<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// 路由跳转
const router = useRouter()

// 点击跳转方法
function goToPage(title) {
  if (title === '简历创建') {
    router.push('/resume')
  } else if (title === '论坛中心') {
    router.push('/forum')
  } else if (title === '面试模拟') {
    router.push('/interview')
  }
}

// 功能按钮数据
const functionBtns = ref([
  {
    title: '简历创建',
    borderColor: '#000'
  },
  {
    title: '论坛中心',
    borderColor: '#000'
  },
  {
    title: '面试模拟',
    borderColor: '#000'
  }
])

// 合作公司数据
const partnerCompanies = ref([
  {
    id: 1,
    logo: '',
    companyName: 'XXXX公司',
    position: 'xxx岗位',
    desc: 'xxxxxxxxxx'
  },
  {
    id: 2,
    logo: '',
    companyName: 'XXXX公司',
    position: 'xxx岗位',
    desc: 'xxxxxxxxxx'
  },
  {
    id: 3,
    logo: '',
    companyName: 'XXXX公司',
    position: 'xxx岗位',
    desc: 'xxxxxxxxxx'
  }
])
</script>

<template>
  <div class="home-container">
    <!-- 顶部功能按钮区 -->
    <div class="function-btn-wrapper">
      <div
          class="function-btn"
          v-for="btn in functionBtns"
          :key="btn.title"
          :style="{ borderColor: btn.borderColor }"
          @click="goToPage(btn.title)"
      >
        <!-- 简历创建SVG -->
        <div v-if="btn.title === '简历创建'" class="btn-icon">
          <svg t="1770795855452" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28497" width="48" height="48"><path d="M849.728 942.08H568.832a14.144 14.144 0 0 1-14.208-14.208v-6.4h309.248v6.4a14.144 14.144 0 0 1-14.144 14.208z m-11.904-121.984l-53.312-12.352c-18.88-6.016-32.64-14.592-32.64-32.64v-34.368a22.4 22.4 0 0 1 7.04-16.32 71.808 71.808 0 1 0-120.896-61.696c-3.328 24.704 5.952 47.36 22.336 62.464a19.584 19.584 0 0 1 6.208 14.208v35.584c0 18.048-14.4 27.072-32.64 32.64l-53.312 12.352c-14.592 4.48-26.048 11.712-26.048 26.112v47.808h309.248v-47.808c0.064-14.208-9.856-20.288-25.984-25.984z m-334.08-358.4H276.16a28.48 28.48 0 0 1-28.352-28.352c0-15.616 12.8-28.416 28.352-28.416h227.584c15.616 0 28.416 12.8 28.416 28.416s-12.8 28.352-28.416 28.352z m71.04 109.184H276.224a28.48 28.48 0 0 1-28.352-28.352c0-15.616 12.8-28.416 28.352-28.416h298.688c15.616 0 28.416 12.8 28.416 28.416s-12.8 28.352-28.416 28.352z m-47.104 52.48h-251.52c-15.616 0-28.352 12.736-28.352 28.352s12.8 28.416 28.352 28.416h209.28a273.28 273.28 0 0 1 42.24-56.832z m-61.184 272.96H194.944V137.728H606.08v222.848h222.976l0.128 205.632c24.448 11.136 46.912 25.792 66.816 43.328V355.968a31.04 31.04 0 0 0-8.96-21.76L625.536 72.96a30.528 30.528 0 0 0-21.76-8.96H143.424A15.36 15.36 0 0 0 128 79.36v875.52c0 8.512 6.848 15.36 15.36 15.36h362.368a274.24 274.24 0 0 1-39.232-73.92z m-3.2-163.84H276.224c-15.616 0-28.352 12.8-28.352 28.416s12.8 28.416 28.352 28.416h176.704c1.408-19.456 5.056-38.528 10.496-56.768z" fill="#d81e06" p-id="28498"></path></svg>
        </div>

        <!-- 论坛中心SVG -->
        <div v-else-if="btn.title === '论坛中心'" class="btn-icon">
          <svg t="1770794277802" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="6478">
            <path
                d="M769.8432 828.2112c-6.7584 0-13.5168-2.2528-19.0464-6.5536l-164.864-129.8432h-223.232c-84.7872 0-153.6-68.8128-153.6-153.6V195.584c0-84.7872 68.8128-153.6 153.6-153.6h467.968c84.7872 0 153.6 68.8128 153.6 153.6v342.4256c0 84.7872-68.8128 153.6-153.6 153.6h-30.1056v105.8816a30.80192 30.80192 0 0 1-30.72 30.72zM362.7008 103.424c-50.7904 0-92.16 41.3696-92.16 92.16v342.4256c0 50.7904 41.3696 92.16 92.16 92.16h233.8816c6.9632 0 13.5168 2.2528 19.0464 6.5536l123.4944 97.28v-73.1136c0-16.9984 13.7216-30.72 30.72-30.72h60.8256c50.7904 0 92.16-41.3696 92.16-92.16V195.584c0-50.7904-41.3696-92.16-92.16-92.16H362.7008z"
                fill="#f4ea2a" p-id="6479"></path>
            <path
                d="M226.9184 982.016c-4.5056 0-8.8064-1.024-13.1072-2.8672a30.72 30.72 0 0 1-17.6128-27.8528v-95.0272h-2.8672c-84.7872 0-153.6-68.8128-153.6-153.6V414.5152c0-84.7872 68.8128-153.6 153.6-153.6h32.768c16.9984 0 30.72 13.7216 30.72 30.72s-13.7216 30.72-30.72 30.72h-32.768c-50.7904 0-92.16 41.3696-92.16 92.16v288.1536c0 50.7904 41.3696 92.16 92.16 92.16h33.5872c16.9984 0 30.72 13.7216 30.72 30.72v60.2112l101.1712-83.968c5.5296-4.5056 12.4928-7.168 19.6608-7.168h236.3392c16.9984 0 30.72 13.7216 30.72 30.72s-13.7216 30.72-30.72 30.72h-225.28l-142.9504 118.5792c-5.7344 4.9152-12.6976 7.3728-19.6608 7.3728z"
                fill="#f4ea2a" p-id="6480"></path>
            <path d="M543.3344 361.6768m-53.248 0a53.248 53.248 0 1 0 106.496 0 53.248 53.248 0 1 0-106.496 0Z"
                  fill="#f4ea2a" p-id="6481"></path>
            <path d="M718.848 361.6768m-53.248 0a53.248 53.248 0 1 0 106.496 0 53.248 53.248 0 1 0-106.496 0Z"
                  fill="#f4ea2a" p-id="6482"></path>
          </svg>
        </div>

        <!-- 面试模拟SVG -->
        <div v-else class="btn-icon">
          <svg t="1770794608610" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="4273">
            <path
                d="M286.4 316.8c0 47.2-37.6 84.8-84.8 84.8s-84.8-37.6-84.8-84.8S154.4 232 201.6 232c46.4-0.8 84.8 38.4 84.8 84.8z m451.2 0c0 47.2 37.6 84.8 84.8 84.8s84.8-37.6 84.8-84.8S869.6 232 822.4 232c-46.4-0.8-84.8 38.4-84.8 84.8zM262.4 707.2V505.6c0-36.8-29.6-66.4-66.4-66.4h-1.6c-36.8 0-66.4 29.6-66.4 66.4v213.6c0 40.8 32.8 73.6 73.6 73.6h109.6c13.6 0 24 11.2 24 24v170.4c0 20 16 36.8 36.8 36.8H384c20 0 36.8-16 36.8-36.8V780c0-40.8-32.8-73.6-73.6-73.6 0 0.8-84.8 0.8-84.8 0.8z m567.2-268.8h-1.6c-36.8 0-66.4 29.6-66.4 66.4v201.6H676.8c-40.8 0-73.6 32.8-73.6 73.6v201.6c0 23.2 19.2 42.4 42.4 42.4h0.8c23.2 0 42.4-19.2 42.4-42.4V816c0-13.6 11.2-24 24-24h109.6c40.8 0 73.6-32.8 73.6-73.6V505.6c-0.8-37.6-29.6-67.2-66.4-67.2zM712.8 621.6v-36.8c0-6.4-5.6-12.8-12.8-12.8H323.2c-6.4 0-12.8 5.6-12.8 12.8v36.8c0 6.4 5.6 12.8 12.8 12.8h377.6c7.2-0.8 12-6.4 12-12.8zM479.2 0C390.4 0 318.4 56.8 318.4 127.2c0 41.6 25.6 79.2 65.6 102.4-4 20.8-16 45.6-33.6 63.2 41.6-3.2 79.2-15.2 103.2-40 8.8 1.6 16.8 1.6 26.4 1.6 88.8 0 160.8-56.8 160.8-127.2C640 56.8 568 0 479.2 0z m-75.2 152c-13.6 0-24.8-11.2-24.8-24.8c0-13.6 11.2-24.8 24.8-24.8s24.8 11.2 24.8 24.8c0 14.4-11.2 24.8-24.8 24.8z m75.2 0c-13.6 0-24.8-11.2-24.8-24.8c0-13.6 11.2-24.8 24.8-24.8s24.8 11.2 24.8 24.8c0.8 14.4-11.2 24.8-24.8 24.8z m76 0c-13.6 0-24.8-11.2-24.8-24.8c0-13.6 11.2-24.8 24.8-24.8s24.8 11.2 24.8 24.8c0 14.4-11.2 24.8-24.8 24.8z"
                fill="#1594D9" p-id="4274"></path>
          </svg>
        </div>

        <span class="btn-title">{{ btn.title }}</span>
      </div>
    </div>

    <!-- 近期合作板块 -->
    <div class="partner-section">
      <h3 class="partner-title">近期合作：</h3>
      <div
          class="partner-card"
          v-for="company in partnerCompanies"
          :key="company.id"
      >
        <div class="partner-logo">
          <div class="logo-placeholder">LOGO</div>
        </div>
        <div class="partner-info-wrapper">
          <div class="info-top">
            <div class="company-name">{{ company.companyName }}</div>
            <div class="company-position">{{ company.position }}</div>
          </div>
          <div class="company-desc">{{ company.desc }}</div>
        </div>
      </div>
    </div>
  </div>
<!--  灰色背景-->
</template>

<style scoped>
/* 你的样式全部保留，我一行没动 */
.home-container {
  width: 1300px;
  margin: 0 auto;
  padding: 50px;
  box-sizing: border-box;
  background: white;
}

.function-btn-wrapper {
  width: 1103px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  gap: 70px;
  padding-left: 100px;
}

.function-btn {
  width: 250px;
  height: 90px;
  border: 1.5px solid #000;
  border-radius: 98px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #fff;
  box-sizing: border-box;
}

.function-btn:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.btn-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.btn-title {
  font-size: 24px;
  font-weight: 500;
  color: #000;
  letter-spacing: 2px;
}

.partner-title {
  font-size: 36px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.partner-card {
  width: 1200px;
  height: 250px;
  background: #f5f5f5;
  border-radius: 95px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  margin-bottom: 50px;
  box-sizing: border-box;
}

.partner-logo {
  width: 250px;
  height: 200px;
  background: white;
  border-radius: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  flex-shrink: 0;
  overflow: hidden;
}

.logo-placeholder {
  font-size: 24px;
  color: #666;
}

.partner-info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 200px;
  justify-content: center;
  width: 100%;
}

.info-top {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding-right: 20px;
}

.company-name {
  width: 213px;
  height: 57px;
  font-size: 48px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1;
}

.company-position {
  width: 138px;
  height: 43px;
  font-size: 36px;
  color: #666;
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1;
}

.company-desc {
  width: 286px;
  height: 58px;
  font-size: 48px;
  color: #444;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.partner-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 95px;
}
</style>