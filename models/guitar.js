const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Guitar = db.define('guitars', {
  guitar_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  longDescription: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
  specifications: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  dateAdded: {
    type: DataTypes.DATE
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  soldOut: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Guitar;