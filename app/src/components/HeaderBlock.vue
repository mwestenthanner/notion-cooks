<template>
  <header>
    <MainTitle></MainTitle>
    <NavList v-if="!mobile"></NavList>
    <button class="nav-button" @click="showNav = !showNav" v-if="mobile">
        <svg class="mobile-icon" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g><rect x="0" y="7.443" width="100" height="10.891"/><rect x="0" y="43.115" width="50" height="12.422"/><rect x="0" y="80.452" width="79.053" height="12.105" /></g></svg>
    </button>
    <MobileNav v-if="mobile && showNav"></MobileNav>
  </header>
</template>

<script lang="ts" setup>
import MainTitle from './MainTitle.vue';
import NavList from './NavList.vue';
import MobileNav from './MobileNav.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const mobile = ref(false)
const showNav = ref(false)

onMounted(() => {
  setMediaQuery()
  window.addEventListener('resize', setMediaQuery);
})

onUnmounted(() => {
  window.removeEventListener('resize', setMediaQuery);
})

function setMediaQuery() {

  if (window.matchMedia("(max-width: 1100px)").matches) { // If media query matches
    mobile.value = true;
  } else {
    mobile.value = false;
}

}

</script>

<style scoped>

header {
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    margin-bottom: 4rem;
    align-items: center; 
}

.mobile-icon {
    width: 1.5rem;
    height: auto;
}

.nav-button {
    background-color: transparent;
    border: none;
    align-self: end;
    justify-self: end;
    padding-right: 2rem;
}

@media (max-width: 1100px) {
  header {
    display: grid;
    grid-template-areas: 
        "title  button"
        "nav    nav";
    margin-bottom: 1.5rem;
    grid-template-columns: 50% 1fr;
  }

  header > h1 {
    grid-area: title;
  }

  header > button {
    grid-area: button;
  }

  header > nav {
    grid-area: nav;
  }

  h1 {
    max-width: 75%;
  }
}

</style>
