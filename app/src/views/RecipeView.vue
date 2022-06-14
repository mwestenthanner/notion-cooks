<template>
<div class="recipe">
    <div class="left">
        <img :src="recipe.img" :alt="recipe.title">
    </div>
    <div class="right">

        <div class="title-block">
            <h2>{{ recipe.title }}</h2>
            <h4>{{ recipe.category }} | {{ recipe.time }}</h4>
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
    max-width: 70%;
    margin-left: 15%;
    grid-template-columns: 40% 1fr;
}

.left img {
    max-width: 100%;
    border-radius: 2rem;
}

.right {
    padding-top: 6rem;
    margin-left: 3rem;
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

.ingredients td {
    padding-right: 2rem;
}

.prep ol li {
    margin-left: 1.5rem;
}

</style>
