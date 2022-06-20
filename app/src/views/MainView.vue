<template>

    <div class="collections">
      <CollectionPanel v-for="item in collections" :key="item.title" :collection="item"></CollectionPanel>
    </div>

    <div class="recipes">
      <h2>Neueste Rezepte</h2>
      <RecipeListView></RecipeListView>
    </div>

</template>

<script lang="ts" setup>
import CollectionPanel from '../components/CollectionPanel.vue';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import RecipeListView from './RecipeListView.vue';

const store = useStore()

const collections = computed(() => store.getters.getCollections)

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

</style>
