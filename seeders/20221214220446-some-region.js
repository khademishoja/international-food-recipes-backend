"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "regions",
      [
        {
          country: "Persian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Arabian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Turkish",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("regions", null, {});
  },
};
