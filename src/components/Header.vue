<!--header med logga-->

<!--komponenter:-->
<!--navbar-->
<!--innehåller buttons för skapa inlogg och logga in / logga ut-button -->

<template>
	<header>
		<h1>Tasty Tellus</h1>
		<h2>Mat med omtanke för planeten!</h2>
		<div v-if="userStore.loggedIn">
			<button @click="userStore.showProfile()">Profil</button>
			<button @click="userStore.logOut()">Logga ut</button>
		</div>
		<div v-else>
			<button @click="userStore.createUser()">Skapa konto</button>
			<button @click="userStore.logIn()">Logga in</button>
		</div>
	</header>
</template>

<script setup>
import {useUserStore} from '@/stores/userActions';
import Button from "./Button.vue";
const userStore = useUserStore();
// export default {
// 	name: 'Header',
// 	components: {
// 		Button
// 	}
// }
</script>
<!--är detta pinia???-->

<style scoped>
header { 
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
}
Button {
	margin: 5px;
}
</style>