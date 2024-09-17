import { Persona } from './persona';

class Empleado extends Persona {
    private sueldo: number;

    constructor(
        nombre: string,
        apellido: string,
        direccion: string,
        telefono: string,
        edad: number,
        sueldoInicial: number
    ) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldoInicial;
    }

    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    imprimirSueldo(): string {
        return `Sueldo: $${this.sueldo.toFixed(2)}`;
    }

    mostrarDatos(): string {
        return `Nombre: ${this.nombre} ${this.apellido}\nDirección: ${this.direccion}\nTeléfono: ${this.telefono}\nEdad: ${this.edad}\n${this.esMayorDeEdad()}\n${this.imprimirSueldo()}`;
    }
}

export { Empleado };
