<template>
<div class="categories">
    <span v-for="category in categories" :key="category">{{ category }}</span>
</div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

const store = useStore()

const categories = computed(() => store.getters.getCategories)

</script>

<style scoped>


</style>
