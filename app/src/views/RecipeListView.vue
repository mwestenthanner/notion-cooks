<template>

    <div class="recipes">
      <h2 v-if="route.params.tagSlug">Kategorie: {{ tagName }}</h2>
      <SearchFilter></SearchFilter>
      <div class="panels">
        <RecipePanel v-for="item in recipeList" :key="item.slug" :recipe="item"></RecipePanel>  
      </div>
    </div>

</template>

<script lang="ts" setup>
import SearchFilter from '../components/SearchFilter.vue';
import RecipePanel from '../components/RecipePanel.vue';
import { computed, watch, ref } from 'vue';
import { useStore } from 'vuex';
import { onBeforeRouteLeave, useRoute } from 'vue-router';

const store = useStore()

const route = useRoute()

let tagName = ref('')

if (route.params.tagSlug) {
  setTag()
}

const recipeList = computed(() => store.getters.getFilteredRecipes)

watch(() => route.params.tagSlug, setTag)

onBeforeRouteLeave(() => {
    store.commit('setTagFilter', []);
})

function setTag() {
  store.commit('setTagFilter', [route.params.tagSlug]);
  const tag = computed(() => store.getters.getTagFromSlug(route.params.tagSlug))
  tagName.value = tag.value.name
}

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
  justify-content: center;
}

@media (max-width: 965px) {
  .recipes {
    max-width: 100%;
    margin-left: 0;
  }
}

@media (max-width: 760px) {
  .panels {
    grid-template-columns: repeat(auto-fit, minmax(14rem,100%));
  }

}


</style>
