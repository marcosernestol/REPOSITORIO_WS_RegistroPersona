
// Este archivo tambien lo llaman comunmente index.js ó app.js  
// Para ejecutar el WS con NODEMON, abrimos una consola No importa si es de PowerShell o de cMD
// y escribimos el comando :>  npm start
// Y podemos probar en algún navegador con la URL:  http://localhost:5999

const express = require("express"); // aqui cargamos o importamos el módulo express
                                    // Se usa para cargar funciones del middleware en una dirección particular 
                                    //para todos los métodos de peticiones. (Trabajar con Rutas y HTTP)
const bodyParser = require("body-parser");
require('dotenv').config();

// Polyfill para Node antiguos que no exponen Web Streams globalmente.
if (typeof globalThis.ReadableStream === 'undefined') {
        let streams;

        try {
                streams = require('stream/web');
        } catch (error) {
                streams = require('web-streams-polyfill/dist/ponyfill.js');
        }

        const { ReadableStream, WritableStream, TransformStream } = streams;
        globalThis.ReadableStream = ReadableStream;
        globalThis.WritableStream = WritableStream;
        globalThis.TransformStream = TransformStream;
}

if (!Array.prototype.at) {
        Object.defineProperty(Array.prototype, 'at', {
                value: function at(index) {
                        const i = Math.trunc(index) || 0;
                        const normalizedIndex = i < 0 ? this.length + i : i;
                        return this[normalizedIndex];
                },
        });
}

if (
        typeof globalThis.AbortSignal !== 'undefined' &&
        typeof globalThis.AbortSignal.prototype.throwIfAborted !== 'function'
) {
        globalThis.AbortSignal.prototype.throwIfAborted = function throwIfAborted() {
                if (this.aborted) {
                        const reason = this.reason || new Error('The operation was aborted.');
                        throw reason;
                }
        };
}

if (
        typeof globalThis.AbortSignal !== 'undefined' &&
        typeof globalThis.AbortSignal.any !== 'function' &&
        typeof globalThis.AbortController !== 'undefined'
) {
        globalThis.AbortSignal.any = function any(signals) {
                const controller = new AbortController();
                const signalList = Array.isArray(signals) ? signals : [];

                if (signalList.length === 0) {
                        return controller.signal;
                }

                const onAbort = (signal) => {
                        controller.abort(signal && signal.reason ? signal.reason : undefined);
                        for (const s of signalList) {
                                if (s && typeof s.removeEventListener === 'function') {
                                        s.removeEventListener('abort', listeners.get(s));
                                }
                        }
                };

                const listeners = new Map();

                for (const signal of signalList) {
                        if (!signal) {
                                continue;
                        }

                        if (signal.aborted) {
                                onAbort(signal);
                                break;
                        }

                        const handler = () => onAbort(signal);
                        listeners.set(signal, handler);
                        signal.addEventListener('abort', handler, { once: true });
                }

                return controller.signal;
        };
}

if (typeof globalThis.XMLHttpRequest === 'undefined') {
        globalThis.XMLHttpRequest = require('xhr2');
}

const app = express();  

//-------- MiddleWares
app.use(bodyParser.json()); // Cualquier cosa que llegue pasarlos a Json ( que tome en cuenta solo los Json)
app.use(bodyParser.urlencoded({extended:false})); // Esto es para que no acepte que se le envíen objetos anidados
        
        // Configurar cabeceras y cors
app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });


 //----------Cargar archivos de RUTAS
 //app.use(require("./routes/consultas_registro_persona.js"));
require('./server/routes/usuarios')(app); // esta instruccion incluye todos los app del controlador usuarios.
require('./server/routes/RegistroPersona')(app);
require('./server/routes/agente')(app);

    //---------- Mas temas de Rutas
    // Rutas
app.get('*',(req,res)=>{
        res.status(200).send({
         message: "Bienvenido WS_RegistroPersona 13/Nov"} );
 })

//----------  Exportar
module.exports=app;
