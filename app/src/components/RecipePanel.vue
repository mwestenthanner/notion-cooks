<template>
<router-link class="link" :to="'/recipe/' + props.recipe.slug">
<div class="panel">
    <div class="image">
        <img :src="props.recipe.img" :alt="props.recipe.title" />
    </div>
    <div class="content">
        <h3>{{ props.recipe.title }}</h3>
        <div class="tags">
            <span class="tag" v-for="tag in props.recipe.tags" :key="tag"><router-link :to="createSlug(tag)">{{ tag }}</router-link></span>
        </div>
    </div>
</div>
</router-link>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps(['recipe'])

function createSlug(tag: string) {

    // Remove Umlaut/Accents
    tag = tag.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Replace spaces with dashes
    tag = tag.replace(/\s+/g, '-')

    return '/tag/' + tag.toLowerCase();

}

</script>

<style scoped>

.panel {
    aspect-ratio: 2 / 3;
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

.panel:hover img {
  transform: scale(1.2);
  transition: transform 0.5s;
}

.content h3 {
    color: white;
    margin-bottom: 1.5rem;
}

.tag {
    background-color: var(--primary);
    padding: 0.3rem 0.4rem;
    font-size: 80%;
    box-sizing: border-box;
}

.tag:not(:last-child) {
    margin-right: 0.5rem;
}

.tag:hover {
    background-color: transparent;
    border: 0.08rem solid var(--primary); 
    padding: 0.22rem 0.32rem;
}

.tag:hover a {
    color: var(--primary);  
}

</style>
