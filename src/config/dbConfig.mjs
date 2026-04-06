//Configuracion de la base de Datos

import mongoose from 'mongoose';

import dns from "dns";
// Forzar servidores DNS: Google y Cloudflare
dns.setServers(["8.8.8.8", "1.1.1.1"]);


export async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://grupo-23:grupo-23@cluster0.blryo.mongodb.net/NodeMod3Cohorte5');
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