import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '../views/MainView.vue'
import Recipe from '../views/RecipeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'home',
    component: Main
  },
  {
    path: '/test',
    name: 'test',
    component: Recipe
  },
  {
    path: '/recipe/:slug',
    name: 'recipe',
    component: Recipe,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 50,
        behavior: 'smooth',
      }
    } else return {
      top: 0,
      behavior: 'smooth',
    }
  }
})

export default router