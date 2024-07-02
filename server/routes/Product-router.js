const express = require("express");
const { createProduct } = require("../controller/Product_Controller");

const router = express.Router();

router.post("/", createProduct);

module.exports = router;
