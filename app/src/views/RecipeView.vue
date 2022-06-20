<template>
<div class="recipe">
    <div class="left">
        <img :src="recipe.img" :alt="recipe.title">
    </div>
    <div class="right">

        <div class="recipe-header">
            <div class="title-block">
                <h2>{{ recipe.title }}</h2>
                <h4>{{ recipe.category }} | {{ recipe.time }}</h4>
            </div>
            <div class="share-block">
                <p class="share-button">
                    <svg viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64"><path d="M-264.2-339.9c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9c0 4.3-3.5 7.9-7.9 7.9zm0-12.9c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9c0-2.6-2.2-4.9-4.9-4.9zM-232.1-356c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9-3.6 7.9-7.9 7.9zm0-12.8c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9-2.2-4.9-4.9-4.9zM-232.1-323.9c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9-3.6 7.9-7.9 7.9zm0-12.8c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9-2.2-4.9-4.9-4.9z" transform="translate(280 380)" fill="#ffffff" class="fill-134563"></path><path d="m-238.6-333.2-20.6-10.3 1.4-2.9 20.7 10.3-1.5 2.9M-257.8-349.3l-1.4-2.8 20.6-10.3 1.5 2.8-20.7 10.3" transform="translate(280 380)" fill="#ffffff" class="fill-134563"></path></svg>
                </p>
            </div>
        </div>

        <div class="description">
            <p>{{ recipe.desc }}</p>
        </div>

        <div class="ingredients">

            <h3>{{ recipe.content.ingredientsHeading }}</h3>
            <table>
                <tr v-for="item in recipe.content.ingredientsList" :key="item.ingredient">
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.ingredient }}</td>
                </tr>
            </table>

        </div>

        <div class="prep">
            <h3>{{ recipe.content.prepHeading }}</h3>
            <ol>
                <li v-for="item in recipe.content.prepList" :key="item">{{ item }}</li>
            </ol>
        </div>

    </div>
</div>
</template>

<script lang="ts" setup async>
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

const store = useStore()

const route = useRoute()
const slug = route.params.slug

const recipe = computed(() => store.getters.getRecipeContent(slug))

</script>

<style scoped>
.recipe {
    display: grid;
    max-width: 90%;
    margin-left: 5%;
    grid-template-columns: 45% 1fr;
}

.left img {
    max-width: 100%;
    border-radius: 2rem;
}

.right {
    padding-top: 6rem;
    margin-left: 3rem;
}

.recipe-header {
    display: grid;
    grid-template-columns: 80% 1fr;  
}

.share-block {
    justify-self: end;
}

.share-button {
    background-color: var(--primary);
}

h2 {
    font-size: 200%;
    font-weight: 800;
    margin-bottom: 1rem;
}

h3 {
    font-size: 120%;
    font-weight: 800;
    margin-bottom: 1rem;   
}

.right > div {
    margin-bottom: 3rem;
    line-height: 1.5rem;
}

.description {
    background-color: rgb(237, 237, 237);
    padding: 2rem;
}

.ingredients td {
    padding-right: 2rem;
}

.ingredients td:nth-child(1)  {
    white-space: nowrap;
    vertical-align: top;
}

.prep ol li {
    margin-left: 1.5rem;
    padding-bottom: 1rem;
}

</style>
