import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/echarts',
      component: () => import('@/pages/Echarts.vue')
    },
    {
      path: '/item',
      component: () => import('@/pages/item.vue')
    }
  ]
})

export default router