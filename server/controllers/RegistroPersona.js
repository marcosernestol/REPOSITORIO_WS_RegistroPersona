
// aqui comenzamos a codificar el servicio .

// Esto si funciona , Vamos a utilizar el Mismo modelo de Usuarios ( para altas, ediciones y actualizaciones)
const Usuarios=require('../models').usuarios;
function RegistroPersonaGet(req, res){
       Usuarios.findAll(
             {
              where:{
                    activo:true
                  } 
             }
        )
       .then(RegistroPersona=>{
           res.status(200).send({RegistroPersona});
       })
       .catch(err=>{
           res.status(500).send({message: "Error en WS RegistroPersona"});
       })
    };
module.exports={
    RegistroPersonaGet
};




// ESTE SU FUNCIONABA, PERO ANTES DE METERME CON EL SEQUELIZER :( ya despues ya no le entendí como debería de funcionar.)
// const pool = require("../config/config_bd");
// const RegistroPersona = async(req, res) => {
//     try {
//         const resultado = await pool.query("select * from usuario_ejemplo_simple ");
//         if (resultado.rowCount > 1) {
//             res.status(200).send( // 200= todo bien , 400=No autorizado 404=No encontrado , 500=Error de Servidor
//                 {
//                     ok: true,
//                     respuesta: resultado.rows
//                 })
//         } else {
//             res.status(500).send({
//                 ok: false,
//                 respuesta: "Sin Resultados"
//             })
//         }
//     } catch (error) {
//         res.status(500).send({
//             ok: false,
//             respuesta: error
//         })
//     }
// }
// module.exports = { obtenerUsuarios_RegistroPersona }




