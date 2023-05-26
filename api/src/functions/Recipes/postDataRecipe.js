let { Recipe, Diet } = require("../../db");

async function postDataRecipe(recipe) {
  const { name, food_summary, health_score, instructions, image, diets } =
    recipe;

  const saveRecipe = await Recipe.create({
    name,
    food_summary,
    health_score,
    instructions,
    image,
    diets,
  });

  let dietsBd = await Diet.findAll({
    where: { name: diets },
  });

  await saveRecipe.addDiet(dietsBd);

  return saveRecipe;
}

module.exports = postDataRecipe;
