abstract class Persona {
    constructor(
        public nombre: string,
        public apellido: string,
        public direccion: string,
        public telefono: string,
        public edad: number
    ) {}

    esMayorDeEdad(): string {
        return this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
    }

    abstract mostrarDatos(): string;
}

export { Persona };
