const express = require("express");
const router = express.Router();

const { ShowAllUser,getAllProducts,deleteProduct, deleteUser,createProduct } = require("../controller/Admin_Controller");
const { isAdmin, validUser } = require("../middleware/validator");


router.get("/user",validUser,isAdmin, ShowAllUser);
router.get("/product",validUser,isAdmin, getAllProducts);
router.post("/", createProduct);
router.delete("/product/:productId" ,deleteProduct)
router.delete("/user/:userId" ,deleteUser)

module.exports = router;
