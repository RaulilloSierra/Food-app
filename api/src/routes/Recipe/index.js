const { Router } = require("express");
const router = Router();
const getRecipeById = require("../../controllers/Recipes/getRecipeById");
const getRecipesByName = require("../../controllers/Recipes/getRecipesByName");
const postRecipe = require('../../controllers/Recipes/postRecipe')

router.get("/", getRecipesByName);
router.get("/:id", getRecipeById);
router.post('/', postRecipe)

module.exports = router;
