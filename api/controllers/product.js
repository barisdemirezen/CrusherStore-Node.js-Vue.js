const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/product");
const Category = require("../models/category");

exports.addProduct = function (req, res) {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    stock: req.body.stock,
    category: req.body.category,
  });
  product.save((err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.getAll = function (req, res) {
  Product.find({}, { details: 0 }, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.getProduct = function (req, res) {
  const id = req.params.id;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Product.find(
      {
        _id: id,
      },
      (err, result) => {
        if (err) {
          throw err;
        } else {
          res.json(result);
        }
      }
    );
  } else {
    res.json("err");
  }
};

exports.search = function (req, res) {
  const query = req.params.query;
  Product.find(
    {
      name: {
        $regex: ".*" + query + ".*",
      },
    },
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

exports.findId = function (req, res) {
  const id = req.params.id;
  Product.find(
    {
      _id: id,
    },
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

exports.findManyId = function (req, res) {
  if (req.params.id.length) {
    const id = req.params.id.split(",");
    id.forEach((e, index) => {
      if (!mongoose.Types.ObjectId.isValid(e)) {
        id.splice(index, 1);
      }
    });
    Product.find(
      {
        _id: {
          $in: id,
        },
      },
      (err, result) => {
        if (err) throw err;
        res.json(result);
      }
    );
  } else {
    res.json();
  }
};

exports.updateProduct = function (req, res) {
  const id = req.params.id;
  const name = req.body.name;
  const price = Number(req.body.price);
  const image = req.body.image;
  const stock = Number(req.body.stock);
  const category = req.body.category;

  var collection = client.db("shop").collection("items");
  if (name && price && image && stock && category) {
    collection
      .findOneAndUpdate(
        {
          id: id,
        },
        {
          $set: {
            name: name,
            price: price,
            image: image,
            stock: stock,
            category: category,
          },
        }
      )
      .then(function () {
        res.json("sucess");
      });
  } else {
    res.json("err");
  }
};

exports.getByCategory = function (req, res) {
  const name = req.params.name;

  Category.findOne(
    {
      title: name,
    },
    (err, result) => {
      if (err) throw err;
      Product.find(
        {
          category: result._id,
        },
        (err, result) => {
          if (err) throw err;
          res.json(result);
        }
      );
    }
  );
};
