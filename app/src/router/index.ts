import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '../views/MainView.vue'
import RecipeList from '../views/RecipeListView.vue'
import CollectionsList from '../views/CollectionsListView.vue'
import Recipe from '../views/RecipeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'home',
    component: Main
  },
  {
    path: '/recipe/:slug',
    name: 'recipe',
    component: Recipe,
    props: true
  },
  {
    path: '/recipe/',
    name: 'recipelist',
    component: RecipeList
  },
  {
    path: '/recipes',
    name: 'recipelist',
    component: RecipeList
  },
  {
    path: '/collections',
    name: 'collections',
    component: CollectionsList
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