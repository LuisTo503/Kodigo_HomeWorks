export class Cancion {
    private autor: string;

    constructor(public titulo: string, public genero: string) {
        this.autor = "";
    }

    getAutor(): string {
        return this.autor;
    }

    setAutor(autor: string): void {
        this.autor = autor;
    }

    mostrarDatos(): string {
        return `Título: ${this.titulo}\nGénero: ${this.genero}\nAutor: ${this.autor}`;
    }
}

// Exportar una interfaz para crear nuevas canciones en el main.ts
export interface CancionData {
    titulo: string;
    genero: string;
    autor: string;
}

// Ejemplo de canciones iniciales
const canciones: Cancion[] = [
    new Cancion('Volver a Empezar', 'Balada Contemporanea'),
    new Cancion('Llévame', 'Regae Latino'),
    new Cancion('Corazón Contento', 'Twist'),
    new Cancion('Close To You', 'City Pop'),
    new Cancion('Loveland, Island', 'City Pop'),
    new Cancion('Nakamarra', 'Acid Jazz'),
    new Cancion('Luna de Plata', 'Pop Latino'),
    new Cancion('More Today Than Yesterday', 'Pop'),
    new Cancion('Caney', 'Pop Latino')

];

canciones[0].setAutor('Julio Iglesias');
canciones[1].setAutor('Bebo Dumont - Cultura Profetica');
canciones[2].setAutor('Palito Ortega - Marisol');
canciones[3].setAutor('Miki Matsubara');
canciones[4].setAutor('Tatsuro Yamashita');
canciones[5].setAutor('Hiatus Kaiyote');
canciones[6].setAutor('La Garfield');
canciones[7].setAutor('Pat Upton');
canciones[8].setAutor('Ramayana - Jambene')

// Exportar la lista de canciones para usar en main.ts
export { canciones };
