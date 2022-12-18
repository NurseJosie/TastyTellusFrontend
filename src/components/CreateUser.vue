<template>
  <form>
    <h2>Skapa användare</h2>
    <label>Email :</label>
    <input type="email" v-model="emailinput" required />

    <label>Användarnamn :</label>
    <input type="text" v-model="nameinput" required />

    <label>Lösenord :</label>
    <input type="text" v-model="passwordinput" required />

    <div class="button">
      <button class="submit" type="submit" @click.prevent="create">
        Skapa ny användare
      </button>
    </div>
  </form>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore.js";
import { ref } from "vue";
import router from "@/router";

let nameinput = ref("");
let emailinput = ref("");
let passwordinput = ref("");
const userStore = useUserStore();

async function create() {
  await userStore.createUser(
    nameinput.value,
    emailinput.value,
    passwordinput.value
  );
  router.push({ path: "/home" });
}
</script>

<style>
form {
  max-width: 600px;
  margin: 30px auto;
  background: rgb(194, 192, 192);
  text-align: left;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

label {
  color: rgb(0, 0, 0);
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

button {
  background: rgb(7, 24, 7);
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 20px;
  margin-top: 1rem;
}
button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
