// src/stores/forumStore.js
import { defineStore } from 'pinia'

// 定义论坛全局状态
export const useForumStore = defineStore('forum', {
    // 持久化的状态（会同步到localStorage）
    state: () => ({
        // 所有帖子数据（初始值从localStorage读取，无则用默认数据）
        allPosts: JSON.parse(localStorage.getItem('forumPosts')) || [
            {
                id: 1,
                author: '谢敏旗',
                title: '保护您的数字安全：重要性与方法',
                content: `保护您的数字安全：重要性与方法

在数字时代，我们的个人信息和隐私面临着前所未有的威胁。从网络欺诈到数据泄露，数字安全问题已经成为我们生活中不可忽视的一部分。保护您的数字安全至关重要，不仅可以保护您的个人信息，还可以保障您的财务和声誉安全。
我们每个人都可以采取一些简单而有效的措施来保护自己的数字安全：

   1.强密码保护： 使用复杂、独特的密码，并定期更换。避免使用容易猜测的密码，如生日或简单的数字组合。
    2.双重认证： 启用双重认证功能，以增加登录安全性。这通常包括输入密码后，再输入通过手机或邮箱收到的验证码。
    3.谨慎公开个人信息： 在社交媒体和其他在线平台上，尽量避免公开过多个人信息，如地址、电话号码等。
    4.定期更新软件和防病毒程序： 确保您的操作系统、应用程序和防病毒软件都是最新版本，以防止安全漏洞被利用。
    5.警惕网络诈骗： 谨慎对待来自陌生人或未知来源的电子邮件、信息和链接，以防止钓鱼和恶意软件攻击。
    6.备份重要数据： 定期备份您的重要文件和数据，以防止数据丢失或损坏。
    7.教育自己和家人： 教育家人和朋友有关数字安全的重要性和最佳实践，共同建立一个安全的数字环境。`,
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
        ],
        // 本周热帖数据
        hotPosts: ['XXXXXXXXX', 'XXXXXXXXX', 'XXXXXXXXX', 'XXXXXXXXX'],
        // 临时状态（不需要持久化，仅页面内使用）
        activeCommentIndex: null,
        newComment: '',
        isAnonymous: false,
        searchKeyword: '',
        showCreationModal: false,
        newPost: { author: '', title: '', content: '', images: [] },
        previewImages: []
    }),
    getters: {
        collectedPosts: (state) => state.allPosts.filter(post => post.isCollected)
    },

    // 方法：修改状态并同步到本地存储
    actions: {
        // 保存帖子数据到localStorage（核心：持久化）
        savePostsToLocal() {
            localStorage.setItem('forumPosts', JSON.stringify(this.allPosts))
        },

        // 发布新帖子
        publishPost(post) {
            this.allPosts.unshift(post)
            this.savePostsToLocal() // 同步到本地存储
        },

        // 添加评论
        addComment(postIndex, comment) {
            this.allPosts[postIndex].comments.push(comment)
            this.savePostsToLocal()
        },

        // 切换点赞状态
        toggleLike(postId) {
            const post = this.allPosts.find(p => p.id === postId)
            if (post) {
                post.isLiked = !post.isLiked
                this.savePostsToLocal()
            }
        },

        // 切换收藏状态
        toggleCollect(postId) {
            const post = this.allPosts.find(p => p.id === postId)
            if (post) {
                post.isCollected = !post.isCollected
                this.savePostsToLocal()
            }
        },

        // 清空临时表单
        clearPostForm() {
            this.newPost = { author: '', title: '', content: '', images: [] }
            this.previewImages = []
            this.showCreationModal = false
        }
    }
}) 