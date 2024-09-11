import './style.css';
import { getAllCharacters, getPlanets, filterCharactersByPlanet } from './characters.js';

getPlanets();
getAllCharacters();

document.addEventListener('DOMContentLoaded', () => {
    const planetSelect = document.getElementById('planet-select');
    if (planetSelect) {
        planetSelect.addEventListener('change', (event) => {
            const selectedPlanet = event.target.value;
            filterCharactersByPlanet(selectedPlanet);
        });
    }
});

document.querySelector('#app').innerHTML = `
  <div>
    <h1>API DRAGON BALL</h1>
    <div id="planet">
        <label>Selecciona un planeta: </label>
    </div>
    <div id="list-dragon-ball"></div>
  </div>
`;

