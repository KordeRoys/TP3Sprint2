//Implementacion CRUD de SuperHero

import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await SuperHero.findById(id);
    }

    async obtenerTodos() {
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        RESOLVER
    }

    async obtenerMayoresDe30() {
        RESOLVER
    }
}
export default new SuperHeroRepository();

/*
SuperHeroRepository.mjs implementa los métodos definidos en la interfaz, 
interactuando directamente con MongoDB a través de Mongoose para realizar operaciones de datos.
 La centralización de estas operaciones en el repositorio mejora la organización y garantiza que el acceso a los 
datos se realice de manera controlada y uniforme. 
*/