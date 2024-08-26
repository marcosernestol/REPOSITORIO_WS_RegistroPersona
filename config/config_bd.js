const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'registro_personas',
    password: 'sqldevserver',
    port: '5434'
});
pool.connect(err => { if (err) { console.log("Error", err) } else { console.log("Conectado") } })

module.exports = pool;