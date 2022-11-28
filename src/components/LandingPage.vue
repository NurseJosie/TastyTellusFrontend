<script setup>
import RecipeCard from "./RecipeCard.vue/"
import {useUserStore} from '@/stores/userStore.js';
import Searchbar from "./Searchbar.vue";
import SortByDropdown from "./SortByDropdown.vue";
const userStore = useUserStore();
</script>

<template>
  <div class="main-container">
  <!--SEARCHBAR-->
  <Searchbar/>
 <SortByDropdown/>
  <!--ska fyllas med data från databas. Mappa ut alla olika receptkort... v-for... TEMPLATE eller?-->
  <RecipeCard>
    <template #recipe-title>Recept Titel</template>
    <template #recipe-img>Bild...</template>
    <template #recipe-intro>Recept Intro</template>
    <template #recipe-instr>Recept Instruktioner inkl. antal portioner, ingredienslista och steg för steg.</template>
    <template #recipe-link>Recept länk för copyright</template>
  </RecipeCard>
  </div>

</template>

<style scoped>
.main-container{
}
</style>

