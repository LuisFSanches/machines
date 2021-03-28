const { Pool } = require("pg");
require("dotenv").config();
const devConfig = {
  user: "postgres",
  host: "localhost",
  database: "machines",
  password: process.env.PASSWORD,
  port: 5432,
};
const pool = new Pool(devConfig);

module.exports = pool;
