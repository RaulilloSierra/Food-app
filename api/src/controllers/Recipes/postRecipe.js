const postDataRecipe = require("../../functions/Recipes/postDataRecipe");

async function postRecipe(req, res) {
  const { name, food_summary, health_score, ingredients, instructions, image, diets } =
    req.body;
  try {
    if (
      name &&
      food_summary &&
      health_score &&
      ingredients &&
      instructions &&
      image &&
      diets
    ) {
      const recipeObj = {
        name,
        food_summary,
        health_score,
        ingredients,
        instructions,
        image,
        diets,
      };
      const recipe = await postDataRecipe(recipeObj);

      return res.status(200).json(recipe);
    } else {
      res.status(400).json({ error: "Missing data" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = postRecipe
