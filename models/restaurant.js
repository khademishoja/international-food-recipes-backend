"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      restaurant.belongsTo(models.user);
      restaurant.belongsToMany(models.recipe, {
        through: "recipeRestaurant",
        foreignKey: "restaurantId",
      });
    }
  }
  restaurant.init(
    {
      address: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "restaurant",
    }
  );
  return restaurant;
};
