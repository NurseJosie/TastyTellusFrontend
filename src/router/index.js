import { createRouter, createWebHistory } from "vue-router";
import About from "../components/About.vue";
import CreateUser from "../components/CreateUser.vue"
import UserProfile from "../components/UserProfile.vue"
import LoginUser from "../components/LoginUser.vue"
import LandingPage from "../components/LandingPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: LandingPage,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/profile",
      name: "profile",
      component: UserProfile,
    },
    {
      path: "/createuser",
      name: "createuser",
      component: CreateUser,
    },
    {
      path: "/login",
      name: "login",
      component: LoginUser,
    },
  ],
});

export default router;
