const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'registro_personas',
    password: 'sqldevserver',
    port: '5432'
});

pool.connect(err => { 
  if (err) { 
    console.log("connect a_BD_Registro_Personas >> Error", err) } 
  else { 
    console.log("connect a_BD_Registro_Personas >> Exitoso ") } 
});

module.exports = pool;