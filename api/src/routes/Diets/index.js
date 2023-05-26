const { Router } = require("express");
const getDiets = require("../../controllers/Diets/getDiets");

const router = Router();

router.get("/", getDiets);

module.exports = router;
