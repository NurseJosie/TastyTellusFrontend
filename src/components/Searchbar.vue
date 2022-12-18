<template>
  <div class="search-input">
    <input
      type="text"
      v-model="input"
      placeholder="Sök på Titel eller Ingrediens..."
      class="search-bar"
    />
    <button @click="search()" class="search-btn">Sök</button>
  </div>
</template>

<script setup>
import { useRecipeStore } from "@/stores/recipeStore.js";
import { ref } from "vue";

let input = ref("");
const recipeStore = useRecipeStore();

function search() {
  recipeStore.searchRecipe(input.value);
}
</script>

<style scoped>
.search-input {
  width: 450px;
  margin: 20px auto;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-btn {
  margin-left: 2rem;
  margin-bottom: 1rem;
}

.search-btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
