<template>

  <header>
    <router-link to="/"><h1>recipe<span class="heading">box</span></h1></router-link>
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

header {
  display: flex;
  justify-content: space-between;
  margin: 4rem;
  align-items: center;
}

header h1 {
  font-weight: 400;
  font-size: 300%;
}

.heading {
  font-weight: 800;
  border-bottom: 0.5rem solid var(--primary);
}

main {
  margin: 2rem 4rem;
}

footer {
  padding: 3rem 4rem;
  background-color: var(--primary);
  color: white;
}

</style>
