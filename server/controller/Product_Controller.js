const asyncHandler = require("express-async-handler");
const Product = require("../model/Product_model");

const createProduct = asyncHandler(async (req, res) => {
  const newProduct = new Product(req.body);
   await newProduct.save().then(() => console.log("Product saved!")).catch(error => console.error(error));
   res.status(201).json(newProduct)
});

module.exports = { createProduct};
