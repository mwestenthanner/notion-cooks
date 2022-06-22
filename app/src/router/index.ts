import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '../views/MainView.vue'
import RecipeList from '../views/RecipeListView.vue'
import CollectionsList from '../views/CollectionsListView.vue'
import Recipe from '../views/RecipeView.vue'
import Collection from '../views/CollectionView.vue'

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
    alias: ['/recipes', '/tag/'],
    component: RecipeList
  },
  {
    path: '/collection/',
    alias: '/collections',
    name: 'collections',
    component: CollectionsList
  },
  {
    path: '/collection/:slug',
    name: 'collection',
    component: Collection,
    props: true
  },
  {
    path: '/tag/:slug',
    name: 'tag',
    component: RecipeList,
    props: true
  },
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