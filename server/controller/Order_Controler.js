const AsyncHandler = require("express-async-handler");
const Order = require("../model/Order_model");

// CREATE ORDER
const createOrdersession =AsyncHandler(async(req,res)=>{
    const { userId , products,totalAmount } = req.body;
    console.log(userId)
    if(!userId || !products || !totalAmount){
        res.status(404).json({message:"invalid input"})
    }
    const order = new Order({
        userId,
        products,
        totalAmount
    });
    try {
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error saving order', error });
    }
})

// GET ORDER BY ID
const getOrders = AsyncHandler(async(req,res)=>{
    try {
        const orders = await Order.find({ userId: req.user.id });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving orders', error });
        console.log(error)
    }
})

module.exports ={createOrdersession,getOrders}