const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Estudiante = sequelize.define('Estudiante', {
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  codigo: { type: DataTypes.STRING, primaryKey: true },
  ciclo: DataTypes.STRING,
  carrera: DataTypes.STRING,
});

module.exports = Estudiante;
