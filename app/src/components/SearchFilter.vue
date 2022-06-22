<template>
    <div class="search-filter">
        <input type="text" name="search" id="search" placeholder="Suchen..." v-model="searchInput" @input="updateSearch()">
        <button class="filter-toggle" @click="toggleFilters()">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><path d="M28,9H11a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"/><path d="M7,9H4A1,1,0,0,1,4,7H7A1,1,0,0,1,7,9Z"/><path d="M21,17H4a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"/><path d="M11,25H4a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Z"/><path d="M9,11a3,3,0,1,1,3-3A3,3,0,0,1,9,11ZM9,7a1,1,0,1,0,1,1A1,1,0,0,0,9,7Z"/><path d="M23,19a3,3,0,1,1,3-3A3,3,0,0,1,23,19Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,23,15Z"/><path d="M13,27a3,3,0,1,1,3-3A3,3,0,0,1,13,27Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,13,23Z"/><path d="M28,17H25a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"/><path d="M28,25H15a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"/></g><g id="frame"><rect class="cls-1" height="32" width="32"/></g></svg>
        </button>
    </div>
    <div class="filter-box" v-if="showFilters">
        <h4>Kategorien</h4>
        <div class="container">
            <FilterItem v-for="tag in filterTags" :key="tag.slug" :tag="tag"></FilterItem>
        </div>
        <h4>Maximaler Zeitaufwand</h4>
        <div class="time-container">
            <span class="time-item" v-for="slot in timeSlots" :key="slot" :class="{ selected: timeInput == slot}" @click="updateTimeFilter(slot)">{{ slot }} Minuten</span><span class="time-item" :class="{ selected: timeInput == 0}" @click="updateTimeFilter(0)">Alle</span>
        </div>
    </div>
    
</template>

<script lang="ts" setup>
import FilterItem from '../components/FilterItem.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

let searchInput = ref('');
let timeInput = ref(0);
let showFilters = ref(false);

const filterTags = computed(() => store.getters.getTags)

const timeSlots = [15, 30, 45, 60]

function toggleFilters () {
    showFilters.value = !showFilters.value
}

function updateSearch() {
    store.commit('setSearchTerm', searchInput.value);
}

function updateTimeFilter(timeSlot: number) {
    timeInput.value = timeSlot;
    store.commit('setTimeFilter', timeSlot);
}


</script>

<style scoped>

.search-filter {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 70%;
    margin-left: 15%;
    margin-bottom: 2rem;
}

#search {
    background: rgb(237, 237, 237) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
    width: 100%;
    display: block;
    padding: 9px 4px 9px 40px;
    border: none;
    border-radius: 0.5rem;
    font-family: 'Roboto Mono', monospace;
}

.filter-toggle {
    padding: 0.5rem;
    border: none;
    background-color: var(--primary);
    border-radius: 0.5rem;
    display: flex;
    cursor: pointer;
}

.filter-toggle svg {
    fill: none;
    height: 2rem;
    width: auto;
}

.filter-toggle svg path {
    fill: white;
}

.filter-box {
    background: rgb(246, 246, 246);
    padding: 2rem;
    border-radius: 0.5rem;
    width: 65%;
    margin-left: 15%;
    margin-bottom: 2rem;
}

.filter-box h4 {
    margin-bottom: 1rem;
}

.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6rem, 8rem));;
    grid-gap: 1rem;
    margin-bottom: 1.5rem;
}

.time-item {
    color: var(--primary);
    border: 0.1rem solid var(--primary);
    padding: 0.5rem 0.7rem;
    border-radius: 0.5rem;
    width: fit-content;
    font-size: 80%;
    cursor: pointer;
}

.time-item:not(:last-child) {
    margin-right: 0.75rem;
}

.time-item::before {
    content: '⏱️';
    padding-right: 0.5rem;
}

.selected {
    color: white;
    background-color: var(--primary);
}

</style>
