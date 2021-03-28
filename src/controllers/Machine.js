const db = require("../database/config/database.js");
module.exports = {
  async index(req, res) {
    const machines = await db.query("SELECT * FROM machines");
    return res.json(machines.rows);
  },

  async store(req, res) {
    const {
      name,
      group,
      tag,
      serial_number,
      model,
      manufactured_date,
    } = req.body;
    try {
      const newMachine = await db.query(
        "INSERT INTO machines (name, machine_group, machine_tag, serial_number, model, manufactured_date) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
        [name, group, tag, serial_number, model, manufactured_date]
      );
      return res.json(newMachine.rows);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: "Something went wrong :(" });
    }
  },

  async update(req, res) {
    let {
      name,
      group,
      tag,
      serial_number,
      model,
      manufactured_date,
    } = req.body;

    const machine_id = req.params.id;
    const data = await db.query("SELECT * FROM machines WHERE id=$1", [
      machine_id,
    ]);

    if (name === "" || name === undefined) {
      name = data.rows[0].name;
    }
    if (group === "" || group === undefined) {
      group = data.rows[0].machine_group;
    }
    if (tag === "" || tag === undefined) {
      tag = data.rows[0].machine_tag;
    }
    if (serial_number === "" || serial_number === undefined) {
      serial_number = data.rows[0].serial_number;
    }
    if (model === "" || model === undefined) {
      model = data.rows[0].model;
    }
    if (manufactured_date === "" || manufactured_date === undefined) {
      manufactured_date = data.rows[0].manufactured_date;
    }
    try {
      const updateMachine = await db.query(
        "UPDATE machines SET (name, machine_group, machine_tag, serial_number, model, manufactured_date) = ($1,$2,$3,$4,$5,$6) WHERE id=$7 RETURNING *",
        [name, group, tag, serial_number, model, manufactured_date, machine_id]
      );

      return res.json(updateMachine.rows[0]);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: "Something went wrong :(" });
    }
  },
  async delete(req, res) {
    const machine_id = req.params.id;
    try {
      const data = await db.query("DELETE FROM machines WHERE id=$1", [
        machine_id,
      ]);
      res.status(204).json({ status: "Machine Deleted" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: "Something went wrong :(" });
    }
  },
};
