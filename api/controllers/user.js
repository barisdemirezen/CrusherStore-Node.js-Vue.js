const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const User = require("../models/user");
const Product = require("../models/product");

exports.getCart = function (req, res) {
  const id = req.params.id;
  User.findOne(
    {
      _id: id,
    },
    (err, result) => {
      if (err) throw err;
      Product.find(
        {
          _id: result.cart,
        },
        (err, result) => {
          if (err) throw err;
          res.json(result);
        }
      );
    }
  );
};

exports.addToCart = function (req, res) {
  const userid = req.body.userid;
  const itemid = req.body.itemid;
  User.updateOne(
    {
      _id: userid,
    },
    {
      $push: {
        cart: itemid,
      },
    },
    (err, result) => {
      if (err) throw err;
      res.json("success");
    }
  );
};

exports.removeFromCart = function (req, res) {
  const userid = req.body.userid;
  const itemid = req.body.itemid;
  User.updateOne(
    {
      _id: userid,
    },
    {
      $pull: {
        cart: { $in: itemid },
      },
    },
    (err, result) => {
      if (err) throw err;
      res.json("success");
    }
  );
};
