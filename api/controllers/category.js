const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const Category = require("../models/category");

exports.getAll = function (req, res) {
  Category.find({}, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
