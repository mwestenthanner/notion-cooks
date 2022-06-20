<template>
    <div class="collection">
        <div class="image">
            <img :src="props.collection.img" alt="">
        </div>
        <div class="content">
            <h2>{{ props.collection.name }}</h2>
            <h3>{{ props.collection.desc }}</h3>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps(['collection'])

</script>

<style scoped>

.collection {
    aspect-ratio: 16 / 9;
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
    padding: 5%;
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

</style>
