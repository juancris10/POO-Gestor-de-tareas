

class Tarea {

    constructor(titulo, descripcion) {
        this._titulo = titulo;
        this._descripcion = descripcion;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(nuevaDescripcion) {
        this._descripcion = nuevaDescripcion;
    }

    
}



//
class TareaImportante extends Tarea {
    constructor(titulo, descripcion, prioridad) {
        super(titulo, descripcion);
        this._prioridad = prioridad;
    }
    get prioridad() {
        return this._prioridad
    }
    set prioridad(nvPrioridad) {
        if (nvPrioridad.toLowerCase() === "alta" || nvPrioridad.toLowerCase() === "baja") {
            this._prioridad = nvPrioridad;
        } else {
            console.error('Prioridad no válida. Debe ser "Alta" o "Baja".');
        }
    }


}
//

class AdminTareas {
    constructor() {
        //creo el array para guardar las tareas y así recorrerlo y mostrarlo
        this.tareas = [];
    }

    añadirTarea(titulo, descripcion, prioridad) {

        const nuevaTarea = new TareaImportante(titulo, descripcion, prioridad);
        this.tareas.push(nuevaTarea);
       
    }

    eliminarTarea(indice) {
        //uso el motodo de splice para eliminar
        this.tareas.splice(indice, 1);
    }
    
    modificarTarea(indice, nuevaTarea) {
        //modifico la tarea por el indice
        const tarea = this.tareas[indice];
        tarea.titulo = nuevaTarea.titulo;
        tarea.descripcion = nuevaTarea.descripcion;
        tarea.prioridad = nuevaTarea.prioridad;
   }
}

class MiTime {

    constructor() {
        this._fecha = new Date();
        this._hora = new Date();
    }

    obtenerFechaFormateada() {
        return this._fecha.toLocaleDateString('es-us', { weekday: "long", month: "long", day: "numeric" });
    }

}
