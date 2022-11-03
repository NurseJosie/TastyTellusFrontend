// använder pinia för state management- user actions
import { defineStore } from "pinia";

export const useUserStore = defineStore({
	id: 'user', 
	state: () => ({
		//ska fyllas med data från DB
		id: "123",
		loggedIn: false,
		username: "Användarnamn", 
		email: "hej@mail.com",
		likedRecipes: ["recept 1", "recept 2"],
		comments: ["kommentar 1", "kommentar 2"]
	}),
	// actions ÄNDRAR info -> metoder
	actions: {
		logIn(){
			//visa formulär för inlogg
			//btn "logga in"
			//this.loggedIn = true;
			return console.log("inloggad");
		}, 
		logOut(){
			//this.loggedIn = false;
			return console.log("utloggad");
		},
		createUser(){
			//visa formulär med input mail, username, password
			//btn "Skapa"
			//skapa user och lägg till i DB...
			return console.log("Skapa användare...");
		},
		// showProfile(){
		// 	// skicka till profile
		// 	return console.log("Skicka till profil...");
		// }
	},
	// getters VISAR info
	getters: {
		
	}
})