<template>

    <div class="collections">
      <CollectionPanel v-for="item in collections.slice(0, maxCollections)" :key="item.title" :collection="item"></CollectionPanel>
    </div>

    <div class="recipes">
      <h2>Neueste Rezepte</h2>
      <RecipeListView></RecipeListView>
    </div>

</template>

<script lang="ts" setup>
import CollectionPanel from '../components/CollectionPanel.vue';
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import RecipeListView from './RecipeListView.vue';

const store = useStore()

const collections = computed(() => store.getters.getCollections)
const maxCollections = ref(2)

onMounted(() => {
  setMediaQuery()
  window.addEventListener('resize', setMediaQuery);
})

function setMediaQuery() {
  if (window.matchMedia("(max-width: 1100px)").matches) { // If media query matches
      maxCollections.value = 1;
  } else {
      maxCollections.value = 2;
  }
}

onUnmounted(() => {
  window.removeEventListener('resize', setMediaQuery);
})

</script>

<style scoped>

.collections {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-bottom: 5rem;
}

.recipes h2 {
  margin-bottom: 3rem;
}

@media (max-width: 1100px) {
  .collections {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 3rem;
  }
}

</style>
