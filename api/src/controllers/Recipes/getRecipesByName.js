const getAllRecipes = require("../../functions/Recipes/getAllRecipes");

async function getRecipesByName(req, res) {
  const { name } = req.query;
  console.log(name);
  try {
    const allRecipes = await getAllRecipes();
    if (name) {
      let filterRecipe = allRecipes.filter((e) =>
        e.name.toLowerCase().includes(name.toString().toLowerCase())
      );
      filterRecipe.length
        ? res.status(200).json(filterRecipe)
        : res
            .status(400)
            .json({ error: `the recipe with the name ${name} does not exist` });
    } else {
      res.status(200).json(allRecipes);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getRecipesByName;
