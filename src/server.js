require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./routes.js");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/", routes);

app.listen(port, console.log("server running"));
