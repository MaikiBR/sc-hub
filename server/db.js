const Pool = require("pg").Pool;

const pool = new Pool({
    user: "hub-admin",
    password: "schubdb",
    host: "localhost",
    port: 5432,
    database: "hub-db" 
});

module.exports = pool;