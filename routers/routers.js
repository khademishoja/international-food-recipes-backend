const { Router } = require("express");
const { sequelize } = require("../models");
const Recipe = require("../models").recipe;
const Region = require("../models").region;
const authMiddleWare = require("../auth/middleware");
const User = require("../models").user;
const Comments = require("../models").comment;
const RestaurantRecipes = require("../models").recipeRestaurant;
const Restaurants = require("../models").restaurant;
const Favorite = require("../models").favorite;
// User = require("../models").user;
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
router.post("/newrecipe", async (req, res, next) => {
  // const userId = req.body.userId;
  // const user = await User.findByPk(userId);
  try {
    // const regions = await Region.findAll({ include: [Region] });
    console.log(req.body);
    const newRecipe = req.body;
    const createRecipe = await Recipe.create(newRecipe);
    res.send(createRecipe);
  } catch (e) {
    console.log(e);
    next(e);
  }
});
router.get("/newrecipe", async (req, res, next) => {
  // const userId = req.body.userId;
  // const user = await User.findByPk(userId);
  try {
    const regions = await Region.findAll();
    res.send(regions);
    // console.log(req.body);
  } catch (e) {
    console.log(e);
  }
});
router.get("/comments/:recipeId", async (req, res, next) => {
  const id = req.params.recipeId;
  // const user = await User.findByPk(userId);
  try {
    const response = await Comments.findAll({ where: { recipeId: id } });
    res.send(response);
    // console.log(req.body);
  } catch (e) {
    console.log(e);
  }
});
router.post("/comments/", async (req, res, next) => {
  // const id = req.params.recipeId;
  // const user = await User.findByPk(userId);
  try {
    const newComment = req.body;
    const createComment = await Comments.create(newComment);
    res.send(createComment);
  } catch (e) {
    console.log(e);
  }
});
router.put("/recipe", authMiddleWare, async (req, res, next) => {
  try {
    const recipe = await Recipe.findByPk(req.body.id);
    if (req.body.like) {
      recipe.likes = recipe.likes + 1;
      const newFav = { userId: req.user.id, recipeId: req.body.id };
      await Favorite.create(newFav);
    } else {
      recipe.likes = recipe.likes - 1;
      const deleteFav = await Favorite.findOne({
        where: { userId: req.user.id, recipeId: recipe.id },
      });

      await deleteFav.destroy();
    }
    console.log("recipe");
    console.log(recipe);
    await recipe.update({ likes: recipe.likes });
    res.send(recipe);
  } catch (e) {
    console.log(e);
    next(e);
  }
});
router.get("/restaurant/:recipeId", async (req, res) => {
  try {
    // console.log("HIIIIIIIIIIIIIIIIIIIIIIIII");
    // console.log(req.params.recipeId);
    const restaurant = await RestaurantRecipes.findAll({
      where: { recipeId: req.params.recipeId },
      include: [Restaurants],
    });
    res.send(restaurant);
  } catch (e) {
    console.log(e);
    next(e);
  }
});
router.get("/favorite/:recipeId", authMiddleWare, async (req, res) => {
  try {
    console.log("HIIIIIIII33333333IIIIIIIIIIIIIIIII");
    console.log(req.params.recipeId);
    console.log(req.user.id);
    const favorite = await Favorite.findAll({
      where: { recipeId: req.params.recipeId, userId: req.user.id },
    });
    res.send(favorite.length > 0);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
