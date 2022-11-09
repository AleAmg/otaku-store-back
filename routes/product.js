const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Product } = require("./../models");

router.get("/", (req, res) => {
  Product.find({})
    .then((products) => {
      res.send(products);
      
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
