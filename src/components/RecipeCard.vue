<!-- https://v2.vuejs.org/v2/guide/list.html#v-for-with-an-Object MAPPA UT OBJEKT FRÅN ARRAY-->

<script setup>
import {useRecipeStore} from '@/stores/recipeStore.js';
import Button from "./Button.vue";
const recipeStore = useRecipeStore();

const toggleLikeBtn = () => {
	// kalla på likemetod från state
	console.log("jag körs")
}

recipeStore.getRecipes();

</script>

<template>
<section class="main-container">
      <div class="card recipe-container" v-for="recipe in recipeStore.recipes" :key="recipe.id">
		<h3 class="title">{{recipe.title}}</h3>
		<img :src="recipe.imgUrl" class="image"/>
		<p class="intro">{{recipe.intro}}</p>
		<p class="ing" v-for="ing in recipe.ingredients">{{ing}}</p>
		<p class="inst" v-for="inst in recipe.instructions">{{inst}}</p>
		<a :href="recipe.link" class="link" target="_blank">Originalrecept från ICA</a>
		<Button btntxt="Testknapp"></Button>
			<!-- <Button btntxt="Tillagt till din lista" v-if="likeStore.liked"></Button>
			<Button @click="toggleLikeBtn" btntxt="GILLA" v-if="!likeStore.liked"></Button> -->

			<!--knappen länkar till profil med lista-->
		<p>Antal likes: </p>

	</div>

</section>
  </template>
  
  <style scoped>
.title {
	font-weight: bold;
	margin: 0.5rem;
	color: var(--text-darker);
}
.image{
	width: 200px;
	height: 200px;
	margin-left: 60px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.intro{
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

.link{
	text-decoration: none;
	border-radius: 10%;
}
.link:hover{
background-color: var(--background);
}

Button{

}


  .main-container {
	display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: space-around;

	/* display: grid;
	grid-template-columns: 1fr 1fr 1fr; */
	color: var(--accent);
	margin: 3rem;
	
  }
   .card {
	margin-top: 2rem;
	margin: 1rem;;
	border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	width: 30rem;
	color: var(--text);
  }
  </style>
  