const express = require("express");
const router = express.Router();
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

router.post("/", (req, res) => {
  const productos = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    available: req.body.available,
    image: req.body.image,
  };

  Product.create(productos)
    .then((product) => {
      res.send(product);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
