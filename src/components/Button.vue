<template>
	<button @click="onClick()">{{text}}</button>
</template>

<script>
import {useUserStore} from '@/stores/userActions';
const userStore = useUserStore();
// export default {
// 	name: 'Button',
// 	props: {
// 		text: String
// 	},
// 	methods: {
// 		onClick() {
// 			console.log("Klick fungerar");
// 		}
// 	}
// }
</script>

<style scoped>
Button {
	margin: 5px;
}
</style>

<!--är detta pinia???-->

