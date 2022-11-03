<!--header med logga-->

<!--komponenter:-->
<!--navbar-->
<!--innehåller buttons för skapa inlogg och logga in / logga ut-button -->

<template>
	<div class="header-container">
		<header>
		<h1>Tasty Tellus</h1>
		<h2>Mat med omtanke för planeten!</h2>
		<div class="nav"><NavBar/></div>
		
		<div v-if="userStore.loggedIn" class="header-btn">
			<RouterLink to="/profile">Profil</RouterLink>
			<Button @click="userStore.logOut()" btntext="Logga ut"></Button>
			<RouterView />
		</div>

		<div v-else class="header-btn">
			<Button @click="userStore.createUser()" btntext="Skapa användare"></Button>
			<Button @click="userStore.logIn()" btntext="Logga in"></Button>
		</div>
	</header>
	</div>
	
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import {useUserStore} from '@/stores/userStore.js';
import Button from "./Button.vue";
import NavBar from "./NavBar.vue";
const userStore = useUserStore();
</script>
<!--är detta pinia???-->

<style scoped>
.header-container {
	background-color: var(--header-footer);
	color: var(--text);
	top: 0;
	position: fixed;
	width: 100%;
	text-align: center;
}
header { 
	 
}
h1 {

}
.header-btn {
display: flex;
justify-content: flex-end;
}
Button {
	margin: 5px;
}
.nav {
	display: flex;
	justify-content: flex-start;
}
</style>