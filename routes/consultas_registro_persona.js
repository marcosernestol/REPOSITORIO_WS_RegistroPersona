const { obtenerUsuarios_RegistroPersona } = require("../controlador/registro_controller.js")
const express = require('express');
const app = express();

app.get("/obtenerUsuarios_RegistroPersona", obtenerUsuarios_RegistroPersona);

module.exports = app;