const db = require("./config/database.js");

async function dropTable(table) {
  await db.connect();
  await db.query(`DROP TABLE ${table}`);
  await db.end();
  console.log("table deleted");
}

async function createTable(table) {
  await db.connect();
  await db.query(
    `CREATE TABLE ${table} (id SERIAL PRIMARY KEY, name VARCHAR(50), machine_group VARCHAR(50), machine_tag VARCHAR(20), serial_number VARCHAR(50), model VARCHAR(50), manufactured_date INTEGER, created_at TIMESTAMP NOT NULL DEFAULT current_timestamp, updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp)`
  );
  await db.end();
}
createTable("machines");
