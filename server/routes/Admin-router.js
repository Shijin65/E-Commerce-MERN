const express = require("express");
const router = express.Router();

const { ShowAllUser,getAllProducts,deleteProduct } = require("../controller/Admin_Controller");
const { isAdmin, validUser } = require("../middleware/validator");


router.get("/user",validUser,isAdmin, ShowAllUser);
router.get("/product",validUser,isAdmin, getAllProducts);
router.delete("/product/:productId" ,deleteProduct)

module.exports = router;
