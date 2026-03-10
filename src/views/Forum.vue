<template>
  <!-- 二级导航栏 -->
  <div class="sub-nav">
    <div class="sub-nav-inner">
      <div class="sub-nav-left">
        <svg  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M769.8432 828.2112c-6.7584 0-13.5168-2.2528-19.0464-6.5536l-164.864-129.8432h-223.232c-84.7872 0-153.6-68.8128-153.6-153.6V195.584c0-84.7872 68.8128-153.6 153.6-153.6h467.968c84.7872 0 153.6 68.8128 153.6 153.6v342.4256c0 84.7872-68.8128 153.6-153.6 153.6h-30.1056v105.8816a30.80192 30.80192 0 0 1-30.72 30.72zM362.7008 103.424c-50.7904 0-92.16 41.3696-92.16 92.16v342.4256c0 50.7904 41.3696 92.16 92.16 92.16h233.8816c6.9632 0 13.5168 2.2528 19.0464 6.5536l123.4944 97.28v-73.1136c0-16.9984 13.7216-30.72 30.72-30.72h60.8256c50.7904 0 92.16-41.3696 92.16-92.16V195.584c0-50.7904-41.3696-92.16-92.16-92.16H362.7008z" fill="#2C2C2C" p-id="12336"></path><path d="M226.9184 982.016c-4.5056 0-8.8064-1.024-13.1072-2.8672a30.72 30.72 0 0 1-17.6128-27.8528v-95.0272h-2.8672c-84.7872 0-153.6-68.8128-153.6-153.6V414.5152c0-84.7872 68.8128-153.6 153.6-153.6h32.768c16.9984 0 30.72 13.7216 30.72 30.72s-13.7216 30.72-30.72 30.72h-32.768c-50.7904 0-92.16 41.3696-92.16 92.16v288.1536c0 50.7904 41.3696 92.16 92.16 92.16h33.5872c16.9984 0 30.72 13.7216 30.72 30.72v60.2112l101.1712-83.968c5.5296-4.5056 12.4928-7.168 19.6608-7.168h236.3392c16.9984 0 30.72 13.7216 30.72 30.72s-13.7216 30.72-30.72 30.72h-225.28l-142.9504 118.5792c-5.7344 4.9152-12.6976 7.3728-19.6608 7.3728z" fill="#2C2C2C" p-id="12337"></path><path d="M543.3344 361.6768m-53.248 0a53.248 53.248 0 1 0 106.496 0 53.248 53.248 0 1 0-106.496 0Z" fill="#26BEC9"></path><path d="M718.848 361.6768m-53.248 0a53.248 53.248 0 1 0 106.496 0 53.248 53.248 0 1 0-106.496 0Z" fill="#26BEC9" ></path></svg>
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
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="24" height="24"><path d="M722.346667 665.301333l161.834666 161.792a40.362667 40.362667 0 1 1-57.088 57.088l-161.792-161.792a40.192 40.192 0 0 1-10.794666-19.413333 323.370667 323.370667 0 1 1 48.469333-48.469333 40.192 40.192 0 0 1 19.413333 10.794666z m-270.976 28.586667a242.517333 242.517333 0 1 0 0-485.034667 242.517333 242.517333 0 0 0 0 485.034667z" fill="#000000" ></path></svg>
          </button>
        </div>
      </div>
      <div class="sub-nav-right">


        <button class="add-post-btn" @click="showCreationModal = true">
          <svg  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="24" height="24"><path d="M867.7 423.8H599.8V155.9c0-49.3-40-89.3-89.3-89.3s-89.3 40-89.3 89.3v267.9H153.3c-49.3 0-89.3 40-89.3 89.3s40 89.3 89.3 89.3h267.9v267.9c0 49.3 40 89.3 89.3 89.3s89.3-40 89.3-89.3V602.4h267.9c49.3 0 89.3-40 89.3-89.3s-40-89.3-89.3-89.3z" fill="#383838" p-id="9833"></path></svg>
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
                <div class="avatar-icon-placeholder"></div>
              </div>
              <span class="author-name">{{ post.author }}</span>
            </div>
            <button class="follow-btn">关注</button>
          </div>
          <h3 class="post-title">{{ post.title }}</h3>
          <div class="post-content">
            <p>{{ post.content }}</p>
          </div>
          <div class="post-actions">
            <button class="action-btn like-btn" @click="toggleLike(post.id)">
              <el-divider v-if="!post.isLiked" class="action-icon-placeholder">
                <svg  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="24" height="24"><path d="M707.584 93.184c-77.312 0-148.992 38.912-196.608 102.912-47.104-64-119.296-102.912-196.608-102.912-139.264 0-252.416 123.904-252.416 275.968 0 90.624 40.448 154.624 73.216 205.824C229.888 723.968 468.48 908.8 478.72 916.48c9.728 7.68 20.992 11.264 32.256 11.264s22.528-3.584 32.256-11.264c10.24-7.68 248.32-193.024 343.552-341.504 32.768-51.2 73.216-115.2 73.216-205.824 0-152.064-113.152-275.968-252.416-275.968zM821.76 573.44c-87.552 122.88-272.896 263.168-282.112 269.824-8.704 6.656-18.944 10.24-28.672 10.24-10.24 0-19.968-3.072-28.672-10.24-9.216-6.656-190.976-148.48-282.112-274.944-29.184-46.08-75.776-103.424-75.776-184.32 0-136.192 75.776-231.936 200.192-231.936 69.12 0 144.384 66.048 186.368 123.392 42.496-57.344 117.248-123.392 186.368-123.392 124.928 0 205.824 95.744 205.824 231.936 0 80.896-51.712 143.872-81.408 189.44z" fill="#000000" ></path></svg>
             </el-divider>
              <el-divider v-else class="action-icon-placeholder liked">
                <svg  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="24" height="24"><path d="M512 901.746939c-13.583673 0-26.122449-4.179592-37.093878-13.061225-8.881633-7.314286-225.697959-175.020408-312.424489-311.379592C133.746939 532.37551 94.040816 471.24898 94.040816 384.522449c0-144.718367 108.146939-262.269388 240.326531-262.269388 67.395918 0 131.657143 30.82449 177.632653 84.636735 45.453061-54.334694 109.191837-84.636735 177.110204-84.636735 132.702041 0 240.326531 117.55102 240.326531 262.269388 0 85.159184-37.093878 143.673469-67.395919 191.216327l-1.044898 1.567346c-86.726531 136.359184-303.542857 304.587755-312.424489 311.379592-10.44898 8.359184-22.987755 13.061224-36.571429 13.061225z" fill="#E5404F" ></path></svg>
              </el-divider>
            </button>
            <button class="action-btn comment-btn" @click="toggleComment(index)">
              <el-divider
                  v-if="activeCommentIndex !== index"
                  class="action-icon-placeholder"
              >
                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="24" height="24"><path d="M768.004096 384a61.44 61.44 0 0 0-45.056 18.978133 61.713067 61.713067 0 0 0-18.978133 45.056c0 17.271467 6.3488 32.290133 19.0464 44.987734 11.741867 12.288 27.989333 19.114667 44.987733 18.978133a61.576533 61.576533 0 0 0 44.987733-18.978133c12.288-11.741867 19.114667-27.989333 18.978134-45.056a61.8496 61.8496 0 0 0-18.978134-44.987734 61.44 61.44 0 0 0-45.056-18.978133zM512.004096 832.034133a505.787733 505.787733 0 0 1-107.997867-12.0832l-151.005866 91.067734 2.048-149.026134a411.4432 411.4432 0 0 1-139.537067-135.509333 330.888533 330.888533 0 0 1-51.473067-178.3808c0-69.358933 20.002133-133.5296 60.0064-192.512 40.004267-59.050667 94.344533-105.608533 163.0208-139.946667C355.673429 81.237333 430.698496 63.965867 512.004096 63.965867c123.972267 0 229.649067 37.4784 316.962133 112.503466 87.313067 74.9568 130.935467 165.546667 130.935467 271.496534s-43.554133 196.471467-130.935467 271.428266c-87.381333 75.093333-192.989867 112.571733-317.0304 112.571734zM512.004096 0C419.366229 0 333.623296 20.002133 255.048363 60.074667c-78.711467 39.936-140.765867 94.276267-186.5728 162.884266A398.1312 398.1312 0 0 0 0.004096 447.965867a392.3968 392.3968 0 0 0 51.473067 195.584 460.936533 460.936533 0 0 0 140.561066 153.463466V1024l223.914667-135.9872c31.812267 5.256533 63.8976 7.918933 96.0512 7.9872 92.637867 0 178.3808-20.002133 256.955733-60.074667 78.711467-39.867733 140.765867-94.208 186.5728-162.884266A398.1312 398.1312 0 0 0 1024.004096 448.034133a398.1312 398.1312 0 0 0-68.471467-225.006933c-45.738667-68.676267-107.861333-123.016533-186.5728-163.0208C690.384896 20.002133 604.641963 0 512.004096 0zM256.004096 384a61.44 61.44 0 0 0-44.987733 18.978133 61.713067 61.713067 0 0 0-18.978134 45.056c0 17.271467 6.280533 32.290133 18.978134 44.987734 11.741867 12.288 27.989333 19.114667 45.056 18.978133a61.576533 61.576533 0 0 0 44.919466-18.978133c12.288-11.741867 19.182933-27.989333 19.0464-45.056a61.8496 61.8496 0 0 0-19.0464-44.987734 61.44 61.44 0 0 0-44.987733-18.978133z m256 0a61.44 61.44 0 0 0-45.056 18.978133 61.713067 61.713067 0 0 0-18.909867 45.056c0 17.271467 6.280533 32.290133 18.978134 44.987734 11.741867 12.288 27.989333 19.114667 44.987733 18.978133a61.576533 61.576533 0 0 0 45.056-18.978133c12.288-11.741867 19.114667-27.989333 18.909867-45.056a61.8496 61.8496 0 0 0-18.978134-44.987734 61.44 61.44 0 0 0-44.987733-18.978133z" fill="#030303" ></path></svg>  </el-divider>
              <el-divider
                  v-else
                  class="action-icon-placeholder"
              >
                <svg  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="24" height="24"><path d="M512.56888889 23.552c-282.39644445 0-509.72444445 198.88355555-509.72444444 444.07466667 0 150.98311111 87.04 284.21688889 218.45333333 365.90933333v136.76088889c0 17.74933333 12.40177778 30.15111111 28.44444444 30.15111111 5.34755555 0 10.69511111-1.82044445 14.22222223-3.52711111L402.432 904.53333333c35.49866667 7.05422222 70.99733333 8.87466667 108.31644445 8.87466667C793.25866667 913.408 1020.58666667 714.52444445 1020.58666667 469.33333333c1.70666667-246.89777778-227.328-445.78133333-508.01777778-445.78133333zM283.42044445 540.44444445c-33.792 0-60.416-28.44444445-60.416-60.416 0-33.792 28.44444445-60.416 60.416-60.416 33.792 0 60.416 28.44444445 60.416 60.416 1.70666667 31.97155555-26.624 60.416-60.416 60.416z m232.67555555 0c-33.792 0-60.416-28.44444445-60.416-60.416 0-33.792 28.44444445-60.416 60.416-60.416 33.792 0 60.416 28.44444445 60.416 60.416s-28.44444445 60.416-60.416 60.416z m223.80088889 0c-33.792 0-60.416-28.44444445-60.416-60.416 0-33.792 28.44444445-60.416 60.416-60.416 33.792 0 60.416 28.44444445 60.416 60.416S773.68888889 540.44444445 739.89688889 540.44444445z m0 0" fill="#1296db" ></path></svg>
              </el-divider>
            </button>
            <button class="action-btn collect-btn" @click="toggleCollect(post.id)">
              <el-divider v-if="!post.isCollected" class="action-icon-placeholder">
                <svg  class="icon" viewBox="0 0 1105 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="24" height="24"><path d="M1071.543358 476.241493c17.008625-17.008625 25.512937-34.017249 25.512937-51.025875 8.504312-51.025874-25.512937-93.547436-76.538811-102.051748l-246.625059-42.521562H765.388113L663.336365 51.025874C654.832052 34.017249 637.823428 17.008625 620.814803 8.504312 578.293241-8.504312 527.267367 8.504312 510.258742 51.025874L399.702681 280.642308h-8.504312l-238.120746 42.521562c-17.008625 0-34.017249 8.504312-51.025875 25.512937-34.017249 34.017249-34.017249 93.547436 0 127.564686l178.59056 178.590559v8.504313l-42.521562 255.129371c0 17.008625 0 42.521562 8.504313 59.530186 25.512937 42.521562 76.538811 59.530187 119.060373 34.01725l221.112121-119.060373H595.301866l221.112121 119.060373c8.504312 8.504312 25.512937 8.504312 42.521562 8.504312 51.025874-8.504312 76.538811-51.025874 68.034499-102.051748l-42.521562-255.129371v-8.504313l187.094872-178.590559zM833.422612 595.301866c-25.512937 17.008625-34.017249 51.025874-25.512937 76.538811l42.521562 255.129371-221.112122-110.556061c-25.512937-17.008625-59.530187-17.008625-85.043123 0L323.16387 935.47436v-8.504312l42.521562-255.129371c0-25.512937-8.504312-59.530187-25.512937-76.538811L170.086247 416.711306v-8.504312l238.120747-34.01725h-8.504313c34.017249 0 68.034499-25.512937 85.043124-51.025874L586.797553 85.043124l110.556061 229.616434 8.504312 8.504312c8.504312 25.512937 34.017249 42.521562 59.530187 42.521562l238.120746 34.017249v17.008625L833.422612 595.301866z" fill="#666666" ></path></svg>
              </el-divider>
              <el-divider v-else class="action-icon-placeholder collected">
                <svg  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="24" height="24"><path d="M558.26773333 881.64693333c-26.8288-14.7968-70.5024-14.6944-97.1776 0L272.57173333 985.42933333c-53.6064 29.5424-88.7808 2.56-78.5408-59.8016l35.9936-219.8016c5.12-31.3344-8.448-74.752-30.0544-96.768L47.49653333 453.30773333c-43.4176-44.288-29.696-87.6544 30.0032-96.768l210.7392-32c30.0032-4.608 65.28-31.5392 78.6432-59.8528L461.14133333 64.75093333c26.8288-56.8832 70.4512-56.6784 97.1264 0l94.208 199.9872c13.4656 28.4672 48.896 55.296 78.6944 59.8528l210.7392 32.0512c60.0064 9.1136 73.216 52.5824 30.0544 96.7168l-152.5248 155.648c-21.7088 22.1696-35.1232 65.6896-30.0544 96.8192l35.9936 219.8016c10.24 62.5664-25.1392 89.1904-78.5408 59.8016l-188.5696-103.7824z" fill="#f4ea2a" p-id="5502"></path></svg>
              </el-divider>
            </button>
          </div>
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
            <div class="comment-list">
              <div v-for="(comment, cIndex) in post.comments" :key="cIndex" class="comment-item">
                <div class="comment-content">
                  <span class="comment-author">{{ comment.author }}</span>
                  <p class="comment-text">{{ comment.text }}</p>
                </div>
                <button class="comment-like-btn">
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
  <div class="creation-modal-overlay" v-if="showCreationModal" @click="showCreationModal = false">
    <div class="creation-modal" @click.stop>
      <div class="creation-modal-header">
        <h2 class="creation-title">创作中心</h2>
      </div>
      <div class="creation-modal-body">
        <input
            v-model="newPost.title"
            type="text"
            class="creation-title-input"
            placeholder="发布的标题......"
        />
        <textarea
            v-model="newPost.content"
            class="creation-input"
            placeholder="发布精彩内容......"
            rows="6"
        ></textarea>
        <div v-if="previewImages.length > 0" class="preview-images">
          <div v-for="(img, imgIndex) in previewImages" :key="imgIndex" class="preview-image-wrapper">
            <img :src="img" alt="预览图" class="preview-image" />
            <button class="remove-image-btn" @click="removeImage(imgIndex)">×</button>
          </div>
        </div>
        <div class="creation-footer">
          <input
              type="file"
              ref="fileInput"
              multiple
              accept="image/*"
              style="display: none"
              @change="handleImageUpload"
          />
          <button class="image-upload-btn" @click="triggerFileInput">
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
import { useForumStore } from '@/stores/forumStore'
import { useRouter } from 'vue-router'

// 获取Store实例
const forumStore = useForumStore()
const router = useRouter()

// 解构仓库的响应式数据（替换本地allPosts/hotPosts）
const { allPosts, hotPosts } = forumStore;

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

// 评论区控制
const activeCommentIndex = ref(null); // 当前展开的评论区索引
const newComment = ref(''); // 新评论内容
const isAnonymous = ref(false); // 是否匿名

// 切换评论区显示/隐藏
const toggleComment = (index) => {
  activeCommentIndex.value = activeCommentIndex.value === index ? null : index;
};

// 添加评论（调用仓库方法）
const addComment = (postIndex) => {
  if (!newComment.value.trim()) return;
  const author = isAnonymous.value ? '匿名用户' : '我';

  // 找到当前帖子的 ID
  const postId = allPosts[postIndex].id;
  // 调用仓库的addComment方法
  forumStore.addComment(postId, { author, text: newComment.value });
  // 找到当前评论的帖子对象
  const currentPost = allPosts[postIndex];
  // 调用仓库的addHistory方法，记录评论操作
  if (currentPost) {
    forumStore.addHistory(currentPost, 'comment');
  }
  newComment.value = '';
  isAnonymous.value = false;
};

// 切换收藏状态（调用仓库方法）
const toggleCollect = (postId) => {
  forumStore.toggleCollect(postId);
  const currentPost = allPosts.find(post => post.id === postId);
  // 调用仓库的addHistory方法，记录收藏操作
  if (currentPost) {
    forumStore.addHistory(currentPost, 'collect');
  }
};

// 切换点赞状态（调用仓库方法）
const toggleLike = (postId) => {
  forumStore.toggleLike(postId);
  // 先找到当前点赞的帖子对象
  const currentPost = allPosts.find(post => post.id === postId);
  // 调用仓库的addHistory方法，记录点赞操作
  if (currentPost) {
    forumStore.addHistory(currentPost, 'like');
  }
};

// 发布帖子（调用仓库方法）
const handlePublish = () => {
  if (!newPost.value.content.trim() && !newPost.value.title.trim() && previewImages.value.length === 0) {
    alert('请输入标题、内容或添加图片后再发布');
    return;
  }

  // 调用仓库的publishPost方法
  forumStore.publishPost({
    author: '用户',
    title: newPost.value.title,
    content: newPost.value.content,
    images: [...previewImages.value]
  });

  // 清空表单并关闭弹窗
  forumStore.clearPostForm();
  previewImages.value = [];
  showCreationModal.value = false;

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

/* 我的收藏链接样式 */
.collect-nav-link {
  color: #1890ff;
  text-decoration: none;
  font-size: 14px;
  padding: 6px 12px;
  border: 1px solid #1890ff;
  border-radius: 4px;
}
.collect-nav-link:hover {
  background-color: #e6f7ff;
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
  width: 102%;
  display: flex;
  flex-direction: column;
  gap:20px;
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
  background-color: dodgerblue;
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
  background-color: dodgerblue;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 16px;
  font-size: 14px;
  cursor: pointer;
}
.publish-comment-btn:hover {
  background-color: #096dd9;
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