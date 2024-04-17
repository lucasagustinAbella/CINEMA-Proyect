require("dotenv").config();

const mongoose = require("mongoose");

const dbCon = async () => {
  // console.log(process.env.MONGO_URI);
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = dbCon;
