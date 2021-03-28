const express = require("express");
const routes = express.Router();

//Importing Controllers
const Machine = require("./controllers/Machine");
const App = require("./controllers/App");

routes.get("/", App.index);

routes.get("/machines", Machine.index);
routes.post("/new-machine", Machine.store);
routes.put("/update-machine/:id", Machine.update);
routes.delete("/delete-machine/:id", Machine.delete);

module.exports = routes;
