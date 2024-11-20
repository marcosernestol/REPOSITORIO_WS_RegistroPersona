
const usuarios=require('../models').usuarios;


function crear_usuario(req, res){
    usuarios.create(req.body)
    .then(usuario=>{
        res.status(200).send({usuario});
    })
    .catch(err=>{
        res.status(500).send({err});
    })

    }


    module.exports={
        crear_usuario
    }