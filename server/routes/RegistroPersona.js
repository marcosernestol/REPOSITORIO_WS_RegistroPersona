
const {RegistroPersonaGet} = require('../controllers/RegistroPersona'); // Ha caray, estuvo raro ¿Por que encerró entre llaves a RegistroPersonaGet ? y si quito las llaves NO FUNCIONA :(
// const RegistroPersonaGet=require('../controllers').RegistroPersona;  // Y de esta otra forma me marca error, que Rao, no entiendo 

// Aqui me ayudo charly
module.exports=(app)=>{
     app.get('/api/RegistroPersona',RegistroPersonaGet); // obtenerUsuarios_RegistroPersona
}







