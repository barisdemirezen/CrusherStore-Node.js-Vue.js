require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.uttnk.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();
const port = process.env.PORT || 3000;

const products = require("./routes/products");
const user = require("./routes/user");
const category = require("./routes/category");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/products", products);
app.use("/user", user);
app.use("/category", category);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
