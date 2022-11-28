<!--header med logga-->

<!--komponenter:-->
<!--navbar-->
<!--innehåller buttons för skapa inlogg och logga in / logga ut-button -->

<template>
	<div class="header-container">
		<header>
		<div class="title-container">
			<h1>Tasty Tellus</h1>
		<h2>Mat med omtanke för planeten!</h2>
		</div>
		
		<div class="nav-container" >
			<div class="nav"><NavBar/></div>
		
		<div v-if="userStore.loggedIn" class="header-btn">
			<RouterLink to="/profile">Profil</RouterLink>
			<Button @click="userStore.logOut()" btntext="Logga ut"></Button>
			<RouterView />
		</div>

		<div v-else class="header-btn">
			<Button @click="userStore.createUser()" btntxt="Skapa användare"></Button>
			<Button @click="userStore.logIn()" btntxt="Logga in"></Button>
		</div>
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
	color: var(--accent);
	top: 0;
	width: 100%;
	text-align: center;
}
.title-container {
	top: 1rem;
	font-size: 120%;
}
.nav-container {
	display: flex;	
	align-items: center;
	justify-content: center;
}
.header-btn{
	margin-left: 70rem;
}
</style>