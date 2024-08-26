const express = require("express");
const app = express();

app.use(require("./routes/consultas.js"));


app.listen(5000, () => { console.log("Servicios Iniciados , puerto 5000") }) // Aqui va cualquier puerto para escuchar los WEB services