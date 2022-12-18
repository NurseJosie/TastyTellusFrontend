<template>
  <form>
    <h2>LOGGA IN</h2>
    <label>Användarnamn :</label>
    <input type="username" v-model="nameinput" required />

    <label>Lösenord :</label>
    <input type="password" v-model="passwordinput" required />

    <div class="button">
      <button class="submit" type="submit" @click.prevent="logIn">
        Logga in
      </button>
    </div>
  </form>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore.js";
import { ref } from "vue";
import router from "@/router";

let nameinput = ref("");
let passwordinput = ref("");
const userStore = useUserStore();

async function logIn() {
  await userStore.logInUser(nameinput.value, passwordinput.value);
  router.push({ path: "/home" });
}
</script>
