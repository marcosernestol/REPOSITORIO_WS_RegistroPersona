
// Este archivo tambien lo llaman comunmente app.js  

const express = require("express"); 
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


    // Rutas
    app.get('*',(req,res)=>{
        res.status(200).send({message: "Bienvenido al servidor Node.JS - RegistroPersona"} );
        })

    module.exports=app;
