import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
// import Login from '../views/login/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue'),
    beforeEnter (to, frin, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/shop/Shop.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  isLogin || (to.name === 'Login') || (to.name === 'Register') ? next() : next({ name: 'Login' })
})

export default router
