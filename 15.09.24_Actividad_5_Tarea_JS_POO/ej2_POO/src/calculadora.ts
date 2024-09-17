class Calculadora {
    // Método para sumar dos números
    sumar(a: number, b: number): number {
        return a + b;
    }

    // Método para restar dos números
    restar(a: number, b: number): number {
        return a - b;
    }

    // Método para multiplicar dos números
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // Método para dividir dos números
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error('No se puede dividir por cero.');
        }
        return a / b;
    }

    // Método para calcular la potencia de un número
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // Método para calcular el factorial de un número
    factorial(n: number): number {
        if (n < 0) {
            throw new Error('El factorial no está definido para números negativos.');
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Crear una instancia de la calculadora y usarla
const calculadora = new Calculadora();

// Exportar la instancia para usarla en el archivo HTML
export { calculadora };
