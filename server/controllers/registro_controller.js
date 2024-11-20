const pool = require("../config/config_bd");

// aqui comenzamos a codificar el servicio .

const obtenerUsuarios_RegistroPersona = async(req, res) => {
    try {
        const resultado = await pool.query("select * from usuario_ejemplo_simple ");
        if (resultado.rowCount > 1) {
            res.status(200).send( // 200= todo bien , 400=No autorizado 404=No encontrado , 500=Error de Servidor
                {
                    ok: true,
                    respuesta: resultado.rows
                })
        } else {
            res.status(500).send({
                ok: false,
                respuesta: "Sin Resultados"
            })
        }

    } catch (error) {
        res.status(500).send({
            ok: false,
            respuesta: error
        })
    }
}

module.exports = { obtenerUsuarios_RegistroPersona }