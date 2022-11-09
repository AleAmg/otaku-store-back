const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "plis send a string"],
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  available: {
    type: Boolean,
  },
});

const Product = mongoose.model("Product", ProductSchema);
/* 
Product.find({})
  .then((products) => {
    console.log(products);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  }); */

module.exports = Product;
