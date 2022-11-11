const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "plis send a string"],
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  available: {
    type: Boolean,
    require: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
