const express = require("express");
const usersController = require("../controller/users");

const router = express.Router();

router.get('/', (req, res) => {
  console.log("Hello from Node.js!");
  res.send("Hello from Node.js! edited");
});

router.get("/signUp", usersController.signUp);

router.get("/signIn", usersController.signIn);

module.exports = router;
