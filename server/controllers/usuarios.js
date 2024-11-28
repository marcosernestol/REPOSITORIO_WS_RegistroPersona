
const usuarios=require('../models').usuarios; // hace referencia al archivo .js


function crear_usuario(req, res){
    usuarios.create(req.body) // Esto hace referencia al modelo "usuarios", y el metodo "create" es de sequelize.
    .then(usuario=>{
        res.status(200).send({usuario});
    })
    .catch(err=>{
        res.status(500).send({err});
    })

    };


function login(req, res){
        usuarios.findOne({  // Esto hace referencia al modelo "usuario"s, y el metodo "FindOne" También es de sequelize.
                        where:{
                            usuario:req.body.usuario,
                            password:req.body.password,
                        }
                    })  
        .then(usuario=>{  // En caso de que sí se encuentre un usuario
            
            if( usuario ){ // O sea si el USUARIO REALMENTE EXISTE y el valor es diferente a NULO
                res.status(200).send({usuario}); // El estatus 200 representa una busqueda EXITOSA.
            }else{
                res.status(401).send({message:"Acceso no autorizado"}); 
            };

     
        })
        .catch(err=>{ // en caso de que haya un error
            res.status(500).send({message:"Error al Buscar usuario"}); // El estatus 500 es un estatus = ERROR
        })
    
    };



    module.exports={
        crear_usuario, 
        login
    };