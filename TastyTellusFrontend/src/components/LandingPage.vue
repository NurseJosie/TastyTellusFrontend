<script setup>
import RecipeCard from "./RecipeCard.vue/"
</script>

<template>
  <!--SEARCHBAR-->
<!--ska fyllas med data från databas. Mappa ut alla olika receptkort...-->
  <RecipeCard>
    <template #recipe-title>Recept Titel</template>
    <template #recipe-img>Bild...</template>
    <template #recipe-intro>Recept Intro</template>
    <template #recipe-instr>Recept Instruktioner inkl. antal portioner, ingredienslista och steg för steg.</template>
    <template #recipe-link>Recept länk för copyright</template>
  </RecipeCard>

</template>
