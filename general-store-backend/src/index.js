const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 4000;

const connectDb = () => {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
  connectDb();
});
