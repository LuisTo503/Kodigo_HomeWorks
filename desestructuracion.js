/** DESESTRUCTURACION DE ARREGLOS Y OBJETOS */
/**
 * es la forma como podemos extraer ciertos elementos de un arreglo o de un objeto, la podemos almacenar variables
 */

const pokemon = {
    name: "Pikachu",
    type: "electric",
    id: 12,
    abilities: ["lanzar trueno", "golpe", "velocidad"],
    saludar: function(){
        console.log(`Hola soy un pokemon`);
    }
}

pokemon.type //electric
export const { name: poke, type, id, abilities, saludar } = pokemon;
//desestructuracion del arreglo
export const [item1, item2, item3] = abilities;

pokemon.abilities.map((item) => {
    //code..
})




