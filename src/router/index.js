import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

// 懒加载页面
const Login = () => import('@/views/Login.vue')
const Home = () => import('@/views/Home.vue')
const Message = () => import('@/views/MessagePage.vue')
const Collect = () => import('@/views/CollectPage.vue')
const History = () => import('@/views/HistoryPage.vue')
const Resume = () => import('@/views/Resume.vue')
const Forum = () => import('@/views/Forum.vue')
const Interview = () => import('@/views/Interview.vue')
import CompanyDetail from '@/views/CompanyDetail.vue'

const routes = [
    // 登录页（无布局，默认首页）
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: '登录 - 简启未来',
            requiresAuth: false
        }
    },
    // 注册页
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/Register.vue'),
        meta: {
            title: '注册 - 简启未来',
            requiresAuth: false
        }
    },
    // 主页（路径改为/home，匹配登录跳转）
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: '主页 - 简启未来',
            layout: MainLayout,
            requiresAuth: true
        }
    },
    // 简历创建页面（和主页一样需要登录、使用MainLayout）
    {
        path: '/resume',
        name: 'Resume',
        component: Resume,
        meta: {
            title: '简历创建 - 简启未来',
            layout: MainLayout,
            requiresAuth: true
        }
    },
    // 论坛中心页面
    {
        path: '/forum',
        name: 'Forum',
        component: Forum,
        meta: {
            title: '论坛中心 - 简启未来',
            layout: MainLayout,
            requiresAuth: true
        }
    },
    // 面试模拟页面
    {
        path: '/interview',
        name: 'Interview',
        component: Interview,
        meta: {
            title: '面试模拟 - 简启未来',
            layout: MainLayout,
            requiresAuth: true
        }
    },
    {
        path: '/message',
        name: 'Message',
        component: Message,
        meta: {
            title: '留言 - 简启未来',
            layout: MainLayout,
            requiresAuth: true
        }
    },
    {
        path: '/collect',
        name: 'Collect',
        component: Collect,
        meta: {
            title: '收藏 - 简启未来',
            layout: MainLayout,
            requiresAuth: true
        }
    },
    {
        path: '/history',
        name: 'History',
        component: History,
        meta: {
            title: '历史 - 简启未来',
            layout: MainLayout,
            requiresAuth: true
        }
    },
    {
        path: '/company/detail',
        name: 'CompanyDetail',
        component: CompanyDetail,
        meta: {
            title: '公司详情',
            layout: MainLayout,
            requiresAuth: true
        }
    },
    // 兜底路由：所有未知路径跳登录页
    {
        path: '/:pathMatch(.*)*',
        redirect: '/login'
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

// 全局登录守卫（核心优化：严格判断登录状态）
router.beforeEach((to, from, next) => {
    const requiresAuth = to.meta.requiresAuth || false
    // 核心修改：严格判断localStorage的值是否为字符串'true'
    const isLoggedIn = localStorage.getItem('isLogin') === 'true'

    // 调试日志：方便排查问题
    console.log('路由守卫 - 目标页面:', to.path)
    console.log('路由守卫 - 是否需要登录:', requiresAuth)
    console.log('路由守卫 - 实际登录状态:', isLoggedIn)

    if (requiresAuth && !isLoggedIn) {
        // 未登录 → 跳登录页，并记录目标页面
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    }
    // 新增：已登录状态访问登录页，自动跳回之前的页面或首页
    else if (!requiresAuth && isLoggedIn && to.path === '/login') {
        const redirectPath = to.query.redirect || '/home'
        next(redirectPath)
    }
    else {
        next()
    }
})

// 设置页面标题
router.afterEach((to) => {
    document.title = to.meta.title || '简启未来'
})

export default router