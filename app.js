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
    const hora = tarea.tiempo.obtenerHoraFormateada();
    const fecha = tarea.tiempo.obtenerFechaFormateada();

    // Crear un span para mostrar la fecha y hora al lado del título
    const fechaHoraSpan = document.createElement('span');

    fechaHoraSpan.textContent = ` Fecha: ${fecha}, Hora: ${hora}`;

    

    listItem.textContent = `${tarea.titulo} - ${tarea.status}`;
    listItem.appendChild(fechaHoraSpan);

    listaTareas.appendChild(listItem);
  }
  
  );

}


const fechaID = document.getElementById('fecha');
  fechaID.innerHTML = '';
  
  const time = new MiTime()
  const fecha = time.obtenerFechaFormateada()
  const fechaHoraElementh2 = document.createElement('h3');
  fechaHoraElementh2.textContent = `  ${fecha}`;

  const juan =  document.createElement('h3');

  juan.appendChild(fechaHoraElementh2);
  fechaID.appendChild(juan);
  


