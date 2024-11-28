
// Este archivo tambien lo llaman comunmente index.js ó app.js  
// Para ejecutar el WS con NODEMON, abrimos una consola No importa si es de PowerShell o de cMD
// y escribimos el comendo :>  npm start

const express = require("express"); // aqui cargamos o importamos el módulo express
                                    // Se usa para cargar funciones del middleware en una dirección particular 
                                    //para todos los métodos de peticiones. (Trabajar con Rutas y HTTP)
const bodyParser = require("body-parser");

const app = express();  

//-------- MiddleWares
app.use(bodyParser.json()); // Cualquier cosa que llegue pasarlos a Json ( que tome en cuenta solo los Json)
app.use(bodyParser.urlencoded({extended:false})); // Esto es para que no acepte que se le envíen objetos anidados
        
        // Configurar cabeceras y cors
app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });


 //----------Cargar archivos de RUTAS
 //app.use(require("./routes/consultas_registro_persona.js"));
require('./server/routes/usuarios')(app); // esta instruccion incluye todos los app del controlador usuarios.
require('./server/routes/RegistroPersona')(app);

    //---------- Mas temas de Rutas
    // Rutas
app.get('*',(req,res)=>{
        res.status(200).send({
         message: "Bienvenido WS_RegistroPersona 13/Nov"} );
 })

//----------  Exportar
module.exports=app;
