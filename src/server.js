require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./routes.js");

const port = 80;

app.use(express.json());
app.use("/", routes);

app.listen(port, console.log("server running"));
