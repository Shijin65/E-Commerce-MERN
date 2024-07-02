const asyncHanler = require("express-async-handler");
const User = require("../model/User_model");

const ShowAllUser = asyncHanler(async (req, res) => {
  try {
    const Allusers = await User.find();
    res.status(200).json({ Allusers });
    res.end();
  } catch (error) {
    console.log(error)
    res.status.apply(404).json({message:"not able to find users"})
  }
});

module.exports = { ShowAllUser };
