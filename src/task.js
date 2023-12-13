
///tarea.js

class Tarea {

    constructor(titulo, descripcion) {
        this._id = Tarea.generarIdUnico();
        this._titulo = titulo;
        this._descripcion = descripcion;
        this._status = 'pendiente';
        this._tiempo = new MiTime(); // Inicializar la propiedad _tiempo con un objeto MiTime por defecto
    }

    get titulo() {
        return this._titulo;
    }

    get status() {
        return this._status;
    }
    set status(nuevoEstado){
        this._status = nuevoEstado;
    }
    get tiempo() {
        return this._tiempo;
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

    tareaCompletada() {
        this._status = 'completada';
    }
    tareaProgres() {
        this._status = 'progreso';
    }
    get id() {
        return this._id;
    }

    // ... (resto del código)

    static generarIdUnico() {
        // Esta función podría ser más sofisticada según tus necesidades
        return new Date().getTime(); // En este ejemplo, usamos la marca de tiempo como ID
    }

    asignarTiempo(tiempo) {
        this._tiempo = tiempo;
    }
}

///

class AdminTareas {

    constructor() {
        this.tareas = [];
    }

    añadirTarea(titulo, descripcion) {
        const nuevaTarea = new Tarea(titulo, descripcion);
        const time = new MiTime();
        nuevaTarea.asignarTiempo(time); // Asignar el objeto MiTime a la tarea
        this.tareas.push(nuevaTarea);
    }  
}

//
class TareaImportante extends Tarea {
    constructor(titulo, descripcion, prioridad) {
        super(titulo, descripcion);
        this._prioridad = prioridad;
    }

    realizarTarea() {
        // Implementación específica para una tarea importante
        console.log(`Realizando la tarea importante: ${this.titulo}`);
    }
}
//

class MiTime {

    constructor() {
        this._fecha = new Date();
        this._hora = new Date();
    }

    obtenerFechaFormateada() {
        return this._fecha.toLocaleDateString('es-us', { weekday: "long", month: "long", day : "numeric" });
    }

    obtenerHoraFormateada() {
        const opcionesDeFormato = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return this._hora.toLocaleTimeString(undefined, opcionesDeFormato);
    }
}
