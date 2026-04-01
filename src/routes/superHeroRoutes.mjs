//Rutas API para superhéroes
/*
Este archivo define las rutas necesarias para cada operación del controlador
*/

import express from 'express'; 
import { 
    obtenerSuperheroePorIdController, 
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController, 
    obtenerSuperheroesMayoresDe30Controller 
} from '../controllers/superheroesController.mjs'; 

const router = express.Router(); 

router.get('/heroes', obtenerTodosLosSuperheroesController); //router.get define una ruta GET para obtener todos los superhéroes
router.get('/heroes/:id', obtenerSuperheroePorIdController); 
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController); 
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

export default router; //Exporta el router para que pueda ser utilizado en app.mjs

/* 
La capa de rutas define los endpoints y mapea cada uno a su respectivo controlador, 
permitiendo que las solicitudes HTTP se manejen de forma estructurada y predecible
*/