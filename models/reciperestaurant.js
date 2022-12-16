"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipeRestaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipeRestaurant.belongsTo(models.recipe, { foreignKey: "recipeId" });
      recipeRestaurant.belongsTo(models.restaurant, {
        foreignKey: "restaurantId",
      });
    }
  }
  recipeRestaurant.init(
    {
      recipeId: DataTypes.INTEGER,
      restaurantId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "recipeRestaurant",
    }
  );
  return recipeRestaurant;
};
