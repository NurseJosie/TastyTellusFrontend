<script setup>
import {useRecipeStore} from '@/stores/recipeStore.js';
const recipeStore = useRecipeStore();
</script>

<template>
<section class="main-container">
      <div class="card">
	  <div class="recipe-container">
		<button @click="recipeStore.showRecipePopup()">Visa mer</button> <!--onclick kalla på metod som visar popup-->
		<h2>
			<slot name="recipe-title"></slot>
		</h2>
		<p>
			<slot name="recipe-img"></slot> 
		</p>
		<h3>
			<slot name="recipe-intro"></slot>
		</h3>
		<p>
			<slot name="recipe-instr"></slot>
		</p>
		<p>
			<slot name="recipe-link"></slot> 
			</p>
	  </div>
	</div>

</section>
  </template>
  
  <style scoped>

  .main-container {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
  }
   .card {
	margin-top: 2rem;
	margin: 1rem;;
	border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  
  .recipe-container {

  }
  h3 {
	font-size: 1.2rem;
	font-weight: 500;
	margin-bottom: 0.4rem;
	color: var(--text);
  } 
  </style>
  