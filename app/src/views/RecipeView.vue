<template>
<div class="recipe">
    <div class="left">
        <img :src="recipe.img" :alt="recipe.title">
    </div>
    <div class="right" ref="input">

        <div class="recipe-header">
            <div class="title-block">
                <h2>{{ recipe.title }}</h2>
                <h4><span v-for="tag in recipe.tags" :key="tag">{{ tag }} | </span> Zubereitungszeit: {{ formatTime(recipe.timeActive) }}<span v-if="recipe.timePassive != 0"> | {{ recipe.timePassiveMode }}: {{ formatTime(recipe.timePassive) }}</span></h4>
            </div>
            <div class="share-block" data-html2canvas-ignore="true">
                <button class="share-button" @click="toggleShareOptions()">
                    <svg v-if="!shareOptions" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64"><path d="M-264.2-339.9c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9c0 4.3-3.5 7.9-7.9 7.9zm0-12.9c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9c0-2.6-2.2-4.9-4.9-4.9zM-232.1-356c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9-3.6 7.9-7.9 7.9zm0-12.8c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9-2.2-4.9-4.9-4.9zM-232.1-323.9c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9-3.6 7.9-7.9 7.9zm0-12.8c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9-2.2-4.9-4.9-4.9z" transform="translate(280 380)" fill="#ffffff" class="fill-134563"></path><path d="m-238.6-333.2-20.6-10.3 1.4-2.9 20.7 10.3-1.5 2.9M-257.8-349.3l-1.4-2.8 20.6-10.3 1.5 2.8-20.7 10.3" transform="translate(280 380)" fill="#ffffff" class="fill-134563"></path></svg>
                    <svg class="close-button" v-if="shareOptions" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2" fill="#ffffff"><path d="M4,29a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l24-24a1,1,0,1,1,1.42,1.42l-24,24A1,1,0,0,1,4,29Z"/><path d="M28,29a1,1,0,0,1-.71-.29l-24-24A1,1,0,0,1,4.71,3.29l24,24a1,1,0,0,1,0,1.42A1,1,0,0,1,28,29Z"/></g><g id="frame"><rect fill="none" height="32" width="32"/></g></svg>
                </button>
                <div class="share-popup" v-if="shareOptions">
                    <div>
                        <button class="share-button" @click="downloadPDF()">
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g data-name="1"><path d="M255.13 385.54a15 15 0 0 1-11.14-5L103.67 224.93a15 15 0 0 1 11.14-25H171V63a15 15 0 0 1 15-15h138.3a15 15 0 0 1 15 15v136.89h56.16a15 15 0 0 1 11.14 25L266.27 380.58a15 15 0 0 1-11.14 4.96Zm-106.6-155.65 106.6 118.25 106.61-118.25H324.3a15 15 0 0 1-15-15V78H201v136.89a15 15 0 0 1-15 15Z" fill="#ffffff" class="fill-000000"></path><path d="M390.84 450H119.43a65.37 65.37 0 0 1-65.3-65.29v-38.17a15 15 0 0 1 30 0v38.17a35.34 35.34 0 0 0 35.3 35.29h271.41a35.33 35.33 0 0 0 35.29-35.29v-38.17a15 15 0 0 1 30 0v38.17A65.37 65.37 0 0 1 390.84 450Z" fill="#ffffff" class="fill-000000"></path></g></svg>
                        </button>
                        <p>PDF</p>
                    </div>
                    <div>
                        <button class="share-button" @click="printRecipe()">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.249 17.25h-3a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5h19.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-3M3.749 9.75h1.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5px" class="stroke-000000"></path><path d="M5.249 12.75h13.5v10.5h-13.5zM18.749 6.75h-13.5v-4.5a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5ZM8.249 15.75h7.5M8.249 18.75h5.25" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5px" class="stroke-000000"></path></svg>
                        </button>
                        <p>Drucken</p>
                    </div>
                    <div>
                        <a class="share-link" :href="mailRecipe()">
                        <button class="share-button" @click="downloadPDF()">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g data-name="mail email e-mail letter"><path d="M28 13a1 1 0 0 0-1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 0-2 0v8a3 3 0 0 0 .88 2.12A3 3 0 0 0 6 25h20a3 3 0 0 0 2.12-.88A3 3 0 0 0 29 22v-8a1 1 0 0 0-1-1Z" fill="#ffffff" class="fill-000000"></path><path d="M15.4 18.8a1 1 0 0 0 1.2 0l11.81-8.86a1 1 0 0 0 .3-1.23 3.06 3.06 0 0 0-.59-.83A3 3 0 0 0 26 7H6a3 3 0 0 0-2.12.88 3.06 3.06 0 0 0-.59.83 1 1 0 0 0 .3 1.23ZM6 9h20a.9.9 0 0 1 .28 0L16 16.75 5.72 9A.9.9 0 0 1 6 9Z" fill="#ffffff" class="fill-000000"></path></g></svg>
                        </button>
                        </a>
                        <p>Mail</p>
                    </div>
                </div>
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
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import html2pdf from 'html2pdf.js'

const store = useStore()

const route = useRoute()
const slug = route.params.slug

const recipe = computed(() => store.getters.getRecipeContent(slug))

let shareOptions = ref(false)

const input = ref<HTMLInputElement | null>(null)

onMounted(() => {
  input.value?.focus()
})

function toggleShareOptions() {
    shareOptions.value = !shareOptions.value
}

function formatTime(time: number) {

    if (time < 60) {
        return time + ' Minuten';
    }

    else {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        let minuteString = '';

        if (minutes == 0) {
            minuteString = ''
        } else {
            minuteString = minutes + ' Minuten';
        } 

        if (hours < 2) {
            return hours + ' Stunde ' + minuteString;
        } else return hours + ' Stunden ' + minuteString;
    }

}

function mailRecipe() {
    const subject = 'Rezept-Link - ' + recipe.value.title;
    const body = 'Hier findest du den Link zum Rezept: ' + window.location.origin + route.fullPath;

    return 'mailto:%20?body=' + encodeURIComponent(body) + '&subject=' + encodeURIComponent(subject)
}

function downloadPDF() {

    const element = input.value;
    const options = { 
        margin: 20, 
        filename: recipe.value.title + ' - Rezept.pdf', 
        image: {type: 'jpg', quality: 0.95}, 
        html2canvas: {dpi: 192, letterRendering: true}, 
        jsPDF: {format: 'a4', orientation: 'portrait'} 
    };
    html2pdf(element, options).set({
        pagebreak: { mode: 'avoid-all' }
    });

}

function printRecipe() {
    window.print()
}

</script>

<style scoped>
.recipe {
    display: grid;
    max-width: 90%;
    margin-left: 5%;
    grid-template-columns: 45% 1fr;
    color: var(--font);
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
    position: relative;
}

.share-button {
    background-color: var(--primary);
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    border: none;
}

.close-button {
    max-width: 80%;
    transform: translate(0, 0.1rem); 
}

.share-popup {
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem;
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    top: 4rem;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25); 
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
    background-color: var(--background);
}

.share-popup p {
    font-size: 80%;
    text-align: center;
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
    background-color: var(--secondary-background);
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

@media print {
    .left, .share-block {
        display: none;
    }

    .recipe {
        display: block;
        width: 100%;
        margin: 0;
        font-size: 70%;
    }  
    
    .recipe, .right, .recipe-header, .title-block, .description {
        margin: 0;
        padding: 0;
    }
}

@media (max-width: 1100px) {
    .recipe {
        max-width: 100%;
        margin-left: 0;
        margin-top: 3rem;
    }

    .share-popup {
        right: 0rem;
    }
}

@media (max-width: 760px) {
  
    .recipe {
        display: flex;
        flex-direction: column;
    }

    .right {
        margin-left: 0;
        padding-top: 3rem;
    }

    .left {
        aspect-ratio: 1/1;
        overflow: hidden;
        border-radius: 2rem;
        position: relative;
    } 

    .left > img {
        position: absolute;
        top: -9999px;
        bottom: -9999px;
        left: -9999px;
        right: -9999px;
        margin: auto;
    }

    .recipe-header {
        display: grid;
        grid-template-columns: 1fr;  
    }

}

@media (prefers-color-scheme: dark) {
    


}

</style>
