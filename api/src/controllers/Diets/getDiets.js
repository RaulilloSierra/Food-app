const getInfoDietDb = require("../../functions/Diets/getInfoDietDb");

async function getDiets(req, res) {
  try {
    const Alldiets = await getInfoDietDb();
    res.status(200).json(Alldiets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getDiets;
