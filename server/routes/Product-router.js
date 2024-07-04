const express = require("express");
const { createProduct ,userGetAllProduct } = require("../controller/Product_Controller");

const router = express.Router();

router.post("/", createProduct);
router.get("/",userGetAllProduct)
router.get("/:ProductId",userGetAllProduct)

module.exports = router;
