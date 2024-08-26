const { obtenerVista } = require("../controlador/registro_controller.js")
const express = require('express');
const app = express();

app.get("/obtenerVista", obtenerVista);

module.exports = app;