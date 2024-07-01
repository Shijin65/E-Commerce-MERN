const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect =await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log(
      "the database connection established successfully",
      connect.connection.host
    );
  } catch (error) {
    console.log("database connection failed",error);
    process.exit(1);
  }
};
module.exports = connectDB;
