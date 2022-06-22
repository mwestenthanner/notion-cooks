<template>
    <div class="filter" @click="toggleSelectFilter()" :class="{ selected: isSelected}">
        <img :src="props.tag.img" :alt="props.tag.name">
        <p>{{ props.tag.name }}</p>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';import { useStore } from 'vuex';

const store = useStore()

const props = defineProps(['tag']);
const isSelected = ref(false);

function toggleSelectFilter() {

    if (!isSelected.value) {

        console.log('toggle!');
        store.commit('addTagFilter', [props.tag.name]);

        isSelected.value = true;

    } else {

        console.log('toggle!');
        store.commit('removeTagFilter', [props.tag.name]);

        isSelected.value = false;

    }


}

</script>

<style scoped>

.filter {
    border-radius: 1rem;
    border: 0.1rem solid var(--primary);
    color: var(--primary);
    display: flex;
    flex-direction: column;
    aspect-ratio: 1 / 1;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
}

.filter p {
    font-size: 80%;
    text-align: center;
}

.filter img {
    max-width: auto;
    max-height: 3rem;
    filter: invert(100%) sepia(77%) saturate(6820%) hue-rotate(310deg) brightness(101%) contrast(101%);
}

.selected {
    border: 0.1rem solid var(--primary);
    background-color: var(--primary);
    color: white;
}

.selected img {
    filter: invert(1);
}

</style>
