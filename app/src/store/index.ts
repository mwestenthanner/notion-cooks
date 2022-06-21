import { createStore } from 'vuex'
import { Recipe } from '../../types'
import { simpleSearch } from './filters'

export default createStore({
  state: {
    recipeList: [
      {
        id: '',
        title: '',
        desc: '',
        img: '',
        category: '',
        slug: '',
        tags: [ '' ],
        time: '',
        collections: []
      } as Recipe
    ],
    tagList: [
      ''
    ],
    collectionList: [
      {
        id: '',
        title: '',
        subheading: '',
        desc: '',
        img: ''
      }
    ],
    searchTerm: '',
    filters: []
  },
  getters: {

    getRecipeList(state) {
      return state.recipeList;
    },

    getRecipeContent: (state) => (slug: string) => {
      return state.recipeList.find(item => item.slug === slug);
    },

    getCategories(state) {
      return state.tagList;
    },

    getCollections(state) {
      return state.collectionList;
    },

    getCollectionFromId: (state) => (id: string) => {
      return state.collectionList.find(item => item.id === id);
    },

    getRecipesFromSearch(state) {
      return simpleSearch(state.recipeList, state.searchTerm);
    },

    getSearchTerm(state) {
      return state.searchTerm;
    },

  },
  mutations: {

    setRecipeList(state, recipes: Array<Recipe>) {
      state.recipeList = recipes;
    },

    setRecipeContent(state, recipe: Recipe) {
      const index = state.recipeList.findIndex(item => item.slug === recipe.slug);
      state.recipeList[index] = recipe;
    },

    setCollectionList(state, collections) {
      state.collectionList = collections
    },

    setTagListFromRecipes(state) {

      const tags: string[] = []

      state.recipeList.forEach(recipe => {

        recipe.tags.forEach(tag => {
          if (!tags.includes(tag)) {
            tags.push(tag);
          }
        });

      });

      state.tagList = tags;
    },

    setSearchTerm(state, search) {
      state.searchTerm = search;
    }

  },
  actions: {
  },
  modules: {
  }
})
