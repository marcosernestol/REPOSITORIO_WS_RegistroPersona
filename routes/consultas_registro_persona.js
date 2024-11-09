const { obtenerUsuarios_RegistroPersona } = require("../controlador/registro_controller.js")
const express = require('express');
const app = express();


// ESTAS SON LAS RUTAS
app.get("/obtenerUsuarios_RegistroPersona", obtenerUsuarios_RegistroPersona);

app.post('/test/:id',(req,res) => {
    console.log(req.params.id);
    console.log(req.query.parametro2);
    // console.log(req.body.nombre);  // mmm... en el curso si le funcionó ; NO se por que a mi NO me funciona

    res.status(200).send({
        message:"Test de prueba"});
});


module.exports = app;