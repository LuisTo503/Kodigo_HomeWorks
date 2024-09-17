import './styles.css'



// Propiedades de la clase
class CabeceraPagina {
  private titulo: string;
  private color: string;
  private fuente: string;
  private alineacion: 'izquierda' | 'centro' | 'derecha';

  // Constructor para inicializar las propiedades
  constructor(titulo: string, color: string, fuente: string, alineacion: 'izquierda' | 'centro' | 'derecha') {
      this.titulo = titulo;
      this.color = color;
      this.fuente = fuente;
      this.alineacion = alineacion;
  }

  // Método para obtener el título, color y fuente
  obtenerInformacion(): { titulo: string, color: string, fuente: string } {
      return {
          titulo: this.titulo,
          color: this.color,
          fuente: this.fuente
      };
  }

  // Método para establecer la alineación del título
  establecerAlineacion(alineacion: 'izquierda' | 'centro' | 'derecha'): void {
      this.alineacion = alineacion;
  }

  // Método para imprimir todas las propiedades
  imprimirPropiedades(): void {
      console.log(`Título: ${this.titulo}`);
      console.log(`Color: ${this.color}`);
      console.log(`Fuente: ${this.fuente}`);
      console.log(`Alineación: ${this.alineacion}`);
  }
}

// Crear una instancia de CabeceraPagina
const miCabecera = new CabeceraPagina('Bienvenido', 'azul', 'Arial', 'centro');

// Obtener información de la cabecera
const info = miCabecera.obtenerInformacion();
console.log(info); // { titulo: 'Bienvenido', color: 'azul', fuente: 'Arial' }

// Cambiar la alineación
miCabecera.establecerAlineacion('izquierda');

// Imprimir todas las propiedades
miCabecera.imprimirPropiedades();
// Título: Bienvenido
// Color: azul
// Fuente: Arial
// Alineación: izquierda
