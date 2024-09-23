import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from "@/views/Category/index.vue"
import music from '@/views/Category/components/music.vue'
import vedio from '@/views/Category/components/vedio.vue'
import note from '@/views/Category/components/note.vue'
import contact from '@/views/Category/components/contact.vue'
import diary from '@/views/Category/components/diary.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category',
          component: Category,
        },
        {
          path: 'category/music',
          component: music,
        },
        {
          path: 'category/vedio',
          component: vedio,
        },
        {
          path: 'category/contact',
          component: contact,
        },
        {
          path: 'category/note',
          component: note,
        },
        {
          path: 'category/diary',
          component: diary,
        },
      ]
    },
    {
      path: '/login',
      component: Login
    },
  ]
})

export default router
