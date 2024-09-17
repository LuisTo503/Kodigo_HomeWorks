import { cuenta } from './cuenta';

const depositarBtn = document.getElementById('depositar-btn') as HTMLButtonElement;
const retirarBtn = document.getElementById('retirar-btn') as HTMLButtonElement;
const mostrarDatosBtn = document.getElementById('mostrar-datos-btn') as HTMLButtonElement;
const resultado = document.getElementById('resultado') as HTMLPreElement;

function actualizarResultado(mensaje: string) {
    if (resultado) {
        resultado.textContent = mensaje;
    }
}

depositarBtn.addEventListener('click', () => {
    const montoDeposito = parseFloat((document.getElementById('monto-deposito') as HTMLInputElement).value);
    if (!isNaN(montoDeposito)) {
        const mensaje = cuenta.depositar(montoDeposito);
        actualizarResultado(mensaje);
    } else {
        actualizarResultado('Ingrese un monto válido para depositar.');
    }
});

retirarBtn.addEventListener('click', () => {
    const montoRetiro = parseFloat((document.getElementById('monto-retiro') as HTMLInputElement).value);
    if (!isNaN(montoRetiro)) {
        const mensaje = cuenta.retirar(montoRetiro);
        actualizarResultado(mensaje);
    } else {
        actualizarResultado('Ingrese un monto válido para retirar.');
    }
});

mostrarDatosBtn.addEventListener('click', () => {
    const datos = cuenta.mostrarDatos();
    actualizarResultado(`Datos de la cuenta:\n${datos}`);
});
