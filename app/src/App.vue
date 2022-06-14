<template>
  <div class="header">
    <div class="title">Meine Rezepte</div>
  </div>
  <main>
    <RecipePanel></RecipePanel>
  </main>
  <div class="footer">
    <div class="credits">© Marianne Westenthanner 2022</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RecipePanel from './components/RecipePanel.vue'

export default defineComponent({
  name: 'App',
  components: {
    RecipePanel
  },
  setup() {

    console.log('App started')

  }
});
</script>

<style>

</style>
