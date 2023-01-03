"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "restaurants",
      "latitude",
      { type: Sequelize.STRING },
      {}
    );
    await queryInterface.addColumn(
      "restaurants",
      "longitude",
      { type: Sequelize.STRING },
      {}
    );
    await queryInterface.addColumn(
      "restaurants",
      "imageUrl",
      { type: Sequelize.STRING },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      "restaurants",
      "latitude",
      "longitude",
      "imageUrl"
    );
  },
};
