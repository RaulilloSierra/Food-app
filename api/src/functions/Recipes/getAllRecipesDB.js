const { Recipe, Diet } = require("../../db");

async function getAllRecipesDB() {
  const res = await Recipe.findAll({
    attributes: [
      "id",
      "name",
      "image",
      "food_summary",
      "health_score",
      "instructions",
    ],
    include: { model: Diet },
  });

  return await res.map((e) => {
    return {
      id: e.dataValues.id,
      name: data.dataValues.name,
      image: data.dataValues.image,
      food_summary: data.dataValues.food_summary,
      health_score: data.dataValues.health_score,
      instructions: data.dataValues.preparation,
      diets: e.dataValues.diets.map((d) => {
        return { name: d.name };
      }),
    };
  });
}

module.exports = getAllRecipesDB;
