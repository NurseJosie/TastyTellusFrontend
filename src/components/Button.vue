<template>
	<button class="btn">{{btntxt}}</button>
</template>

<script setup>
// import {useUserStore} from '@/stores/userStore.js';
// const userStore = useUserStore();

const props = defineProps({
	btntxt: {
		type: String,
		default: "Ingen text angiven"
	}
})
</script>

<style scoped>
.btn {
display:inline-block;
padding:0.3em 1.2em;
margin:0 0.3em 0.3em 0;
border-radius:2em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color: var(--text);
background-color: var(--accent);
text-align:center;
transition: all 0.2s;
border-color: var(--background);
}
.btn:hover{
background-color: var(--background);
}
</style>



