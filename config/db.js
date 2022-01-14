const { Sequelize } = require('sequelize');

const db = new Sequelize('GuitarStore', 'root', 'testmypass', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

module.exports = db;