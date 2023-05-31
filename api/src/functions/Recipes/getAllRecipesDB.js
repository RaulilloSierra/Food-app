const { Recipe, Diet } = require("../../db");

async function getAllRecipesDB() {
  const res = await Recipe.findAll({
    attributes: [
      "id",
      "name",
      "food_summary",
      "health_score",
      "ingredients",
      "instructions",
      "image",
      "createDb",
    ],
    include: { model: Diet },
  });

  return await res.map((e) => {
    return {
      id: e.dataValues.id,
      name: e.dataValues.name,
      image: e.dataValues.image,
      food_summary: e.dataValues.food_summary,
      health_score: e.dataValues.health_score,
      ingredients: e.dataValues.ingredients,
      instructions: e.dataValues.preparation,
      diets: e.dataValues.diets.map((d) => {
        return { name: d.name };
      }),
      createDb: e.dataValues.createDb,
    };
  });
}

module.exports = getAllRecipesDB;
