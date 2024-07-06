const asyncHandler = require("express-async-handler");
const Product = require("../model/Product_model");

const createProduct = asyncHandler(async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct
    .save()
    .then(() => console.log("Product saved!"))
    .catch((error) => console.error(error));
  res.status(201).json(newProduct);
});

const userGetAllProduct = asyncHandler(async (req, res) => {
  try {
    const AllProducts = await Product.find();
    res.status(200).json({ AllProducts });
  } catch (error) {
    console.log("catched error", error);
    res.status(404).json({ message: "not able to find products" });
  }
});

const GetProductById = asyncHandler(async (req, res) => {
  try {
    const productId = req.params.productId;
    // console.log(productId)
    const singleProduct = await Product.findById(productId);
    if (!singleProduct) {
      console.log("product not available");
    } else {
      res.status(200).json({ singleProduct });
    }
  } catch (error) {
    console.log(error);
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  try {
    const productId = req.params.productId;
    console.log(productId)
    const  data  = req.body
    // console.log(data);
    const updatedProduct = await Product.findByIdAndUpdate(productId, data, {
      new: true,
      runValidators: true,
    });
    if (updatedProduct) {
      res.status(200).json({ updatedProduct });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = {
  createProduct,
  userGetAllProduct,
  GetProductById,
  updateProduct,
};
