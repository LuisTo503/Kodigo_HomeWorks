import { calculadora } from './calculadora';

(window as any).realizarOperacion = (operacion: string): void => {
    const num1 = parseFloat((document.getElementById('num1') as HTMLInputElement).value);
    const num2 = parseFloat((document.getElementById('num2') as HTMLInputElement).value);
    let resultado: number | string;

    try {
        switch (operacion) {
            case 'sumar':
                resultado = calculadora.sumar(num1, num2);
                break;
            case 'restar':
                resultado = calculadora.restar(num1, num2);
                break;
            case 'multiplicar':
                resultado = calculadora.multiplicar(num1, num2);
                break;
            case 'dividir':
                resultado = calculadora.dividir(num1, num2);
                break;
            case 'potencia':
                resultado = calculadora.potencia(num1, num2);
                break;
            case 'factorial':
                if (num2 !== 0) {
                    throw new Error('El factorial solo se aplica a un solo número.');
                }
                resultado = calculadora.factorial(num1);
                break;
            default:
                resultado = 'Operación no válida';
                break;
        }
    } catch (error) {
        if (error instanceof Error) {
            resultado = error.message;
        } else {
            resultado = 'Ocurrió un error desconocido';
        }
    }

    const resultadoElement = document.getElementById('resultado');
    if (resultadoElement) {
        resultadoElement.innerText = `Resultado: ${resultado}`;
    }
};

// Función para limpiar los inputs y el resultado
(window as any).limpiar = (): void => {
    (document.getElementById('num1') as HTMLInputElement).value = '';
    (document.getElementById('num2') as HTMLInputElement).value = '';
    const resultadoElement = document.getElementById('resultado');
    if (resultadoElement) {
        resultadoElement.innerText = '0';
    }
};
