<template>
	<button>{{btntxt}}</button>
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
Button {
	margin: 5px;
}
</style>

<!--är detta pinia???-->

