<template>

    <div class="collections">
      <CollectionPanel v-for="item in collections" :key="item.name" :collection="item"></CollectionPanel>
    </div>

    <div class="recipes">
      <h2>Neueste Rezepte</h2>
      <div class="panels">
        <RecipePanel v-for="item in recipeList" :key="item.slug" :recipe="item"></RecipePanel>  
      </div>
    </div>

</template>

<script lang="ts" setup>
import RecipePanel from '../components/RecipePanel.vue';
import CollectionPanel from '../components/CollectionPanel.vue';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

const store = useStore()

const recipeList = computed(() => store.getters.getRecipeList)

const collections = [
  {
    name: 'Fantastic BBQ',
    desc: 'Grillrezepte für den ganzen Sommer',
    img: 'https://images.unsplash.com/photo-1544470554-71345f04eba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Schnelle Sommergerichte',
    desc: 'Unter 15 Minuten und perfekt für heiße Tage',
    img: 'https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80'
  }
]

</script>

<style>

.collections {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-bottom: 5rem;
}

.recipes {
  margin-bottom: 5rem;
}

.recipes h2 {
  margin-bottom: 3rem;
}

.panels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem,16rem));
  grid-gap: 2rem;
}

</style>
