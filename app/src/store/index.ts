import { createStore } from 'vuex'
import { Recipe } from '../../types'
import { simpleSearch, filterByTags, createSlug, matchTagImage } from './filters'

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
      {
        name: '',
        slug: '',
        img: ''
      }
    ],
    collectionList: [
      {
        id: '',
        title: '',
        subheading: '',
        desc: '',
        img: '',
        slug: ''
      }
    ],
    searchTerm: '',
    filters: {
      tags: [],
      time: [],
      collection: ''
    }
  },
  getters: {

    getRecipeList(state) {
      return state.recipeList;
    },

    getRecipeContent: (state) => (slug: string) => {
      return state.recipeList.find(item => item.slug === slug);
    },

    getFilteredRecipes(state) {
      return filterByTags(simpleSearch(state.recipeList, state.searchTerm), state.filters.tags, state.tagList);
    },

    getCollectionRecipes: (state) => (collectionId: string) => {
      return state.recipeList.filter(item => item.collections.includes(collectionId));
    },

    getTags(state) {
      return state.tagList;
    },

    getTagFromSlug: (state) => (slug: string) => {
      return state.tagList.find(item => item.slug == slug);
    },

    getCollections(state) {
      return state.collectionList;
    },

    getCollectionFromSlug: (state) => (slug: string) => {
      return state.collectionList.find(item => item.slug === slug);
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

      const tags: { name: string; slug: string; img: string; }[] = []

      state.recipeList.forEach(recipe => {

        recipe.tags.forEach(tag => {
          if (!JSON.stringify(tags).includes(tag)) {

            const tagObject = {
              name: tag,
              slug: createSlug(tag),
              img: matchTagImage(tag)
            }

            tags.push(tagObject);
          }
        });

      });

      state.tagList = tags;
    },

    setSearchTerm(state, search) {
      state.searchTerm = search;
    },

    setTagFilter(state, tags) {
      state.filters.tags = tags;
    },

    addTagFilter(state, tags) {
      state.filters.tags = state.filters.tags.concat(tags);
    },

    removeTagFilter(state, tags) {
      state.filters.tags = state.filters.tags.filter( (element) => {
        return tags.indexOf(element) < 0;
      } );
    }

  },
  actions: {
  },
  modules: {
  }
})
