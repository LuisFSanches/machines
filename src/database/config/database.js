const { Pool } = require("pg");
require("dotenv").config();
const devConfig = {
  user: "postgres",
  host: "localhost",
  database: "machines",
  password: "admin",
  port: 5432,
};
const pool = new Pool(devConfig);

module.exports = pool;
