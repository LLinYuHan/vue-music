import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: () => import('components/recommend/recommend')
  },
  {
    path: '/singer',
    component: () => import('components/singer/singer'),
    children: [
      {
        path: ':id',
        component: () => import('components/singer-detail/singer-detail')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
