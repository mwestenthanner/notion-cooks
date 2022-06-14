<template>

  <header>
    <h1>recipe<span class="heading">box</span></h1>
    <NavList></NavList>
  </header>

  <main>

    <div class="collections">
      <CollectionPanel v-for="item in collections" :key="item.name" :collection="item"></CollectionPanel>
    </div>

    <div class="recipes">
      <h2>Neueste Rezepte</h2>
      <div class="panels">
        <RecipePanel v-for="item in recipeList" :key="item.slug" :recipe="item"></RecipePanel>  
      </div>
    </div>

  </main>

  <footer>
    <div class="credits">© Marianne Westenthanner 2022</div>
  </footer>

</template>

<script lang="ts" setup async>
import RecipePanel from './components/RecipePanel.vue';
import CollectionPanel from './components/CollectionPanel.vue';
import NavList from './components/NavList.vue';
import { useStore } from 'vuex';
import { onBeforeMount } from 'vue';
import { computed } from '@vue/reactivity';

const store = useStore()

// First, fetch recipes from backend and store
onBeforeMount(async () => {

      const resp = await fetch('https://notion-cooks.netlify.app/.netlify/functions/api/recipes');
      const data = await resp.json();
      
      store.commit('setRecipeList', data);

    });

// Then, get list out of store
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

.collections {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-bottom: 5rem;
}

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
  grid-template-columns: repeat(auto-fit, minmax(14rem,16rem));
  grid-gap: 2rem;
}

footer {
  padding: 3rem 4rem;
  background-color: var(--primary);
  color: white;
}

</style>
