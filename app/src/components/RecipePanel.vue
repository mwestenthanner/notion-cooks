<template>
<router-link class="link" :to="'/recipe/' + props.recipe.slug">
<div class="panel">
    <div class="image">
        <img :src="props.recipe.img" :alt="props.recipe.title" />
    </div>
    <div class="content">
        <div class="time">
            <span>{{ formatTime(props.recipe.time) }}</span>
        </div>
        <div class="title">
            <h3>{{ props.recipe.title }}</h3>
            <div class="tags">
                <span class="tag" v-for="tag in props.recipe.tags" :key="tag"><router-link :to="createSlug(tag)">{{ tag }}</router-link></span>
            </div>
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

function formatTime(time: number) {

    if (time < 60) {
        return time + 'm';
    }

    else {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;

        if (minutes == 0) {
            return hours + 'h';
        } else {
            return hours + 'h' + minutes + 'm';
        } 
    }

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
    justify-content: space-between;
    margin-left: 1.5rem;
}

.time {
    margin-top: 3rem;
    font-size: 80%;
    font-weight: 600;
    color: white;
    text-align: right;
    visibility: hidden;
}

.panel:hover .time {
    visibility: visible;
}

.time::before {
    background-image: url('../../public/img/filters/Timer.svg');
    background-size: 1.5rem 1.5rem;
    display: inline-block;
    width: 1.5rem; 
    height:  1.5rem; 
    content:"";
    filter: invert(1);
    transform: translate(-0.3rem, 0.4rem);
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
