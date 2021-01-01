const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "ahamed24",
  host: "localhost",
  port: 5432,
  database: "asset_project",
});

module.exports = pool;
