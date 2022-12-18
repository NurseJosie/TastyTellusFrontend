<script setup>
import { useUserStore } from "@/stores/userStore.js";
import { ref } from "vue";

let nameinput = ref("");
let emailinput = ref("");
let passwordinput = ref("");
let passwordinputConfirm = ref("");
const userStore = useUserStore();

function updateUser() {
  if (passwordinputConfirm.value == userStore.user.password) {
    userStore.updateUserProfile(
      nameinput.value,
      emailinput.value,
      passwordinput.value,
      userStore.user.id
    );
  } else {
    console.error("Lösenordet stämmer inte");
  }
}
</script>

<template>
  <div class="user-info">
    <h2 class="name">{{ userStore.user.username }}s profil</h2>
    <h3 class="email">Email: {{ userStore.user.email }}</h3>
    <h3 class="update-title">Uppdatera dina uppgifter här:</h3>
  </div>
  <div class="editForm">
    <form>
      <label>Email :</label>
      <input type="email" v-model="emailinput" required />

      <label>Användarnamn :</label>
      <input type="text" v-model="nameinput" required />

      <label>Lösenord :</label>
      <input type="password" v-model="passwordinput" required />

      <label>Bekräfta med ditt gamla lösenord :</label>
      <input type="password" v-model="passwordinputConfirm" required />

      <div class="button">
        <button class="submit" type="submit" @click.prevent="updateUser">
          Uppdatera
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.name {
  font-weight: bold;
  font-size: 40px;
}

.email {
  font-weight: bold;
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

form {
  max-width: 300px;
  max-height: 500px;
  margin-top: 0.5rem;
}
label {
  margin: 0.5rem;
}

.update-title {
  margin-top: 1rem;
}

button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
