import './styles.css'

// Definir la clase CabeceraPagina
class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: 'izquierda' | 'centro' | 'derecha';

    constructor(titulo: string, color: string, fuente: string, alineacion: 'izquierda' | 'centro' | 'derecha') {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = alineacion;
    }

    obtenerInformacion(): { titulo: string, color: string, fuente: string } {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    }

    establecerAlineacion(alineacion: 'izquierda' | 'centro' | 'derecha'): void {
        this.alineacion = alineacion;
    }

    imprimirPropiedades(): void {
        // Crear una representación en HTML de las propiedades
        const container = document.getElementById('header-info');
        if (container) {
            container.innerHTML = `
                <h1 style="color: ${this.color}; font-family: ${this.fuente}; text-align: ${this.alineacion};">
                    ${this.titulo}
                </h1>
                <p>Color: ${this.color}</p>
                <p>Fuente: ${this.fuente}</p>
                <p>Alineación: ${this.alineacion}</p>
            `;
        }
    }
}

// Crear una instancia de la clase y usarla
const miCabecera = new CabeceraPagina('Bienvenido', 'blue', 'Arial', 'centro');
miCabecera.imprimirPropiedades();