<script setup>
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/userStore.js";
import router from "@/router";
const userStore = useUserStore();

function logOut() {
  userStore.signedIn = false;
  router.push({ path: "/home" });
}
</script>

<template>
  <header class="header-container">
    <img
      src="https://t3.ftcdn.net/jpg/03/77/38/02/360_F_377380244_Z7AOXqVIDzLb4XJQ7RXfGnEJrcwhcBp1.jpg"
      class="header-img"
    />
    <div class="text">
      <h1>Tasty Tellus</h1>
    </div>
    <nav class="nav">
      <ul v-if="userStore.signedIn" class="nav-btns">
        <li><RouterLink to="/home" class="link">Startsida</RouterLink></li>
        <li>
          <RouterLink to="/about" class="link">Om Tasty Tellus</RouterLink>
        </li>
        <li><RouterLink to="/profile" class="link">Profil</RouterLink></li>
        <li><button @click="logOut">Logga ut</button></li>
      </ul>

      <ul v-else class="nav-btns">
        <li><RouterLink to="/home" class="link">Startsida</RouterLink></li>
        <li>
          <RouterLink to="/about" class="link">Om Tasty Tellus</RouterLink>
        </li>
        <li>
          <RouterLink to="/createuser" class="link">Skapa användare</RouterLink>
        </li>
        <li><RouterLink to="/login" class="link">Logga in</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header-container {
  position: relative;
  text-align: center;
  color: white;
}

.text {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  text-shadow: 5px 5px 5px black;
}

.header-img {
  width: 100%;
  height: 35vh;
  opacity: 0.8;
}

nav {
  max-width: 700px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-image: linear-gradient(to top, #5b9b7b -20%, #bef1f8 100%);
  transform: perspective(1000px) rotateX(-0deg) rotateY(0deg) rotateZ(0deg);
  transition: all 1.5s ease-out;
}

nav:hover {
  transform: perspective(1000px) rotateX(355deg) rotateY(0deg) rotateZ(0deg);
}

ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;
  height: 100%;
  list-style: none;
}

.link {
  color: #fff;
  font-size: 20px;
  transition: all 0.1s linear;
  text-decoration: none;
  font-weight: bold;
}

.link:hover {
  text-shadow: 5px 5px 5px black;
}

button {
  background-color: #5b9b7b;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 1rem;
}

button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
