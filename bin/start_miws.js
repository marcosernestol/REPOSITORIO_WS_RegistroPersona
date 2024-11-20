

const http = require('http');
const app=require("../app");  // const app=require("./app.js");  // 
 
const port=parseInt(process.env.port,10) || 5999 ; // si hay una variable de entorno la toma, de lo contrario asigna el puerto 5999
app.set('port',port);

    // CREO QUE ESTO ES A LO QUE SE LE LLAMARÍA CREAR UN SERVIDOR !! ( Así lo entendí en el curso)
   //  app.listen(5999, () => { console.log("WS_RegistroPersona Iniciados , puerto 5999") }) // Aqui va cualquier puerto para escuchar los WEB services


const server= http.createServer(app);
// server.listen(port , () => { console.log("WS_RegistroPersona Iniciados , puerto 5999") });
server.listen(port);
