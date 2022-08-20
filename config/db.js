const mongoose = require("mongoose");
const url =
  "mongodb+srv://sanjayrahul:1234567890@cluster0.mj1ceac.mongodb.net/api_creation?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(url);
    console.log(`mongoDB connected:${con.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
