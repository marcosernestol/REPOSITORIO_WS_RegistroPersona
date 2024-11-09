
// Este archivo tambien lo llaman comunmente app.js  

const express = require("express"); // aqui cargamos o importamos el módulo express
                                    // Se usa para cargar funciones del middleware en una dirección particular 
                                    //para todos los métodos de peticiones. (Trabajar con Rutas y HTTP)
const bodyParser = require("body-parser");

const app = express();  


const cors = require('cors');



        //----------Cargar archivos de RUTAS
app.use(require("./routes/consultas_registro_persona.js"));



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
//app.use(cors());



    //---------- Mas temas de Rutas



    //----------  Exportar


    // CREACION DEL SERVIDOR 
    // CREO QUE ESTO ES A LO QUE SE LE LLAMARÍA CREAR UN SERVIDOR !! ( Así lo entendí en el curso)
app.listen(5999, () => { console.log("WS_RegistroPersona Iniciados , puerto 5999") }) // Aqui va cualquier puerto para escuchar los WEB services



/*
app.use((req, res, next) => { res.header('Access-Control-Allow-Origin', '*'); next(); });

*/