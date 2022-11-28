import { defineStore } from "pinia";
import config from '../config.js';

export const useRecipeStore = defineStore('recipe', {
	state: () => ({
		recipes: [] 
	}), 
	actions: {
		getRecipes() {	
			const action = "/api/Recipes";
			const api = config.apiSettings.address + ":" + config.apiSettings.port + action;
	  
			fetch(api)
			  .then(async (res) => {
				const data = await res.json();
				console.log(data);
				const recipesData = data.map(x => {
					return {
						id: x.id,
						title: x.title,
						imgUrl: x.imageURL,
						intro: x.intro,
						ingredients: x.ingredients,
						instructions: x.instructions,
						link: x.sourceURL
					}
				}); 
				console.log(recipesData);
				

				this.recipes = recipesData;
			  })

			  .catch((error) => console.log(error));

		  },
		  likeRecipe() {	
			const action = "/api/Likes";
			const api = config.apiSettings.address + ":" + config.apiSettings.port + action;
	  
			fetch(api)
			  .then(async (res) => {
				const data = await res.json();
				console.log(data);
				const recipesData = data.map(x => {
					return {
						id: x.id,
						title: x.title,
						imgUrl: x.imageURL,
						intro: x.intro,
						ingredients: x.ingredients,
						instructions: x.instructions,
						link: x.sourceURL
					}
				}); 
				console.log(recipesData);
				

				this.recipes = recipesData;
			  })

			  .catch((error) => console.log(error));

		  },
		  deleteLike() {	
			const action = "/api/Likes";
			const api = config.apiSettings.address + ":" + config.apiSettings.port + action;
	  
			fetch(api)
			  .then(async (res) => {
				const data = await res.json();
				console.log(data);
				const recipesData = data.map(x => {
					return {
						id: x.id,
						title: x.title,
						imgUrl: x.imageURL,
						intro: x.intro,
						ingredients: x.ingredients,
						instructions: x.instructions,
						link: x.sourceURL
					}
				}); 
				console.log(recipesData);
				

				this.recipes = recipesData;
			  })

			  .catch((error) => console.log(error));

		  },
	},
	getters: {
         // Get number of likes 

		 // Get recipes sorted by likes
	}
})