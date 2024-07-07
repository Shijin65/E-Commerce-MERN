const asyncHandler = require("express-async-handler");
const User = require("../model/User_model");
const Product = require("../model/Product_model");
const ShowAllUser = asyncHandler(async (req, res) => {
  try {
    const Allusers = await User.find();
    res.status(200).json({ Allusers });
    res.end();
  } catch (error) {
    console.log(error);
    res.status.apply(404).json({ message: "not able to find users" });
  }
});

const createProduct = asyncHandler(async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct
    .save()
    .then(() => console.log("Product saved!"))
    .catch((error) => console.error(error));
  res.status(201).json(newProduct);
});

const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const AllProducts = await Product.find();
    res.status(200).json({ AllProducts });
  } catch (error) {
    console.log("catched error", error);
    res.status(404).json({ message: "not able to find products" });
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    res.status(200).json({ deletedProduct });
  } catch (error) {
    console.log(error);
  }
});
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.userId;
    const deleteduser = await Product.findByIdAndDelete(userId);
    res.status(200).json({ deleteduser });
  } catch (error) {
    console.log(error);
    throw new error();
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
module.exports = { ShowAllUser, getAllProducts, deleteProduct, deleteUser,createProduct ,updateProduct,updateProduct};
