<template>
  <section class="sort-dropdown">
    <div>Sortera på: {{ selected }}</div>
    <select v-model="selected">
      <option disabled value="">Sortera på:</option>
      <option>Flest "Likes"</option>
      <option>Inget</option>
    </select>
  </section>
</template>

<script setup>
import { useRecipeStore } from "@/stores/recipeStore.js";
const recipeStore = useRecipeStore();
</script>

<style scoped>
.sort-dropdown {
  display: block;
  width: 200px;
  margin: 10px auto;
  padding: 10px 45px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin-left: 1rem;
}
</style>
