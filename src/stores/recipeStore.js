import { defineStore } from "pinia";
import config from "../config.js";

export const useRecipeStore = defineStore("recipe", {
  state: () => ({
    recipes: [],
  }),
  actions: {
    getRecipes() {
      const action = "/api/Recipes";
      const api =
        config.apiSettings.address + ":" + config.apiSettings.port + action;

      fetch(api)
        .then(async (res) => {
          const data = await res.json();
          console.log(data);
          const recipesData = data.map((x) => {
            return {
              id: x.id,
              title: x.title,
              imgUrl: x.imageURL,
              intro: x.intro,
              ingredients: x.ingredients,
              instructions: x.instructions,
              link: x.sourceURL,
              likes: x.Likes,
            };
          });
          console.log(recipesData);

          this.recipes = recipesData;
        })

        .catch((error) => console.log(error));
    },
    likeRecipe() {
      //TODO finish likeRecipe
    },
    deleteLike() {
      //TODO finish deleteLike
    },
    searchRecipe(input) {
      const action = "/api/Recipes/GetRecipesSearch?searchInput=" + input;
      const api =
        config.apiSettings.address + ":" + config.apiSettings.port + action;

      fetch(api)
        .then(async (res) => {
          const data = await res.json();
          console.log(data);
          const recipesData = data.map((x) => {
            return {
              id: x.id,
              title: x.title,
              imgUrl: x.imageURL,
              intro: x.intro,
              ingredients: x.ingredients,
              instructions: x.instructions,
              link: x.sourceURL,
              likes: x.Likes,
            };
          });
          console.log(recipesData);

          this.recipes = recipesData;
        })

        .catch((error) => console.log(error));
    },
  },
  getters: {
    // TODO get number of likes
    // TODO sort by likes
  },
});
