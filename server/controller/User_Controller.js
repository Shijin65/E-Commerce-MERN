const asyncHanler = require("express-async-handler");
const User = require("../model/User_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//CURRENT USER
const CurrentUser = asyncHanler(async (req, res) => {
  res.status(200).json(req.name);
  res.end();
});

// REGISTETR USER
const Registeruser = asyncHanler(async (req, res) => {
  const { username, email, password, role } = req.body;
  if (!username || !email || !password || role) {
    res.status(404).json({ error: "all the fields a mantatory... " });
    throw new Error("all the fields a mantatory");
  }

  const userexist = await User.findOne({ email });
  if (userexist) {
    res.status(400).json({ error: "The email already used... " });
    throw new Error("user already exist");
  }

  const hashedpassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({
      username,
      email,
      password: hashedpassword,
      role,
    });
    if (user) {
      const accesstoken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        process.env.SECERT_ACCESSTOKEN,
        { expiresIn: "30m" }
      );
      res.status(200).json({ accesstoken, user });
    }
  } catch (error) {
    console.log("the data creation failed", error);
  }
});

// LOGIN USER - - - - -
const LoginUser = asyncHanler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404).json({ error: "fill the email and password" });
    throw new Error("all the fields a mantatory");
  }
  const user = await User.findOne({ email });
  if (!user) {
    console.log("user not found");
    res.status(404).json({ error: "user not found" });
  }
  if (user && (await bcrypt.compare(password, user.password))) {
    const accesstoken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.SECERT_ACCESSTOKEN,
      { expiresIn: "10m" }
    );
    res.status(200).json({ accesstoken, user });
  } else {
    res.status(401).json({ error: "check the email and password " });
    throw new Error("auth error");
  }
});

module.exports = { Registeruser, LoginUser, CurrentUser };
