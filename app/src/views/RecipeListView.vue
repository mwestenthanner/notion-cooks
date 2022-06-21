<template>

    <div class="recipes">
      <SearchFilter></SearchFilter>
      <div class="panels">
        <RecipePanel v-for="item in recipeList" :key="item.slug" :recipe="item"></RecipePanel>  
      </div>
    </div>

</template>

<script lang="ts" setup>
import SearchFilter from '../components/SearchFilter.vue';
import RecipePanel from '../components/RecipePanel.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const recipeList = computed(() => store.getters.getRecipesFromSearch)

</script>

<style scoped>

.recipes {
  max-width: 90%;
  margin-left: 5%;
  margin-bottom: 5rem;
}

.recipes h2 {
  margin-bottom: 3rem;
}

.panels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem,18rem));
  grid-gap: 2rem;
}

</style>
