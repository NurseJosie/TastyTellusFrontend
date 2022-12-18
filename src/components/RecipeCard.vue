<script setup>
import { useUserStore } from "@/stores/userStore.js";
import { useRecipeStore } from "@/stores/recipeStore.js";

const recipeStore = useRecipeStore();
const userStore = useUserStore();
recipeStore.getRecipes();

function like() {
  // TODO like recipe
}
</script>

<template>
  <section class="main-container">
    <div class="card" v-for="recipe in recipeStore.recipes" :key="recipe.id">
      <h3 class="title">{{ recipe.title }}</h3>
      <img :src="recipe.imgUrl" class="image" />
      <p class="intro">{{ recipe.intro }}</p>
      <p class="ing" v-for="ing in recipe.ingredients">{{ ing }}</p>
      <p class="inst" v-for="inst in recipe.instructions">{{ inst }}</p>
      <br />
      <a :href="recipe.link" class="link" target="_blank"
        >Originalrecept från ICA</a
      >

      <p class="likes">Antal likes: 0</p>
      <button class="like-btn" @click="like" v-if="userStore.signedIn">
        LIKE
      </button>
    </div>
  </section>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 2rem;
}
.card {
  margin-top: 2rem;
  margin: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.title {
  font-weight: bold;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
}
.image {
  width: 300px;
  height: 300px;
  margin-left: 140px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.intro {
  margin: 1rem;
  margin-top: 0.5rem;
}

.ing {
  margin-left: 1rem;
  font-weight: bold;
}
.inst {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
}

.link {
  text-decoration: none;
  margin-left: 1rem;
  color: #000000;
}

.link:hover {
  font-weight: bold;
}

.likes {
  font-weight: bold;
  margin-left: 1rem;
  margin-bottom: 1rem;
}

.like-btn {
  margin: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.like-btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
