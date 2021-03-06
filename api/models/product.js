const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  image: String,
  details: {
    detail: String,
    images: [],
  },
  stock: Number,
  category: String,
});

module.exports = mongoose.model("Product", productSchema, "items");
