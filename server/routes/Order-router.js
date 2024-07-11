const express =require("express")
const { createOrdersession ,getOrders} = require("../controller/Order_Controler")
const router = express.Router()
const {validUser}=require("../middleware/validator")

router.post('/',createOrdersession) 
router.get('/',validUser,getOrders)
module.exports =router