const express = require("express");
const router = express.Router();

const { ShowAllUser } = require("../controller/Admin_Controller");
const { isAdmin, validUser } = require("../middleware/validator");


router.get("/user",validUser,isAdmin, ShowAllUser);
module.exports = router;
