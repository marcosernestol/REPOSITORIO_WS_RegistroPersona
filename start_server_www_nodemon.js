
const http=require('http');
const app=require("./app.js");

const port=5999 ;  // const port=parseInt(process.env.port,10) || 5999 ;
app.set('port',port);

const server= http.createServer(app);
server.listen(port);
