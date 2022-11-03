<template>
	<div>
		<h1>Om Tasy Tellus</h1>
		<h2>Ett examensarbete av Josefin Persson</h2>
		<h2>.Net-utveckling Campus Mölndal</h2>
		<Button btntext="Åter till startsidan" @click="handleClickToLP"></Button> 
	</div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Button from "./Button.vue";

const handleClickToLP = () => {
//skicka till LP
}

</script>


<style scoped>

</style>