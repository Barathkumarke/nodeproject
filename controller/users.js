const User = require("../models/user");

exports.signUp = (req, res, next) => {
  User.create({
    first_name: "kaviarasan",
    last_name: "n",
    email_id: "kaviarasan.dmt@gmail.com",
    password: "passpass",
  })
    .then((result) => console.log(result))
    .catch((err) => {
      console.log(err);
    });
};

exports.signIn = (req, res, next) => {
  const email = "kaviarasan.dmt@gmail.com";
  const password = "passpass";
  const user = User.findOne({
    where: { email_id: email },
  })
    .then((result) => console.log(result))
    .catch((err) => {
      console.log("error finding user");
    });
};
