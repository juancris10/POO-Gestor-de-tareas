const adminTareas = new AdminTareas();


function añadirTarea() {
  const tituloInput = document.getElementById('titulo');
  const descripcionInput = document.getElementById('descripcion');

  const titulo = tituloInput.value.trim();
  const descripcion = descripcionInput.value.trim();


  if (titulo !== '' && descripcion !== '') {
    adminTareas.añadirTarea(titulo, descripcion);

    mostrarTareas();
    // Limpiar los campos después de añadir una tarea
    tituloInput.value = '';
    descripcionInput.value = '';
  } else {
    alert('Por favor, ingresa un título y una descripción.');
  }

}


function mostrarTareas() {
  const listaTareas = document.getElementById('taskList');
  listaTareas.innerHTML = '';  

  adminTareas.tareas.forEach(tarea => {
    const listItem = document.createElement('li');
    listItem.textContent = `${tarea.titulo} - ${tarea.status}`;

    const btnEnProgreso = document.createElement('button');
    btnEnProgreso.textContent = 'En progreso';
    btnEnProgreso.addEventListener('click', () => moverTarea('En progreso'));

    const btnTerminado = document.createElement('button');
    btnTerminado.textContent = 'Terminado';
    btnTerminado.addEventListener('click', () => moverTarea('Terminado'));

    // Asegúrate de que los botones se muestren/oculten según el estado de la tarea
    if (tarea.status === 'pendiente') {
      listItem.appendChild(btnEnProgreso);
      listItem.appendChild(btnTerminado);
    }

    listaTareas.appendChild(listItem);
  });
}
function moverTarea(estado) {
  const listaTareas = document.getElementById('taskList');
  const tareaSeleccionada = listaTareas.lastElementChild;

  if (tareaSeleccionada) {
    // Remove task from taskList
    listaTareas.removeChild(tareaSeleccionada);

    // Add task to the corresponding section in taskFormStatus
    const tareaEnProgreso = document.getElementById('tareaEnProgreso');
    const tareaTerminada = document.getElementById('tareaTerminada');

    const listItem = document.createElement('td');
    listItem.textContent = tareaSeleccionada.textContent;

    switch (estado) {
      case 'En progreso':
        tareaEnProgreso.appendChild(listItem);
        break;
      case 'Terminado':
        tareaTerminada.appendChild(listItem);
        break;
      // Puedes agregar casos adicionales para otros estados si es necesario
    }
  }

  // Toggle button visibility based on the new state
  const btnEnProgreso = document.getElementById('btn-en-progreso');
  const btnTerminado = document.getElementById('btn-terminado');

  if (estado === 'En progreso') {
    btnEnProgreso.style.display = 'none';
    btnTerminado.style.display = 'inline-block';
  } else if (estado === 'Terminado') {
    btnTerminado.style.display = 'none';
    btnTerminado.style.display = 'inline-block';

  }
  
  // Aquí añadimos el código para mostrar el formulario de estado después de mover la tarea
  const taskFormStatus = document.getElementById('taskFormStatus');
  taskFormStatus.style.display = 'block';
  // También podrías hacer scroll hacia la sección correspondiente si es necesario
  // taskEnProgreso.scrollIntoView({ behavior: 'smooth' });
}

const fechaID = document.getElementById('fecha');

fechaID.innerHTML = '';

const time = new MiTime()

const fecha = time.obtenerFechaFormateada()
const fechaHoraElementh2 = document.createElement('h4');
fechaHoraElementh2.textContent = `  ${fecha}`;

const fechaInssert = document.createElement('h4');

fechaInssert.appendChild(fechaHoraElementh2);

fechaID.appendChild(fechaInssert);

// Agrega esto al final de tu archivo app.js
const modal = document.getElementById('modal');

function abrirModal() {
  modal.style.display = 'block';
}

function cerrarModal() {
  modal.style.display = 'none';
}

function guardarPrioridad() {
  // Agrega aquí la lógica para guardar la duración
  cerrarModal(); // Cierra el modal después de guardar
}

// Evento de clic para abrir el modal cuando se hace clic en el botón
document.getElementById('btn-prioridad').addEventListener('click', abrirModal);