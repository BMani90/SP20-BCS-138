const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://bmani:123@cluster0.hwidu4v.mongodb.net/test").then(() => {
  console.log("connected to db");
}).catch(err => {
  console.log("error conecting");
});

app.listen(3000);
