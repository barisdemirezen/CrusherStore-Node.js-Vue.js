const express = require("express");
const router = express.Router();
const products = require("../controllers/product");

router.get("/", products.getAll);

//router.get("/search/:query", products.search);

router.get("/details/:id", products.getProduct);

//router.post("/", products.addProduct);

router.get("/findmany/:id", products.findManyId);

router.get("/getbycategory/:name", products.getByCategory);

router.get("/:id", products.findId);

//router.post("/:id", products.updateProduct);

module.exports = router;
