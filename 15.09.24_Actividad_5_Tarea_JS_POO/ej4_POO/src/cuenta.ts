export class Cuenta {
    private cantidad: number;

    constructor(
        public nombre: string,
        cantidadInicial: number,
        public tipoCuenta: string,
        public numeroCuenta: string
    ) {
        this.cantidad = cantidadInicial;
    }

    depositar(monto: number): string {
        if (monto < 5) {
            return 'El valor a depositar debe ser mayor a $5.00';
        } else {
            this.cantidad += monto;
            return `Depósito exitoso. Se ha depositado $${monto}. Saldo actual: $${this.cantidad}`;
        }
    }

    retirar(valor: number): string {
        if (valor < 5) {
            return 'El valor a retirar debe ser mayor a $5.00';
        } else if (this.cantidad < valor) {
            return 'Fondos insuficientes en la cuenta.';
        } else {
            this.cantidad -= valor;
            return `Retiro exitoso. Se ha retirado $${valor}. Saldo actual: $${this.cantidad}`;
        }
    }

    mostrarDatos(): string {
        return `Nombre: ${this.nombre}\nTipo de cuenta: ${this.tipoCuenta}\nNúmero de cuenta: ${this.numeroCuenta}\nSaldo actual: $${this.cantidad}`;
    }
}

// Crear una instancia de Cuenta para usar en el HTML
const cuenta = new Cuenta('Juan Pérez', 100, 'Ahorros', '123456789');
export { cuenta };
