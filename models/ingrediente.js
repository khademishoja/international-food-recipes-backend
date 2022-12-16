"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ingrediente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ingrediente.belongsToMany(models.recipe, {
        through: "recipeIngrediente",
        foreignKey: "ingredienteId",
      });
    }
  }
  ingrediente.init(
    {
      title: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      unit: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ingrediente",
    }
  );
  return ingrediente;
};
