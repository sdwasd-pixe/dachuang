<template>
  <!-- 二级导航栏 -->
  <div class="sub-nav">
    <div class="sub-nav-inner">
      <div class="sub-nav-left">
        <!-- 【替换点1】论坛中心左侧文件夹图标 -->
        <svg t="1771138268936" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12335" width="24" height="24"><path d="M769.8432 828.2112c-6.7584 0-13.5168-2.2528-19.0464-6.5536l-164.864-129.8432h-223.232c-84.7872 0-153.6-68.8128-153.6-153.6V195.584c0-84.7872 68.8128-153.6 153.6-153.6h467.968c84.7872 0 153.6 68.8128 153.6 153.6v342.4256c0 84.7872-68.8128 153.6-153.6 153.6h-30.1056v105.8816a30.80192 30.80192 0 0 1-30.72 30.72zM362.7008 103.424c-50.7904 0-92.16 41.3696-92.16 92.16v342.4256c0 50.7904 41.3696 92.16 92.16 92.16h233.8816c6.9632 0 13.5168 2.2528 19.0464 6.5536l123.4944 97.28v-73.1136c0-16.9984 13.7216-30.72 30.72-30.72h60.8256c50.7904 0 92.16-41.3696 92.16-92.16V195.584c0-50.7904-41.3696-92.16-92.16-92.16H362.7008z" fill="#2C2C2C" p-id="12336"></path><path d="M226.9184 982.016c-4.5056 0-8.8064-1.024-13.1072-2.8672a30.72 30.72 0 0 1-17.6128-27.8528v-95.0272h-2.8672c-84.7872 0-153.6-68.8128-153.6-153.6V414.5152c0-84.7872 68.8128-153.6 153.6-153.6h32.768c16.9984 0 30.72 13.7216 30.72 30.72s-13.7216 30.72-30.72 30.72h-32.768c-50.7904 0-92.16 41.3696-92.16 92.16v288.1536c0 50.7904 41.3696 92.16 92.16 92.16h33.5872c16.9984 0 30.72 13.7216 30.72 30.72v60.2112l101.1712-83.968c5.5296-4.5056 12.4928-7.168 19.6608-7.168h236.3392c16.9984 0 30.72 13.7216 30.72 30.72s-13.7216 30.72-30.72 30.72h-225.28l-142.9504 118.5792c-5.7344 4.9152-12.6976 7.3728-19.6608 7.3728z" fill="#2C2C2C" p-id="12337"></path><path d="M543.3344 361.6768m-53.248 0a53.248 53.248 0 1 0 106.496 0 53.248 53.248 0 1 0-106.496 0Z" fill="#26BEC9" p-id="12338"></path><path d="M718.848 361.6768m-53.248 0a53.248 53.248 0 1 0 106.496 0 53.248 53.248 0 1 0-106.496 0Z" fill="#26BEC9" p-id="12339"></path></svg>
        <h2 class="sub-title">论坛中心</h2>
      </div>
      <div class="sub-nav-center">
        <div class="search-wrapper">
          <input
              v-model="searchKeyword"
              type="text"
              class="search-input"
              placeholder="搜索帖子/关键字/作者..."
          />
          <button class="search-btn">
            <!-- 【替换点2】搜索框右侧搜索图标 -->
            <svg t="1771138333835" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13378" width="24" height="24"><path d="M722.346667 665.301333l161.834666 161.792a40.362667 40.362667 0 1 1-57.088 57.088l-161.792-161.792a40.192 40.192 0 0 1-10.794666-19.413333 323.370667 323.370667 0 1 1 48.469333-48.469333 40.192 40.192 0 0 1 19.413333 10.794666z m-270.976 28.586667a242.517333 242.517333 0 1 0 0-485.034667 242.517333 242.517333 0 0 0 0 485.034667z" fill="#000000" p-id="13379"></path></svg>
          </button>
        </div>
      </div>
      <div class="sub-nav-right">
        <button class="add-post-btn" @click="showCreationModal = true">
          <!-- 【替换点3】右侧加号按钮图标 -->
          <svg t="1771137684022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9832" width="24" height="24"><path d="M867.7 423.8H599.8V155.9c0-49.3-40-89.3-89.3-89.3s-89.3 40-89.3 89.3v267.9H153.3c-49.3 0-89.3 40-89.3 89.3s40 89.3 89.3 89.3h267.9v267.9c0 49.3 40 89.3 89.3 89.3s89.3-40 89.3-89.3V602.4h267.9c49.3 0 89.3-40 89.3-89.3s-40-89.3-89.3-89.3z" fill="#383838" p-id="9833"></path></svg>
        </button>
      </div>
    </div>
  </div>

  <!-- 主体容器：主内容+侧边栏布局 -->
  <div class="main-container">
    <!-- 主内容区：内部为微博式上下滚动帖子流 -->
    <main class="forum-main">
      <!-- 帖子列表：垂直滚动 -->
      <div class="posts-feed">
        <!-- 动态渲染所有帖子 -->
        <article class="post-card" v-for="(post, index) in allPosts" :key="post.id">
          <div class="post-header">
            <div class="author-info">
              <div class="avatar">
                <!-- 【替换点4】用户头像图标 - 预留位置 -->
                <div class="avatar-icon-placeholder">
                  <!-- 这里是头像SVG的位置，你可以替换成自己的SVG -->
                  <!-- 【请在此处添加头像SVG】 -->
                </div>
              </div>
              <span class="author-name">{{ post.author }}</span>
            </div>
            <button class="follow-btn">关注</button>
          </div>
          <h3 class="post-title">{{ post.title }}</h3>
          <div class="post-content">
            <p>{{ post.content }}</p>
            <!-- 显示上传的图片 -->

          </div>
          <div class="post-actions">
            <button class="action-btn like-btn" @click="toggleLike(post.id)">
              <!-- 点赞按钮：未点赞/已点赞两种状态 -->
              <div v-if="!post.isLiked" class="action-icon-placeholder">
                <!-- 未点赞SVG -->
                <svg t="1771137345410" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5705" width="24" height="24"><path d="M512 901.746939c-13.583673 0-26.122449-4.179592-37.093878-13.061225-8.881633-7.314286-225.697959-175.020408-312.424489-311.379592C133.746939 532.37551 94.040816 471.24898 94.040816 384.522449c0-144.718367 108.146939-262.269388 240.326531-262.269388 67.395918 0 131.657143 30.82449 177.632653 84.636735 45.453061-54.334694 109.191837-84.636735 177.110204-84.636735 132.702041 0 240.326531 117.55102 240.326531 262.269388 0 85.159184-37.093878 143.673469-67.395919 191.216327l-1.044898 1.567346c-86.726531 136.359184-303.542857 304.587755-312.424489 311.379592-10.44898 8.359184-22.987755 13.061224-36.571429 13.061225zM334.367347 164.04898c-109.714286 0-198.530612 98.742857-198.530612 220.473469 0 74.187755 33.959184 127.477551 61.648979 170.318367 83.069388 130.089796 294.138776 294.138776 303.020408 300.930613 3.657143 2.612245 7.314286 4.179592 11.493878 4.179591s7.836735-1.567347 11.493878-4.179591c8.881633-6.791837 219.95102-170.840816 303.020408-300.930613l1.044898-1.567347c28.212245-44.930612 60.604082-95.608163 60.604081-168.75102 0-121.208163-89.338776-220.473469-198.530612-220.473469-60.081633 0-115.983673 29.257143-153.6 80.979591l-6.269388 8.881633c-4.179592 5.22449-10.44898 8.359184-16.718367 8.359184s-13.061224-3.134694-16.718367-8.359184l-6.269388-8.881633C450.35102 193.828571 393.926531 164.04898 334.367347 164.04898z" fill="#8a8a8a" p-id="5706"></path></svg>

              </div>
              <div v-else class="action-icon-placeholder liked">
                <!-- 已点赞SVG（可替换为你自己的红色心形） -->
                <svg t="1771137419705" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5962" width="24" height="24"><path d="M512 901.746939c-13.583673 0-26.122449-4.179592-37.093878-13.061225-8.881633-7.314286-225.697959-175.020408-312.424489-311.379592C133.746939 532.37551 94.040816 471.24898 94.040816 384.522449c0-144.718367 108.146939-262.269388 240.326531-262.269388 67.395918 0 131.657143 30.82449 177.632653 84.636735 45.453061-54.334694 109.191837-84.636735 177.110204-84.636735 132.702041 0 240.326531 117.55102 240.326531 262.269388 0 85.159184-37.093878 143.673469-67.395919 191.216327l-1.044898 1.567346c-86.726531 136.359184-303.542857 304.587755-312.424489 311.379592-10.44898 8.359184-22.987755 13.061224-36.571429 13.061225z" fill="#E5404F" p-id="5963"></path></svg>
              </div>
            </button>
            <button class="action-btn comment-btn" @click="toggleComment(index)">
              <!-- 未展开评论 -->
              <div
                  v-if="activeCommentIndex !== index"
                  class="action-icon-placeholder"
              >
                <svg t="1771137990067" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10965" width="24" height="24"><path d="M628.363636 605.090909c-18.618182 0-34.909091-16.290909-34.909091-34.909091S609.745455 535.272727 628.363636 535.272727h41.890909c18.618182 0 34.909091 16.290909 34.909091 34.909091s-13.963636 34.909091-34.909091 34.909091H628.363636z m-325.818181 0c-18.618182 0-34.909091-16.290909-34.909091-34.909091S283.927273 535.272727 302.545455 535.272727h160.581818c18.618182 0 34.909091 16.290909 34.909091 34.909091s-16.290909 34.909091-34.909091 34.909091H302.545455z m0-209.454545c-18.618182 0-34.909091-16.290909-34.909091-34.909091S283.927273 325.818182 302.545455 325.818182h372.363636c18.618182 0 34.909091 16.290909 34.909091 34.909091S693.527273 395.636364 674.909091 395.636364H302.545455z m202.472727 507.345454l-104.727273 69.818182c-48.872727 32.581818-114.036364 18.618182-144.290909-30.254545-2.327273-4.654545-4.654545-6.981818-6.981818-11.636364l-18.618182-39.563636c-111.709091-13.963636-195.490909-107.054545-195.490909-218.763637V272.290909C34.909091 162.909091 116.363636 69.818182 225.745455 53.527273c95.418182-13.963636 190.836364-18.618182 286.254545-18.618182s190.836364 6.981818 286.254545 18.618182c109.381818 16.290909 190.836364 109.381818 190.836364 218.763636v400.290909c0 116.363636-90.763636 214.109091-207.127273 221.090909-90.763636 4.654545-179.2 9.309091-269.963636 9.309091h-6.981818zM474.763636 837.818182c4.654545-4.654545 11.636364-6.981818 18.618182-6.981818h16.290909c88.436364 0 176.872727-2.327273 265.309091-9.309091 79.127273-4.654545 141.963636-72.145455 141.963637-151.272728V269.963636c0-76.8-55.854545-139.636364-130.327273-148.945454-90.763636-9.309091-181.527273-16.290909-274.618182-16.290909s-183.854545 6.981818-276.945455 18.618182c-74.472727 9.309091-130.327273 74.472727-130.327272 148.945454v400.290909c0 79.127273 62.836364 146.618182 141.963636 151.272727h9.309091c11.636364 0 23.272727 6.981818 27.927273 18.618182l27.927272 55.854546c0 2.327273 2.327273 2.327273 2.327273 4.654545 11.636364 16.290909 32.581818 20.945455 48.872727 9.309091l111.709091-74.472727z" fill="#515151" p-id="10966"></path></svg>
              </div>

              <!-- 已展开评论 -->
              <div
                  v-else
                  class="action-icon-placeholder"
              >
                <svg t="1771137990067" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10965" width="24" height="24"><path d="M628.363636 605.090909c-18.618182 0-34.909091-16.290909-34.909091-34.909091S609.745455 535.272727 628.363636 535.272727h41.890909c18.618182 0 34.909091 16.290909 34.909091 34.909091s-13.963636 34.909091-34.909091 34.909091H628.363636z m-325.818181 0c-18.618182 0-34.909091-16.290909-34.909091-34.909091S283.927273 535.272727 302.545455 535.272727h160.581818c18.618182 0 34.909091 16.290909 34.909091 34.909091s-16.290909 34.909091-34.909091 34.909091H302.545455z m0-209.454545c-18.618182 0-34.909091-16.290909-34.909091-34.909091S283.927273 325.818182 302.545455 325.818182h372.363636c18.618182 0 34.909091 16.290909 34.909091 34.909091S693.527273 395.636364 674.909091 395.636364H302.545455z m202.472727 507.345454l-104.727273 69.818182c-48.872727 32.581818-114.036364 18.618182-144.290909-30.254545-2.327273-4.654545-4.654545-6.981818-6.981818-11.636364l-18.618182-39.563636c-111.709091-13.963636-195.490909-107.054545-195.490909-218.763637V272.290909C34.909091 162.909091 116.363636 69.818182 225.745455 53.527273c95.418182-13.963636 190.836364-18.618182 286.254545-18.618182s190.836364 6.981818 286.254545 18.618182c109.381818 16.290909 190.836364 109.381818 190.836364 218.763636v400.290909c0 116.363636-90.763636 214.109091-207.127273 221.090909-90.763636 4.654545-179.2 9.309091-269.963636 9.309091h-6.981818zM474.763636 837.818182c4.654545-4.654545 11.636364-6.981818 18.618182-6.981818h16.290909c88.436364 0 176.872727-2.327273 265.309091-9.309091 79.127273-4.654545 141.963636-72.145455 141.963637-151.272728V269.963636c0-76.8-55.854545-139.636364-130.327273-148.945454-90.763636-9.309091-181.527273-16.290909-274.618182-16.290909s-183.854545 6.981818-276.945455 18.618182c-74.472727 9.309091-130.327273 74.472727-130.327272 148.945454v400.290909c0 79.127273 62.836364 146.618182 141.963636 151.272727h9.309091c11.636364 0 23.272727 6.981818 27.927273 18.618182l27.927272 55.854546c0 2.327273 2.327273 2.327273 2.327273 4.654545 11.636364 16.290909 32.581818 20.945455 48.872727 9.309091l111.709091-74.472727z" fill="#1296db" p-id="10966"></path></svg>
              </div>
            </button>

            <button class="action-btn collect-btn" @click="toggleCollect(post.id)">
              <!-- 【替换点7】收藏按钮：未收藏/已收藏两种状态 -->
              <div v-if="!post.isCollected" class="action-icon-placeholder">
                <!-- 未收藏SVG -->
                <svg t="1771137450656" class="icon" viewBox="0 0 1029 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7000" width="24" height="24"><path d="M785.066667 455.111111l-176.355556-34.133333-85.333333-159.288889c0-5.688889-11.377778-11.377778-11.377778-11.377778s-11.377778 5.688889-17.066667 11.377778L409.6 420.977778 233.244444 455.111111c-11.377778 0-17.066667 5.688889-17.066666 5.688889s0 11.377778 5.688889 17.066667L341.333333 614.4l-17.066666 176.355556v17.066666H341.333333l170.666667-73.955555 159.288889 73.955555h17.066667s5.688889-11.377778 0-17.066666l-17.066667-176.355556L796.444444 477.866667c5.688889-5.688889 11.377778-17.066667 5.688889-17.066667 0 0-5.688889-5.688889-17.066666-5.688889z" p-id="7001" fill="#8a8a8a"></path><path d="M534.755556 39.822222h-45.511112C221.866667 39.822222 0 261.688889 0 529.066667s221.866667 489.244444 489.244444 489.244444h51.2c267.377778 0 489.244444-221.866667 489.244445-489.244444S802.133333 39.822222 534.755556 39.822222zM830.577778 512l-102.4 113.777778 17.066666 153.6c0 28.444444-5.688889 51.2-22.755555 62.577778-5.688889 5.688889-17.066667 11.377778-34.133333 11.377777-11.377778 0-22.755556 0-34.133334-5.688889L512 785.066667 369.777778 853.333333c-22.755556 11.377778-51.2 11.377778-68.266667 0-17.066667-11.377778-28.444444-34.133333-22.755555-62.577777l17.066666-153.6L187.733333 512c-17.066667-17.066667-22.755556-45.511111-17.066666-68.266667 11.377778-17.066667 28.444444-34.133333 56.888889-39.822222l153.6-34.133333L455.111111 238.933333c17.066667-22.755556 34.133333-34.133333 56.888889-34.133333s45.511111 17.066667 56.888889 39.822222l73.955555 136.533334 153.6 28.444444c28.444444 5.688889 45.511111 22.755556 51.2 39.822222 11.377778 22.755556 5.688889 45.511111-17.066666 62.577778z" p-id="7002" fill="#8a8a8a"></path></svg>
              </div>
              <div v-else class="action-icon-placeholder collected">
                <!-- 已收藏SVG -->
                <svg t="1771137486675" class="icon" viewBox="0 0 1029 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7564" width="24" height="24"><path d="M785.066667 455.111111l-176.355556-34.133333-85.333333-159.288889c0-5.688889-11.377778-11.377778-11.377778-11.377778s-11.377778 5.688889-17.066667 11.377778L409.6 420.977778 233.244444 455.111111c-11.377778 0-17.066667 5.688889-17.066666 5.688889s0 11.377778 5.688889 17.066667L341.333333 614.4l-17.066666 176.355556v17.066666H341.333333l170.666667-73.955555 159.288889 73.955555h17.066667s5.688889-11.377778 0-17.066666l-17.066667-176.355556L796.444444 477.866667c5.688889-5.688889 11.377778-17.066667 5.688889-17.066667 0 0-5.688889-5.688889-17.066666-5.688889z" fill="#f4ea2a" p-id="7565"></path><path d="M534.755556 39.822222h-45.511112C221.866667 39.822222 0 261.688889 0 529.066667s221.866667 489.244444 489.244444 489.244444h51.2c267.377778 0 489.244444-221.866667 489.244445-489.244444S802.133333 39.822222 534.755556 39.822222zM830.577778 512l-102.4 113.777778 17.066666 153.6c0 28.444444-5.688889 51.2-22.755555 62.577778-5.688889 5.688889-17.066667 11.377778-34.133333 11.377777-11.377778 0-22.755556 0-34.133334-5.688889L512 785.066667 369.777778 853.333333c-22.755556 11.377778-51.2 11.377778-68.266667 0-17.066667-11.377778-28.444444-34.133333-22.755555-62.577777l17.066666-153.6L187.733333 512c-17.066667-17.066667-22.755556-45.511111-17.066666-68.266667 11.377778-17.066667 28.444444-34.133333 56.888889-39.822222l153.6-34.133333L455.111111 238.933333c17.066667-22.755556 34.133333-34.133333 56.888889-34.133333s45.511111 17.066667 56.888889 39.822222l73.955555 136.533334 153.6 28.444444c28.444444 5.688889 45.511111 22.755556 51.2 39.822222 11.377778 22.755556 5.688889 45.511111-17.066666 62.577778z" fill="#f4ea2a" p-id="7566"></path></svg>
              </div>
            </button>
          </div>

          <!-- 评论区：点击评论按钮后展开 -->
          <div v-if="activeCommentIndex === index" class="comment-section">
            <div class="comment-input-wrapper">
              <input
                  v-model="newComment"
                  type="text"
                  class="comment-input"
                  placeholder="评论内容......"
              />
              <div class="comment-publish-wrapper">
                <button class="publish-comment-btn" @click="addComment(index)">发布</button>
                <label class="anonymous-label">
                  <input type="checkbox" v-model="isAnonymous" />
                  匿名
                </label>
              </div>
            </div>
            <!-- 评论列表 -->
            <div class="comment-list">
              <div v-for="(comment, cIndex) in post.comments" :key="cIndex" class="comment-item">
                <div class="comment-content">
                  <span class="comment-author">{{ comment.author }}</span>
                  <p class="comment-text">{{ comment.text }}</p>
                </div>
                <button class="comment-like-btn">
                  <!-- 评论点赞图标位置 -->
                  <svg class="comment-like-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>

    <!-- 本周热帖侧边栏：单独放置 250*591 -->
    <aside class="hot-post-sidebar">
      <div class="sidebar-card">
        <h3 class="sidebar-title">本周热帖</h3>
        <ol class="hot-posts-list">
          <li v-for="(item, index) in hotPosts" :key="index">
            <a href="#" class="hot-post-link">{{ item }}</a>
          </li>
        </ol>
      </div>
    </aside>
  </div>

  <!-- 创作中心弹窗 -->
  <div class="creation-modal-overlay" v-if="showCreationModal" @click="showCreationModal = false">
    <div class="creation-modal" @click.stop>
      <div class="creation-modal-header">
        <h2 class="creation-title">创作中心</h2>

      </div>
      <div class="creation-modal-body">
        <!-- 标题输入框 -->
        <input
            v-model="newPost.title"
            type="text"
            class="creation-title-input"
            placeholder="发布的标题......"
        />
        <!-- 内容输入框 -->
        <textarea
            v-model="newPost.content"
            class="creation-input"
            placeholder="发布精彩内容......"
            rows="6"
        ></textarea>
        <!-- 预览上传的图片 -->
        <div v-if="previewImages.length > 0" class="preview-images">
          <div v-for="(img, imgIndex) in previewImages" :key="imgIndex" class="preview-image-wrapper">
            <img :src="img" alt="预览图" class="preview-image" />
            <button class="remove-image-btn" @click="removeImage(imgIndex)">×</button>
          </div>
        </div>
        <div class="creation-footer">
          <!-- 隐藏的文件输入框 -->
          <input
              type="file"
              ref="fileInput"
              multiple
              accept="image/*"
              style="display: none"
              @change="handleImageUpload"
          />
          <button class="image-upload-btn" @click="triggerFileInput">
            <!-- 图片上传图标位置 -->
            <svg class="image-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="#666"/>
            </svg>
          </button>
          <button class="publish-btn" @click="handlePublish">发布</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
///////
import { useForumStore } from '@/stores/forumStore' // 导入Pinia Store
// 获取Store实例
const forumStore = useForumStore()


//////


// 搜索关键词
const searchKeyword = ref('');

// 控制创作中心弹窗显示/隐藏
const showCreationModal = ref(false);

// 新帖子表单数据
const newPost = ref({
  author: '',
  title: '',
  content: '',
  images: []
});

// 预览图片列表
const previewImages = ref([]);

// 文件输入框引用
const fileInput = ref(null);

// 触发文件输入框
const triggerFileInput = () => {
  fileInput.value?.click();
};

// 处理图片上传
const handleImageUpload = (event) => {
  const files = event.target.files;
  if (!files) return;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        previewImages.value.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
};

// 移除预览图片
const removeImage = (index) => {
  previewImages.value.splice(index, 1);
};

// 初始帖子数据
const sunContent = ``;

// 所有帖子列表（增加了点赞/收藏状态和评论数据）
const allPosts = ref([
  {
    id: 1,
    author: '谢敏旗',
    title: '保护您的数字安全：重要性与方法',
    content: '    保护您的数字安全：重要性与方法\n' +
        '\n' +
        '在数字时代，我们的个人信息和隐私面临着前所未有的威胁。从网络欺诈到数据泄露，数字安全问题已经成为我们生活中不可忽\n' +
        '视的一部分。保护您的数字安全至关重要，不仅可以保护您的个人信息，还可以保障您的财务和声誉安全。\n' +
        '我们每个人都可以采取一些简单而有效的措施来保护自己的数字安全：\n' +
        '\n' +
        '   1.强密码保护： 使用复杂、独特的密码，并定期更换。避免使用容易猜测的密码，如生日或简单的数字组合。\n' +
        '    2.双重认证： 启用双重认证功能，以增加登录安全性。这通常包括输入密码后，再输入通过手机或邮箱收到的验证码。\n' +
        '    3.谨慎公开个人信息： 在社交媒体和其他在线平台上，尽量避免公开过多个人信息，如地址、电话号码等。\n' +
        '    4.定期更新软件和防病毒程序： 确保您的操作系统、应用程序和防病毒软件都是最新版本，以防止安全漏洞被利用。\n' +
        '    5.警惕网络诈骗： 谨慎对待来自陌生人或未知来源的电子邮件、信息和链接，以防止钓鱼和恶意软件攻击。\n' +
        '    6.备份重要数据： 定期备份您的重要文件和数据，以防止数据丢失或损坏。\n' +
        '    7.教育自己和家人： 教育家人和朋友有关数字安全的重要性和最佳实践，共同建立一个安全的数字环境。\n',
    images: ['https://picsum.photos/seed/security/400/200'],
    isLiked: false,
    isCollected: false,
    comments: [
      { author: '徐子豪', text: '宝藏知识赶快收藏！' },
      { author: '孙瑞隆', text: '赞同！' }
    ]
  },
  {
    id: 2,
    author: '观花的青椒',
    title: '',
    content: '',
    images: [],
    isLiked: false,
    isCollected: false,
    comments: []
  }
]);

// 本周热帖数据
const hotPosts = ref([
  'XXXXXXXXX',
  'XXXXXXXXX',
  'XXXXXXXXX',
  'XXXXXXXXX'
]);

// 评论区控制
const activeCommentIndex = ref(null); // 当前展开的评论区索引
const newComment = ref(''); // 新评论内容
const isAnonymous = ref(false); // 是否匿名

// 切换评论区显示/隐藏
const toggleComment = (index) => {
  activeCommentIndex.value = activeCommentIndex.value === index ? null : index;
};

// 添加评论
const addComment = (postIndex) => {
  if (!newComment.value.trim()) return;
  const author = isAnonymous.value ? '匿名用户' : '我';
  allPosts.value[postIndex].comments.push({
    author,
    text: newComment.value
  });
  newComment.value = '';
  isAnonymous.value = false;
};
// 切换收藏状态
const toggleCollect = (postId) => {
  const post = allPosts.value.find(p => p.id === postId);
  if (post) post.isCollected = !post.isCollected;
};

// 切换点赞状态
const toggleLike = (postId) => {
  const post = allPosts.value.find(p => p.id === postId);
  if (post) {
    post.isLiked = !post.isLiked;
  }
};

// 发布帖子的方法
const handlePublish = () => {
  if (!newPost.value.content.trim() && !newPost.value.title.trim() && previewImages.value.length === 0) {
    alert('请输入标题、内容或添加图片后再发布');
    return;
  }

  // 这里可以自定义作者名称，默认使用固定值，也可以改为输入框
  const defaultAuthor = '用户';

  // 将新帖子添加到列表开头
  allPosts.value.unshift({
    id: Date.now(),
    author: defaultAuthor,
    title: newPost.value.title,
    content: newPost.value.content,
    images: [...previewImages.value],
    isLiked: false,
    isCollected: false,
    comments: []
  });

  // 清空表单并关闭弹窗
  newPost.value = {
    author: '',
    title: '',
    content: '',
    images: []
  };
  previewImages.value = [];
  showCreationModal.value = false;

  // 提示成功
  alert('帖子发布成功！');
};
</script>

<style scoped>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f0f0f0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* 二级导航栏 */
.sub-nav {
  width: 100%;
  max-width: 1920px;
  height: 50px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  margin: 0 auto;
  box-sizing: border-box;
}

.sub-nav-inner {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
}

.sub-nav-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sub-icon {
  width: 24px;
  height: 24px;
}

.sub-title {
  font-size: 24px;
  font-weight: 600;
  color: #000;
}

.sub-nav-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.search-wrapper {
  position: relative;
  width: 400px;
  height: 36px;
  border-radius: 18px;
  background-color: #f0f0f0;
  box-sizing: border-box;
}

.search-input {
  width: 100%;
  height: 100%;
  padding: 0 40px 0 16px;
  border: none;
  border-radius: 18px;
  background-color: transparent;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}

.search-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  padding: 0;
  color: #666;
}

.search-icon {
  width: 20px;
  height: 20px;
}

.sub-nav-right {
  display: flex;
  align-items: center;
}

.add-post-btn {
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: transform 0.2s;
}

.add-post-btn:hover {
  transform: scale(1.1);
}

.add-icon {
  width: 24px;
  height: 24px;
  color: #000;
}

/* 主体容器：控制主内容和侧边栏的布局 */
.main-container {
  width: 100%;
  max-width: 1350px;
  margin: 20px auto;
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

/* 主内容区：内部滚动 */
.forum-main {
  width: 1060px;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 0;
  box-sizing: border-box;
}

/* 帖子流：微博式上下滚动 */
.posts-feed {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  box-sizing: border-box;
}

/* 帖子卡片：优化为完整的微博样式框架 */
.post-card {
  background-color: #ffffff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
}

/* 帖子头部：优化布局和样式 */
.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
  overflow: hidden;
}

.avatar-icon, .action-icon {
  width: 24px;
  height: 24px;
}

/* SVG图标占位符样式 */
.avatar-icon-placeholder,
.action-icon-placeholder,
.close-icon-placeholder {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 18px;
}

.author-name {
  font-size: 16px;
  font-weight: 500;
  color: #000;
}

.follow-btn {
  background-color: #1890ff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.follow-btn:hover {
  background-color: #096dd9;
}

.post-title {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin: 0 0 16px 0;
}

.post-content {
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 24px;
  white-space: pre-line;
}




.post-actions {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  transition: color 0.2s;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.action-btn:hover {
  color: #1890ff;
}

.liked {
  color: #ff4757;
}

.collected {
  color: #ffc107;
}

/* 评论区样式 */
.comment-section {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #eee;
}

.comment-input-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.comment-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 14px;
}

.comment-publish-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.publish-comment-btn {
  background-color: #40c4c9;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 16px;
  font-size: 14px;
  cursor: pointer;
}

.anonymous-label {
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
}

.comment-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.comment-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: #fafafa;
  border-radius: 4px;
}

.comment-content {
  flex: 1;
}

.comment-author {
  font-size: 12px;
  color: #1890ff;
  font-weight: 500;
}

.comment-text {
  font-size: 14px;
  color: #333;
  margin-top: 4px;
}

.comment-like-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
}

.comment-like-icon {
  width: 16px;
  height: 16px;
}

/* 本周热帖侧边栏：单独固定250*591 */
.hot-post-sidebar {
  width: 250px;
  height: 591px;
  flex-shrink: 0;
}

.sidebar-card {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  overflow-y: auto;
}

.sidebar-title {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin: 0 0 16px 0;
}

.hot-posts-list {
  list-style: decimal inside;
  padding: 0;
  margin: 0;
}

.hot-posts-list li {
  margin-bottom: 12px;
  padding: 4px 0;
}

.hot-post-link {
  font-size: 14px;
  color: #000;
  text-decoration: none;
  transition: color 0.2s;
}

.hot-post-link:hover {
  color: #1890ff;
  text-decoration: underline;
}

/* 滚动条样式优化 */
.posts-feed::-webkit-scrollbar,
.sidebar-card::-webkit-scrollbar {
  width: 6px;
}

.posts-feed::-webkit-scrollbar-track,
.sidebar-card::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.posts-feed::-webkit-scrollbar-thumb,
.sidebar-card::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

.posts-feed::-webkit-scrollbar-thumb:hover,
.sidebar-card::-webkit-scrollbar-thumb:hover {
  background: #999;
}

/* 创作中心弹窗样式 */
.creation-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.creation-modal {
  width: 560px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.creation-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 16px;
  border-bottom: 1px solid #f0f0f0;
}

.creation-title {
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin: 0;
}


.creation-modal-body {
  padding: 24px;
}

/* 标题输入框样式 */
.creation-title-input {
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  padding: 10px 16px;
  font-size: 14px;
  margin-bottom: 16px;
  outline: none;
  transition: border-color 0.2s;
}

.creation-title-input:focus {
  border-color: #1890ff;
}

.creation-input {
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  resize: none;
  outline: none;
  transition: border-color 0.2s;
}

.creation-input:focus {
  border-color: #1890ff;
}

/* 预览图片样式 */
.preview-images {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0;
}

.preview-image-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.remove-image-btn {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.creation-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
}

.image-upload-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-icon {
  width: 24px;
  height: 24px;
}

.publish-btn {
  background-color: red;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.publish-btn:hover {
  background-color: red;
}
</style>