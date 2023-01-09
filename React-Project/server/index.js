import express from "express";
import cors from "cors"; //sending data from 3000 port too 8000
import Connection from "./database/db.js";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";

const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true })); //for post req
app.use(bodyParser.urlencoded({ extended: true })); //for spaces in url
app.use(cors());

app.use("", Routes);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(8000, () => {
  console.log("Server is running successfully at PORT 8000");
});
