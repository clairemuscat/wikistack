const Sequelize = require('sequelize');
const { db } = require('./db');

const users = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

module.exports = users;
