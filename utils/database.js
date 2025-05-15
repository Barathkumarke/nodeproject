const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("user_registration", "root", "Pass@123!", {
  host: "ec2-54-198-64-144.compute-1.amazonaws.com",
  dialect: "mysql",
});

module.exports = sequelize;
