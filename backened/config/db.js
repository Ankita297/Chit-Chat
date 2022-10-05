const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("database connected".yellow.bold);
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
