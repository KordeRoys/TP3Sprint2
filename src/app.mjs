//Archivo principal de la aplicaion
/*
Inicializa el servidor, conecta a la base de datos, y carga las rutas para gestionar todas las 
solicitudes relacionadas con superhéroes. 

 */

const dns = require("dns/promises");
//Forzar servidores DNS: Google y Cloudflare
dns.setServers(["8.8.8.8", "1.1.1.1"]);


import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON 
app.use(express.json());

// Conexión a MongoDB 
connectDB();

// Configuración de rutas 
app.use('/api', superHeroRoutes);

// Manejo de errores para rutas no encontradas 
app.use((req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontrada" });
});


// Iniciar el servidor 
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});


/*
app.mjs centraliza la configuración de la aplicación, conectando a MongoDB y 
cargando las rutas necesarias. Esto permite una configuración modular y fácilmente escalable, asegurando 
que la aplicación esté lista para manejar solicitudes en el entorno de desarrollo o producción.
*/