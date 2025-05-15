const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("user_registration", "root", "Pass@123!", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
