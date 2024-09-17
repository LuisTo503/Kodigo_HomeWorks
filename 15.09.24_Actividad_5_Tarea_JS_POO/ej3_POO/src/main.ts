import { canciones } from './cancion';

const mostrarBtn = document.getElementById('mostrar-btn') as HTMLButtonElement;
const cancionInfo = document.getElementById('cancion-info') as HTMLDivElement;
const seleccionarCancion = document.getElementById('seleccionar-cancion') as HTMLSelectElement;

// Función para actualizar el select con las opciones de canciones
function actualizarSelect() {
    if (seleccionarCancion) {
        seleccionarCancion.innerHTML = ''; // Limpiar opciones existentes
        canciones.forEach((cancion, index) => {
            const option = document.createElement('option');
            option.value = index.toString();
            option.textContent = cancion.titulo;
            seleccionarCancion.appendChild(option);
        });
    }
}

// Función para mostrar los datos de la canción seleccionada
function mostrarDatosCancion() {
    const index = parseInt(seleccionarCancion.value, 10);
    const cancionSeleccionada = canciones[index];
    
    if (cancionInfo && cancionSeleccionada) {
        cancionInfo.innerText = cancionSeleccionada.mostrarDatos();
    }
}

// Inicializar el select y manejar el evento de clic
mostrarBtn.addEventListener('click', mostrarDatosCancion);
window.addEventListener('load', actualizarSelect);
