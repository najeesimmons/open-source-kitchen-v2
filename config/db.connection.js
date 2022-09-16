const mongoose = require("mongoose");
require("dotenv").config();

const connectionStr = process.env.MONGO_URI;

mongoose.connect(connectionStr);

mongoose.connection.on("connected", () => {
  console.log("Mongo is connected");
});

mongoose.connection.on("error", (error) => {
  console.log("Mongo connection error");
});