<template>

  <HeaderBlock></HeaderBlock>

  <main>
    <router-view/>
  </main>

  <footer>
    <div class="credits">© Marianne Westenthanner 2022</div>
  </footer>

</template>

<script lang="ts" setup async>

import { useStore } from 'vuex';
import { onBeforeMount } from 'vue';
import HeaderBlock from './components/HeaderBlock.vue';

const store = useStore()

// Fetch recipes from backend and store
onBeforeMount(async () => {

      const recipeResp = await fetch('https://notion-cooks.netlify.app/.netlify/functions/api/recipes');
      const recipeData = await recipeResp.json();

      const collectionResp = await fetch('https://notion-cooks.netlify.app/.netlify/functions/api/collections');
      const collectionData = await collectionResp.json();
      
      store.commit('setRecipeList', recipeData);
      store.commit('setCollectionList', collectionData);
      store.commit('setTagListFromRecipes');

    });



</script>

<style>

header, main, footer > div {
  max-width: 70%;
  margin-left: 15%;
}

main {
  margin-bottom: 4rem;
}

footer {
  padding: 3rem 4rem;
  background-color: var(--primary);
  color: white;
}

@media (max-width: 965px) {
header, main, footer > div {
  max-width: 80%;
  margin-left: 10%;
}
}

</style>
