<template>
<nav>
    <ul>
        <li><router-link to="/recipes">Alle Rezepte</router-link></li>
        <li><router-link to="/">Kategorien</router-link></li>
        <li><router-link to="/collections">Sammlungen</router-link></li>
    </ul>
</nav>
</template>

<script lang="ts" setup>

</script>

<style scoped>

ul li {
    list-style-type: none;
    display: inline-block;
}

ul li:not(:last-child) {
    margin-right: 2rem;
}

</style>
