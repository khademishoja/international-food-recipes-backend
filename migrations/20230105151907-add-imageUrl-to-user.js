"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "users",
      "imageUrl",
      { type: Sequelize.STRING }, 
    ); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      "restaurants", 
      "imageUrl"
    );
  },
};
