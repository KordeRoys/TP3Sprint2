//Modelos de datos
/* Define el modelo de datos para superhéroes utilizando Mongoose, estableciendo la 
estructura y las reglas de validación para los documentos que serán almacenados en MongoDB */

import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({ //mongoose.Schema es una función que se utiliza para definir la estructura de los documentos en una colección de MongoDB. Permite especificar los campos, sus tipos de datos, y las reglas de validación.
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creador: String,
    createdAt: { type: Date, default: Date.now }
});

const superHero = mongoose.model('SuperHero', superheroSchema, 'Grupo-23'); //mongoose.model es una función que se utiliza para crear un modelo a partir de un esquema definido. El primer argumento es el nombre del modelo, el segundo es el esquema que define la estructura de los documentos, y el tercero es el nombre de la colección en MongoDB donde se almacenarán los documentos de este modelo.

export default superHero; //Exporta el modelo de superhéroe para que pueda ser utilizado en otras partes de la aplicación, como en controladores o rutas, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los documentos de superhéroes en la base de datos.

/*
 Definir el modelo de datos asegura que cada documento en la colección de 
superhéroes siga una estructura consistente, lo que permite tener un control de calidad sobre los datos. 
Mongoose facilita la validación y la gestión de los datos, garantizando que cada documento cumpla con los 
requisitos del esquema, como la obligatoriedad de ciertos campos y los tipos de datos. 

 */