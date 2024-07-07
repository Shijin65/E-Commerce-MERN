const express = require("express");
const { createProduct ,userGetAllProduct, GetProductById ,updateProduct} = require("../controller/Product_Controller");

const router = express.Router();

router.post("/", createProduct);
router.get("/",userGetAllProduct)
router.get("/:productId",GetProductById)
module.exports = router;
