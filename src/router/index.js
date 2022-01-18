import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect : 'home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
    // ========================
    {
        path: '/404-not-found',
        name: 'Page404',
        component: () => import('@/views/general/404-notfound.vue')
    },
    {
        path: '/:catchAll(.*)',
        redirect: '404-not-found',
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  })
  
  export default router  