const express = require("express");
const router = express.Router();
const user = require("../controllers/user");

router.get("/cart/:id", user.getCart);

router.post("/cart/add", user.addToCart);

router.post("/cart/remove", user.removeFromCart);

module.exports = router;
