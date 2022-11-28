<template>
	<input type="text" v-model="input" placeholder="Sök efter titel eller ingrediens..." />
 </template>

<script setup>
// använd recipeStore
</script>

<style scoped>
input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin-bottom: 1rem;
  color: var(--accent);
}
</style>