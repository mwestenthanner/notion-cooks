<template>

    <div class="header-block">
        <div class="image">
            <img :src="collection.img" alt="">
        </div>
        <div class="content">
            <h2>{{ collection.title }}</h2>
            <h3>{{ collection.subheading }}</h3>
        </div>
    </div>

    <div class="description">
        <p>{{ collection.desc }}</p>
    </div>

    <div class="recipes">
      <RecipePanel v-for="item in recipeList" :key="item.slug" :recipe="item"></RecipePanel>
    </div>

</template>

<script lang="ts" setup>
import RecipePanel from '../components/RecipePanel.vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const route = useRoute()
const slug = route.params.slug

const collection = computed(() => store.getters.getCollectionFromSlug(slug))
const recipeList = computed(() => store.getters.getCollectionRecipes(collection.value.id))

</script>

<style scoped>

.header-block {
    aspect-ratio: 20 / 6;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
}

.image {
    background: var(--dark-gradient);
    height: 100%;
    width: 100%;
}

.content {
    position: absolute;
    width: 80%;
    height: 100%;
    bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 1.5rem;
    color: white;
    padding: 3%;
}

img {
    height: auto;
    max-width: 100%;
    object-fit: cover;
    display: block;
    z-index: -1;
    position: relative;
    border-radius: 1.1rem;
    transform: scale(1);
    transition: transform .5s;
}

.collection:hover img {
  transform: scale(1.2);
  transition: transform 0.5s;
}

.content h2 {
    font-size: 300%;
    margin-bottom: 0.5rem;
}

.content h3 {
    font-weight: 400;
}

.description {
    max-width: 90%;
    margin: 4rem 5% 4rem 5%;
}

.recipes {
    max-width: 90%;
    margin-left: 5%;
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem,18rem));
    grid-gap: 2rem;
}

</style>
