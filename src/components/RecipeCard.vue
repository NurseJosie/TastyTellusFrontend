<template>
<!--hämta data från getter i recipeStore.-->
	<div class="card">
	  <div class="recipe-container">
		<h2>
			<slot name="recipe-title"></slot>
		</h2>
		<p>
			<slot name="recipe-img"></slot> <!--img-->
		</p>
		<h3>
			<slot name="recipe-intro"></slot>
		</h3>
		<p>
			<slot name="recipe-instr"></slot>
		</p>
		<p>
			<slot name="recipe-link"></slot> <!--a-->
		</p>
	  </div>
	</div>
  </template>
  
  <style scoped>
  .card {
	margin-top: 2rem;
	display: flex;
  }
  
  .recipe-container {
	flex: 1;
	margin-left: 1rem;
  }
  
  /* i {
	display: flex;
	place-items: center;
	place-content: center;
	width: 32px;
	height: 32px;
	color: var(--text);
  }
   */
  h3 {
	font-size: 1.2rem;
	font-weight: 500;
	margin-bottom: 0.4rem;
	color: var(--text);
  }
  
  @media (min-width: 1024px) {
	.card {
	  margin-top: 0;
	  padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
	}
  
	/* i {
	  top: calc(50% - 25px);
	  left: -26px;
	  position: absolute;
	  border: 1px solid var(--border);
	  background: var(--vt-background);
	  border-radius: 8px;
	  width: 50px;
	  height: 50px;
	} */
  
	.card:before {
	  content: " ";
	  border-left: 1px solid var(--border);
	  position: absolute;
	  left: 0;
	  bottom: calc(50% + 25px);
	  height: calc(50% - 25px);
	}
  
	.card:after {
	  content: " ";
	  border-left: 1px solid var(--border);
	  position: absolute;
	  left: 0;
	  top: calc(50% + 25px);
	  height: calc(50% - 25px);
	}
  
	.card:first-of-type:before {
	  display: none;
	}
  
	.card:last-of-type:after {
	  display: none;
	}
  }
  </style>
  