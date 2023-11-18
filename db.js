const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "6292568",
    port: 5432,
});

module.exports = pool;

console.log("Hello testing");


