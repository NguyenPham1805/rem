import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from 'rem/pages/RemHome.vue'
import RemNotFound from 'rem/components/RemNotFound.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/list/:slug',
    name: 'List',
    component: () => import('rem/pages/RemBrowser.vue')
  },
  {
    path: '/category/:path/:slug',
    name: 'Category',
    component: () => import('rem/pages/RemCategory.vue')
  },
  {
    path: '/watch/:slug',
    name: 'Watch',
    component: () => import('rem/pages/RemWatch.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('rem/pages/RemSearch.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('rem/pages/RemHistory.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: RemNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
