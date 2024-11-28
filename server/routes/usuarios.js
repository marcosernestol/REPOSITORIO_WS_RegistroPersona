

const usuariosController=require('../controllers').usuarios;

module.exports=(app)=>{
    app.post('/api/usuario',usuariosController.crear_usuario); // Ruta para el controlador de la funcion de Crear usuario
    app.post('/api/login',usuariosController.login); // Ruta para el controlador de la funcion de Buscar usuario
}


