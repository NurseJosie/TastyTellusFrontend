<!--header med logga-->

<!--komponenter:-->
<!--navbar-->
<!--innehåller buttons för skapa inlogg och logga in / logga ut-button -->

<template>
	<header>
		<h1>Tasty Tellus</h1>
		<br/>
		<h2>Mat med omtanke för planeten!</h2>
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
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import {useUserStore} from '@/stores/userStore.js';
import Button from "./Button.vue";
const userStore = useUserStore();
</script>
<!--är detta pinia???-->

<style scoped>
header { 
display: flex;
justify-content: center;
	width: 100%;
        position: fixed;  
		top: 0;
		left: 0;
	background-color: rgb(133, 165, 133);
}
h2 {
	
}
.header-btn {

}
Button {
	margin: 5px;
}
</style>