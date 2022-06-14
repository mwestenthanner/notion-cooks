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

            <h3>{{ recipe.ingredientsHeading }}</h3>
            <table>
                <tr v-for="item in recipe.ingredientsList" :key="item.ingredient">
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.ingredient }}</td>
                </tr>
            </table>

        </div>

        <div class="prep">
            <h3>{{ recipe.prepHeading }}</h3>
            <ol>
                <li v-for="item in recipe.prepList" :key="item">{{ item }}</li>
            </ol>
        </div>

    </div>
</div>
</template>

<script lang="ts" setup async>
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import { watch } from 'vue';

const store = useStore()

const route = useRoute()
const slug = route.params.slug

let recipe = {
   title:"Sobanudelsalat",
   desc:"Kühl, erfrischend und in 10 Minuten fertig - der perfekte Lunch für heiße Sommertage.",
   img:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0f206c11-73a2-4315-a91f-0c55c7cd60df/PXL_20220611_164502586.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220614T135218Z&X-Amz-Expires=3600&X-Amz-Signature=598c4b3cb80c57e7695fd3fdcbc7f6b3a8f060cc31cfaa7f0c3ccf85611e70a3&X-Amz-SignedHeaders=host&x-id=GetObject",
   category:"Kochen",
   tags:[
      "Brotzeit",
      "Nudeln"
   ],
   time:"< 15 min",
   collections:[
      "Schnelle Sommergerichte"
   ],
   ingredientsHeading:"Zutaten für 4 Portionen",
   ingredientsList:[
      {
         "quantity":"1 Packung",
         "ingredient":"Sobanudeln (japanische Buchweizennudeln)"
      },
      {
         "quantity":"½",
         "ingredient":"Gurke"
      },
      {
         "quantity":"1 Handvoll",
         "ingredient":"Edamame"
      },
      {
         "quantity":"2",
         "ingredient":"Frühlingszwiebeln"
      },
      {
         "quantity":"4 EL",
         "ingredient":"Erdnussbutter"
      },
      {
         "quantity":"2 EL",
         "ingredient":"Sojasauce"
      },
      {
         "quantity":"1 TL",
         "ingredient":"Reisessig"
      },
      {
         "quantity":"4 EL",
         "ingredient":"Wasser"
      }
   ],
   prepHeading:"Zubereitung",
   prepList:[
      "Die Sobanudeln und Edamame nach Packungsanweisung kochen, dann mit eiskaltem Wasser abbrausen. ",
      "Die Gurke in dünne Streifen schneiden. Die Frühlingszwiebeln putzen und in Scheiben schneiden.",
      "Für das Dressing Erdnussbutter, Sojasauce, Reisessig und Wasser verrühren und gut durchmischen.",
      "Das Gemüse mit den Nudeln mischen, das Dressing darübergeben und gut vermengen. Bis zum Servieren kaltstellen."
   ]
}

watch(store.state, async () => {
    console.log('state changed')
});

// recipe = (computed(() => store.getters.getRecipeContent(slug))).value

// if recipe has no content yet, fetch from the API
if (!recipe.ingredientsHeading) {
    const resp = await fetch('https://notion-cooks.netlify.app/.netlify/functions/api/recipe/' + slug);
    const data = await resp.json();
    
    store.commit('setRecipeContent', data);
}


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
