require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Diet } = require("../../db");

// * Obtencion de las recetas de la APÍ

async function getAllRecipesApi() {
  const dietsAll = [];
  const infoApi = await axios(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  
  const infoFinal = infoApi.data.results.map((recipe) => {
    return {
      id: recipe.id,
      name: recipe.title,
      food_summary: recipe.summary,
      health_score: recipe.healthScore,
      image: recipe.image,
      instructions: recipe.analyzedInstructions?.map((step) =>
        step.steps.map((step) => {
          return {
            number: step.number,
            step: step.step,
          };
        })
      ),
      diets: recipe.diets.map((d) => {
        return { name: d };
      }),
    };
  });

  const dietAllApi = infoFinal.map((e) => e.diets);
  dietAllApi.forEach((element) => {
    element.forEach((el) => {
      dietsAll.push(el.name);
    });
  });

  const TypeDiets = [...new Set(dietsAll)];

  let allDiets = TypeDiets.map((diet) => {
    Diet.findOrCreate({ where: { name: diet } });
  });

  try {
    Promise.all(allDiets).then((e) => console.log("API diets loaded"));
  } catch (error) {
    return { error: error.message };
  }
  return infoFinal;
}

module.exports = getAllRecipesApi;