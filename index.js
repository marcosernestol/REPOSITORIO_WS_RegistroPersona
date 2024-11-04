const express = require("express"); // aqui cargamos o importamos el módulo express
                                    // Se usa para cargar funciones del middleware en una dirección particular 
                                    //para todos los métodos de peticiones. (Trabajar con Rutas y HTTP)
const app = express();  
const cors = require('cors');

app.use(require("./routes/consultas_registro_persona.js"));

// EN LA SIGUIENTE INSTRUCCION QUISE AGREGAR ESOS ENCABAZADOS PARA VER SI SE CORREGIA EL ERROR DE LOS CORS 
// Pero NO funcionó. igual y si quito esos encabezados no pasa nada
app.use(cors(

));

/*
{
    origin:  '*',// Puedes restringir esto a un dominio específico 'http://127.0.0.1:5500'
    methods: 'GET, POST, OPTIONS, PUT, DELETE',
    allowedHeaders: 'Origin, Content-Type, Accept, Authorization, Access-Control-Allow-Origin'
}
*/



app.listen(5999, () => { console.log("WS_RegistroPersona Iniciados , puerto 5999") }) // Aqui va cualquier puerto para escuchar los WEB services



/*
app.use((req, res, next) => { res.header('Access-Control-Allow-Origin', '*'); next(); });

*/