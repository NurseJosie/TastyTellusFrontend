import { defineStore } from "pinia";

export const useRecipeStore = defineStore({
	id: 'recipe', 
	state: () => ({
		//ska fyllas med data från DB
		id: "123",
		title: "Kyckling med ris",
	}),
	// actions ÄNDRAR info -> metoder
	actions: {
		// logIn(){
		// 	//visa formulär för inlogg
		// 	//btn "logga in"
		// 	//this.loggedIn = true;
		// 	return console.log("inloggad");
		// }, 
	},
	// getters VISAR info
	getters: {
		
	}
})