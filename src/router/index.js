import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MyProfileView from "@/views/MyProfileView";
import ProfileSummaryView from "@/views/ProfileSummaryView"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/my-profile',
    name: 'my-profile',
    component: MyProfileView
  },
  {
    path: '/summary',
    name: 'summary',
    component: ProfileSummaryView
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
