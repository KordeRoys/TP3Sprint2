//Interfaz CRUD

class IRepository {
    obtenerPorId(id) {
        throw new Error("Método 'obtener PorId()' no implementado");
    }
    obtenerTodos() {
        throw new Error("Método 'obtener Todos ()' no implementado");
    }
    buscarPorAtributo(atributo, valor) {
        throw new Error("Método 'buscarPorAtributo()' no implementado");
    }
    obtenerMayoresDe30() {
        throw new Error("Método 'obtener Mayores De30()' no implementado");
    }
}
export default IRepository;

/* 
 La interfaz IRepository.mjs proporciona una abstracción de los métodos CRUD 
que deben ser implementados por cualquier repositorio. Esto asegura que todas las clases de repositorio 
mantengan consistencia en sus métodos, mejorando la mantenibilidad y facilitando cambios futuros en la 
implementación. 
*/