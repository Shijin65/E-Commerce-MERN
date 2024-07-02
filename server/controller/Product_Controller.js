const asyncHandler = require("express-async-handler");
const Product = require("../model/Product_model");

const createProduct = asyncHandler(async (req, res) => {
  const { name, colors, price } = req.body;
    if(name||colors||price){
    console.log(name, colors, price);
    }
  res.status(201).json(req.body)
  // res.status(200).json({message:"hello this is product page"})
  // const newProduct = new Product();

  //   newProduct.save()
  //     .then(() => console.log("Product saved!"))
  //     .catch(error => console.error(error));
});

module.exports = { createProduct };
