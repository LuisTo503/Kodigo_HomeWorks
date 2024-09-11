import "./style.css";
import {
  getAllCharacters,
  getPlanets,
  filterCharactersByPlanet,
} from "./characters.js";

// Las implementaciones que se han hecho en las funciones getPlanets y getAllCharacters hacen 2 tareas en cada una
// (obtienen la data de la API y tambien la renderizan en el navegador). Por la parte de llamar a la API, estas funciones quedaron
// declaradas como asincronas y por tanto ambas devuelven una promesa. A pesar de que las estaba llamando 'antes' de obtener el
// el planetSelect para agregarle el eventListener, debido a que las funciones son async realmente el elemento planetSelect aun no
// existia en el DOM, porque es en la funcion getPlanets que se crea el elemento y se agrega al DOM. El event listener para el evento
// 'change' no se le estaba agregando a nada.

document.addEventListener("DOMContentLoaded", () => {
  // Aca espero a que ambas funciones 'terminen' su trabajo y luego obtengo la referencia al elemento planetSelect para agregarle
  // el event listener
  Promise.all([getPlanets(), getAllCharacters()]).then(() => {
    const planetSelect = document.getElementById("planet-select");

    planetSelect.addEventListener("change", (event) => {
      const selectedPlanet = event.target.value;
      filterCharactersByPlanet(selectedPlanet);
    });
  });
});

// Este codigo es innecesario. Ya tienes estos elementos creados en el index.html
// document.querySelector("#app").innerHTML = `
//   <div>
//     <h1>API DRAGON BALL</h1>
//     <div id="planet">
//         <label>Selecciona un planeta: </label>
//     </div>
//     <div id="list-dragon-ball"></div>
//   </div>
// `;
