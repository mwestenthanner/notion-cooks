<template>

  <header>
    <MainTitle></MainTitle>
    <NavList></NavList>
  </header>

  <main>

    <router-view/>

  </main>

  <footer>
    <div class="credits">© Marianne Westenthanner 2022</div>
  </footer>

</template>

<script lang="ts" setup async>
import MainTitle from './components/MainTitle.vue';
import NavList from './components/NavList.vue';
import { useStore } from 'vuex';
import { onBeforeMount } from 'vue';


const store = useStore()

// Fetch recipes from backend and store
onBeforeMount(async () => {

      const resp = await fetch('https://notion-cooks.netlify.app/.netlify/functions/api/recipes');
      const data = await resp.json();
      
      store.commit('setRecipeList', data);

    });

</script>

<style>

header, main, footer > div {
  max-width: 70%;
  margin-left: 15%;
}

header {
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  margin-bottom: 4rem;
  align-items: center;
}

main {
  margin-bottom: 4rem;
}

footer {
  padding: 3rem 4rem;
  background-color: var(--primary);
  color: white;
}

</style>
