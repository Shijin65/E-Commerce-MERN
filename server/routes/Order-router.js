const express =require("express")
const { createOrdersession } = require("../controller/Order_Controler")
const router = express.Router()

router.post('/',createOrdersession)
module.exports =router