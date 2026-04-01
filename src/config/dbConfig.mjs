//Configuracion de la base de Datos
import mongoose from 'mongoose';

const dns = require("dns/promises");
//Forzar servidores DNS: Google y Cloudflare
dns.setServers(["8.8.8.8", "1.1.1.1"]);

export async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://Grupo-23:grupo23@cursadanodejs.1s9ii.mongodb.net/Node-js');
        console.log('Conexión exitosa a MongoDB ');
    } catch (error) {
        console.error("Error al conectar a MongoDB ", error);
        process.exit(1); //process exit(1) para salir del proceso con un código de error
    }
}

/*
 Centralizar la configuración de conexión a MongoDB en dbConfig.mjs permite 
tener un único punto de configuración. Esto facilita el mantenimiento y asegura que cualquier cambio en la 
configuración se realice en un solo lugar, mejorando la modularidad y la reusabilidad del código. 
 */