const Express = require("express");
const connectDB = require("./config/DB_connect");
const dotenv = require("dotenv").config();
const Server = Express();

Server.use(Express.json());
const PORT = process.env.PORT || 4000;
Server.use(require("cors")());

//health check
Server.get("/health", async (req, res) => {
  res.status(200).json({ message: "HEALTH OK!" });
});

// database connection
connectDB()

// Routes
Server.use("/api/user",require('./routes/User-router'));

Server.listen(PORT, () => {
  console.log(`the server is running in the port :${PORT}`);
});
