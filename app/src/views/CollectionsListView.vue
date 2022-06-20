<template>

    <div class="collections">
      <h2>Alle Sammlungen</h2>
      <div class="panels">
        <CollectionPanel v-for="item in collections" :key="item.title" :collection="item"></CollectionPanel>  
      </div>
    </div>

</template>

<script lang="ts" setup>
import CollectionPanel from '../components/CollectionPanel.vue';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

const store = useStore()

const collections = computed(() => store.getters.getCollections)

</script>

<style scoped>

h2 {
  margin-bottom: 3rem;
}

.panels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 45%));
  grid-gap: 2rem;
}

</style>
