const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Review = db.define('reviews', {
    review_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    star: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    guitar_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
  module.exports = Review;