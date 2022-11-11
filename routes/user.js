const express = require("express");
const router = express.Router();
const { User } = require("./../models");

router.get("/", (req, res) => {
  User.find({})
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  const user = {
    name: req.body.name,
    password: req.body.password,
    mail: req.body.mail,
    admin: req.body.admin,
  };

  User.create(user)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
