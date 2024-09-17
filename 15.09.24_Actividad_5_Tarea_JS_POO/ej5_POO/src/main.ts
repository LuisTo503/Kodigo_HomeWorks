import { Empleado } from './empleado';

const crearEmpleadoBtn = document.getElementById('crear-empleado-btn') as HTMLButtonElement;
const resultado = document.getElementById('resultado') as HTMLPreElement;

function actualizarResultado(mensaje: string) {
    if (resultado) {
        resultado.textContent = mensaje;
    }
}

crearEmpleadoBtn.addEventListener('click', () => {
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const apellido = (document.getElementById('apellido') as HTMLInputElement).value;
    const direccion = (document.getElementById('direccion') as HTMLInputElement).value;
    const telefono = (document.getElementById('telefono') as HTMLInputElement).value;
    const edad = parseInt((document.getElementById('edad') as HTMLInputElement).value, 10);
    const sueldo = parseFloat((document.getElementById('sueldo') as HTMLInputElement).value);

    if (isNaN(edad) || isNaN(sueldo)) {
        actualizarResultado('Por favor, ingrese valores válidos para edad y sueldo.');
        return;
    }

    const empleado = new Empleado(nombre, apellido, direccion, telefono, edad, sueldo);
    const datos = empleado.mostrarDatos();
    actualizarResultado(datos);
});
