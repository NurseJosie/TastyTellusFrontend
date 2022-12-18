import { defineStore } from "pinia";
import config from "../config.js";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
    signedIn: false,
  }),
  actions: {
    createUser(username, email, password) {
      let item = { username: username, password: password, email: email }; 
      let action = "/api/Users";
      console.log(JSON.stringify(item));
      fetch(
        config.apiSettings.address + ":" + config.apiSettings.port + action,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(item),
        }
      ).then(async (response) => {
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
          this.user = await response.json();
        }
      });
    },
    logInUser(username, password) {
      let item = { username: username, password: password, email: "" };
      let action = "/api/Users/LogIn";
      console.log(JSON.stringify(item));
      fetch(
        config.apiSettings.address + ":" + config.apiSettings.port + action,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(item),
        }
      ).then(async (response) => {
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
          this.signedIn = true;
          this.user = await response.json(); 
        }
      });
    },
    updateUserProfile(username, email, password, id) {
      let item = { username: username, password: password, email: email, id: id };
      let action = "/api/Users";
      console.log(JSON.stringify(item));
      fetch(
        config.apiSettings.address + ":" + config.apiSettings.port + action,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(item),
        }
      ).then(async (response) => {
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
          this.user = await response.json();
        }
      });
    },
  },
  getters: {
  },
});
