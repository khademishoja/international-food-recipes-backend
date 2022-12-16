"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipe.hasMany(models.ingrediente);
      recipe.belongsTo(models.region);
      recipe.belongsToMany(models.restaurant, {
        through: "recipeRestaurant",
        foreignKey: "recipeId",
      });
      recipe.belongsToMany(models.user, {
        through: "favorite",
        foreignKey: "recipeId",
      });
    }
  }
  recipe.init(
    {
      foodName: DataTypes.STRING,
      recipe: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      description: DataTypes.TEXT,
      likes: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      regionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "recipe",
    }
  );
  return recipe;
};
