const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./utils/database");

const userRoutes = require("./routes/users");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(userRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");}););
  })
  .catch((err) => {
    console.log(err);
  });
