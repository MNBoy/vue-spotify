import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/TheHome.vue';
import Search from '../views/TheSearch.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
