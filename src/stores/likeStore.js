import { defineStore } from "pinia";
import config from '../config.js';

export const useLikeStore = defineStore('like', {
	state: () => ({
		likes: [] 
	}), 
	actions: {
// uppdatera likes endpoint

// TODO backend- skapa like model med crud create, update, delete (lista i getter via frontend?) LIKE MED BOOL

	},
	// getters VISAR info, returnera en function(?)   LISTA VALD INFO HÄR/ MAPPA?
	getters: {
// sortera på mest Likes ? recipeStore?
// lista likade recept i profil
	}
})



// KOMMER EJ BEHÖVAS!