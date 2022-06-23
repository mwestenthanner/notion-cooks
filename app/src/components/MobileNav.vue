<template>
<nav class="mobile">
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/recipes">Alle Rezepte</router-link></li>
        <li class="dropdown" @click="showSecondary = !showSecondary"><router-link to="/">Kategorien</router-link>
        </li>
        <li><router-link to="/collections">Sammlungen</router-link></li>
    </ul>
    <ul class="dropdown-secondary" v-if="showSecondary">
      <li v-for="tag in tags" :key="tag.slug"><router-link :to="'/tag/' + tag.slug">{{ tag.name }}</router-link></li>
    </ul>
</nav>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const tags = computed(() => store.getters.getTags)
const showSecondary = ref(false);

</script>

<style scoped>

nav {
    font-size: 90%;
    margin-top: 2.5rem;
}

ul li {
    list-style-type: none;
    display: inline-block;
    border: 0.1rem solid var(--primary);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
}

ul li a {
    color: var(--primary);
}

ul li:not(:last-child) {
    margin-right: 1rem;
}

/* --- Nav Dropdown --- */

.dropdown {
  padding-right: 3em;
  position: relative;
}

.dropdown::after {
  content: '';
  position: absolute;
  height: 0.75em;
  width: 1.5em;
  top: 0.9em;
  right: 0.7em;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgODAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyI+PHBhdGggZD0iTTMuNzg5LDMuNzM5bDM2LjIxMSwzNi4yNjFsMzYuMjExLC0zNi4xNzdsLTMuNzA0LC0zLjc3MmwtMzIuNDM3LDMyLjQ3MmwtMzIuNTA3LC0zMi40ODdsLTMuNzc0LDMuNzAzWiIgc3R5bGU9ImZpbGw6I2ZmYzM2MjsiLz48L3N2Zz4=);
  background-repeat: no-repeat;
  background-size: cover;
}

.dropdown-secondary {
  margin-top: 1rem;
}

.dropdown-secondary li {
  margin-bottom: 0.5rem;
  font-size: 90%;
}

.dropdown-secondary li:not(:last-child) {
    margin-right: 0.5rem;
}


</style>
