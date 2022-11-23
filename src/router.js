import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '@/modules/IndexModule/pages/index-page/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: null,
    redirect: {
      name: 'index'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: IndexPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
