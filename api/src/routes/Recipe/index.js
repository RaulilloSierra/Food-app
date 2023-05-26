const { Router } = require("express");
const router = Router();
const getRecipeById = require("../../controllers/Recipes/getRecipeById");
const getRecipesByName = require("../../controllers/Recipes/getRecipesByName");
const postRecipe = require('../../controllers/Recipes/postRecipe')

router.get("/home", getRecipesByName);
router.get("/home/:id", getRecipeById);
router.post('/', postRecipe)

module.exports = router;
