const express = require("express")
const { Registeruser, LoginUser, CurrentUser } = require('../controller/User_Controller');
const { validUser } = require("../middleware/validator");

const router = express.Router()

router.post("/register",Registeruser)
router.post("/login",LoginUser)
router.get("/current",validUser,CurrentUser)

module.exports=router;