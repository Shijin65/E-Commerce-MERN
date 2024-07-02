const asynchandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../model/User_model");

const isAdmin = asynchandler(async (req, res, next) => {

    
    const user = await User.findById(req.user.id)

    if(user?.role==="1"){
        next()
    }else{
      res.status(401).json(user);
      throw new Error("requiest rejected due to not having specifice role");
    }
});
const validUser = asynchandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECERT_ACCESSTOKEN, (err, decoded) => {
      if (!err) {
        req.user = decoded.user;
        
      } else {
        res.status(401).json({ error: "either the token is not valid or It is Expired" });
        throw new Error("token validation failed");
      }
      next();
    });
  }
  if (!token) {
    res.status(401);
    throw new Error("user is not authorized or token is missing");
  }
});
module.exports = {validUser,isAdmin};