

const usuariosController=require('../controllers').usuarios;

// Aqui me ayudo charly
module.exports=(app)=>{
    app.post('/api/usuario',usuariosController.crear_usuario);
}


