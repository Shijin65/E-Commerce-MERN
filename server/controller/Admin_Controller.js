const asyncHandler = require("express-async-handler");
const User = require("../model/User_model");
const Product = require("../model/Product_model");
const Order = require("../model/Order_model");

// GET ALL USERS
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

// ADD PRODUCT
const createProduct = asyncHandler(async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct
    .save()
    .then(() => console.log("Product saved!"))
    .catch((error) => console.error(error));
  res.status(201).json(newProduct);
});

// GET ALL PRODUCTS
const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const AllProducts = await Product.find();
    res.status(200).json({ AllProducts });
  } catch (error) {
    console.log("catched error", error);
    res.status(404).json({ message: "not able to find products" });
  }
});

// DELETE A PRODUCT
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    res.status(200).json({ deletedProduct });
  } catch (error) {
    console.log(error);
  }
});

// DELETE USER
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

// UPDATE PRODUCT 
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const productId = req.params.productId;
    console.log(productId)
    const  data  = req.body
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

// GET ALL ORDERS
const getAllOrders = asyncHandler(async(req,res)=>{
    try {
      const AllOrders = await Order.find();
    res.status(200).json({ AllOrders });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving orders', error });
      console.log(error)
    }
})
module.exports = { ShowAllUser, getAllProducts, deleteProduct, deleteUser,createProduct ,updateProduct,updateProduct,getAllOrders};
