'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('Categories', [
        {
          id: uuidv4(),
          name: "Vintage",
          created_at: new Date(),
          updated_at: new Date()
        },

        {
          id: uuidv4(),
          name: "Retro",
          created_at: new Date(),
          updated_at: new Date()
        },

        {
          id: uuidv4(),
          name: "Moderno",
          created_at: new Date(),
          updated_at: new Date()
        },

        {
          id: uuidv4(),
          name: "Fantasias",
          created_at: new Date(),
          updated_at: new Date()
        },

        {
          id: uuidv4(),
          name: "Luxo",
          created_at: new Date(),
          updated_at: new Date()
        },
         {
          id: uuidv4(),
          name: "Outros",
          created_at: new Date(),
          updated_at: new Date()
        },

      ], {});
    } catch (error) {
      console.error({ error })
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});

  }
};
