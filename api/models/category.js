const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  image: String,
});

module.exports = mongoose.model("Category", categorySchema, "categories");
