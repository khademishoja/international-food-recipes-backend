"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipeIngrediente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipeIngrediente.belongsTo(models.recipe, { foreignKey: "recipeId" });
      recipeIngrediente.belongsTo(models.ingrediente, {
        foreignKey: "ingredienteId",
      });
    }
  }
  recipeIngrediente.init(
    {
      recipeId: DataTypes.INTEGER,
      ingredienteId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "recipeIngrediente",
    }
  );
  return recipeIngrediente;
};
