const adminTareas = new AdminTareas();
let tareaSeleccionadaIndex = null; // Almacena el índice de la tarea seleccionada

function mostrarTareas() {
  const listaTareas = document.getElementById("taskList");// elemento ul
  listaTareas.innerHTML = '';

  adminTareas.tareas.forEach((tarea, indice) => {
    
    const listItem = document.createElement('li');
    listItem.textContent = `${tarea.titulo} - ${tarea.descripcion}`;
    
    listItem.classList.add('tarea-list-item'); //agrego la clase al archivo css

    
    if (tarea.prioridad && tarea.prioridad.toLowerCase() === 'alta') { //cambio el color segun la prioridad que se elija
      listItem.style.color = 'red';
    } else if (tarea.prioridad && tarea.prioridad.toLowerCase() === 'baja') {
      listItem.style.color = 'green';
    }

    
    const btnEliminar = crearBoton('Eliminar', 'btn-eliminar', () => {
      adminTareas.eliminarTarea(indice);
      mostrarTareas();
    });
    

    listItem.appendChild(btnEliminar);

    // Agregar botón "Modificar"
    const btnModificar = crearBoton('Modificar', 'btn-modificar', (e) => {
      e.preventDefault();
      tareaSeleccionadaIndex = indice; // Almacenar el índice de la tarea seleccionada
      const tituloModificar = document.getElementById('tituloModificar');
      const descripcionModificar = document.getElementById('descripcionModificar');
      const prioridadModificar = document.getElementById('prioridadModificar');

      if (tituloModificar && descripcionModificar && prioridadModificar) {
        tituloModificar.value = tarea.titulo;
        descripcionModificar.value = tarea.descripcion;
        prioridadModificar.value = tarea.prioridad;
        abrirModalModificar();
      }
    });

    listItem.appendChild(btnModificar);
    listaTareas.appendChild(listItem);
  });
}

function crearBoton(texto, clase, onClick) {
  const boton = document.createElement('button');
  boton.textContent = texto;
  boton.classList.add(clase);
  boton.addEventListener('click', onClick);
  return boton;
}

const fechaID = document.getElementById('fecha');

const time = new MiTime()
const fecha = time.obtenerFechaFormateada()
const fechaHoraElementh2 = document.createElement('h3');
fechaHoraElementh2.textContent = `  ${fecha}` ;

fechaID.appendChild(fechaHoraElementh2);

const modal = document.getElementById('modal');
const modalModificar = document.getElementById('modalModificar');

function abrirModal() {
  modal.style.display = 'block';
}

function cerrarModal() {
  modal.style.display = 'none';
}

function abrirModalModificar() {
  modalModificar.style.display = 'block';
}

function cerrarModalModificar() {
  modalModificar.style.display = 'none';
}

function guardarTarea(prioridad) {
  const tituloInput = document.getElementById('titulo');
  const descripcionInput = document.getElementById('descripcion');

  const titulo = tituloInput.value.trim();
  const descripcion = descripcionInput.value.trim();

  if (titulo !== '' && descripcion !== '') {
    adminTareas.añadirTarea(titulo, descripcion, prioridad);
    cerrarModal();
  }
  mostrarTareas();
  document.getElementById("taskForm").reset();
}

// Evento de clic para abrir el modal cuando se hace clic en el botón
document.getElementById('btn-prioridad').addEventListener('click', abrirModal);
document.getElementById('btn-cerrar').addEventListener('click', cerrarModal);
document.getElementById('btn-guardar-modificar').addEventListener('click', guardarCambiosModificar);



function guardarCambiosModificar() {
  if (tareaSeleccionadaIndex !== null) {
    const titulo = document.getElementById('tituloModificar').value;
    const descripcion = document.getElementById('descripcionModificar').value;
    const prioridad = document.getElementById('prioridadModificar').value;

    adminTareas.modificarTarea(tareaSeleccionadaIndex, {
      titulo,
      descripcion,
      prioridad
    });

    cerrarModalModificar();
    mostrarTareas();
    tareaSeleccionadaIndex = null;
  }
}