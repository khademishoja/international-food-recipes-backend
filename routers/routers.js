const { Router } = require("express");
const { sequelize } = require("../models");
const Recipe = require("../models").recipe;
const Region = require("../models").region;
User = require("../models").user;
const router = new Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.findAll({ include: [Region] });
    res.send(recipes);
  } catch (e) {
    console.log(e);
  }
});

router.get("/recipe/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const recipes = await Recipe.findByPk(id, { include: [Region] });
    res.send(recipes);
  } catch (e) {
    console.log(e);
    next(e);
  }
});
module.exports = router;
