import { defineStore } from "pinia";
import Popup from "./Popup.vue";

export const useRecipeStore = defineStore({
	id: 'recipe', 
	state: () => ({
		//ska fyllas med data från DB
		id: "123",
		title: "Kyckling med ris",
		imgUrl: "https://static.mathem.se/shared/images/recipes/doublelarge/kycklinggryta-med-curry-foto-nurlan-mathem.jpeg",
		intro: "Introtext om hur gott det är med kyckling och ris.",
		body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdamrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maximedoloremque. Quaerat provident commodi consectetur veniam similique. ",
		link: "https://github.com/"
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
		//metod för att visa receptpopup, lägg in id, title osv i popup
		showRecipePopup(state){
			console.log("popup-knapp");
			return <Popup headertxt={state.title} img={state.imgUrl} introtxt={state.intro} bodytxt={state.body} linktext={state.link}></Popup>
		}
	}
})