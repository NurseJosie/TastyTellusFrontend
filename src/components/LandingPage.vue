<script setup>
import RecipeCard from "./RecipeCard.vue/";
import Searchbar from "./Searchbar.vue";
import SortByDropdown from "./SortByDropdown.vue";
</script>

<template>
  <div class="main-container">
    <div class="container-search">
      <Searchbar />
      <SortByDropdown />
    </div>
    <RecipeCard />
  </div>
</template>

<style scoped>
.container-search {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
