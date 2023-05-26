const getAllRecipesApi = require("./getAllRecipesApi");
const getAllRecipesBD = require("./getAllRecipesDB");

async function getAllRecipes() {
  const infoApi = await getAllRecipesApi();

  const infoDB = await getAllRecipesBD();

  const allRecipes = [...infoApi, ...infoDB];

  return allRecipes;
}

module.exports = getAllRecipes;
