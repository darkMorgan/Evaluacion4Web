const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres', // Cambiado de 'mysql' a 'postgres'
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Importante para conexión segura con Render
      },
    },
  }
);

module.exports = sequelize;
