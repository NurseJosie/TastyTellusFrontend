import { defineStore } from "pinia";
import config from '../config.js';

export const useRecipeStore = defineStore('user', {
	state: () => ({
		user: {}
	}), 
	actions: {
		createUser() {	
			const action = "/api/Users";
			const api = config.apiSettings.address + ":" + config.apiSettings.port + action;
	  
			fetch(api) // POST
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
		  getUserById() {	
			const action = "/api/Users";
			const api = config.apiSettings.address + ":" + config.apiSettings.port + action;
	  
			fetch(api) // GET BY ID
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
		  logInUser() {	
			const action = "/api/Users";
			const api = config.apiSettings.address + ":" + config.apiSettings.port + action;
	  
			fetch(api) // PUT
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
		  updateUserProfile() {	
			const action = "/api/Users";
			const api = config.apiSettings.address + ":" + config.apiSettings.port + action;
	  
			fetch(api) // PUT
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
             // VISA PROFIL-INFO MED LISTA PÅ LIKADE RECEPT
	}
})