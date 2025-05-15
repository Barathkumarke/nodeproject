const express = require("express");
const usersController = require("../controller/users");

const router = express.Router();

router.get("/signUp", usersController.signUp);

router.get("/signIn", usersController.signIn);

module.exports = router;
