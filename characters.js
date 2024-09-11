// Variable global para almacenar todos los personajes
let allCharacters = [];

export async function getAllCharacters() {
    try {
        const response = await fetch("https://dragonball-api.com/api/characters");
        const data = await response.json();
        const { items } = data;

        // Limpiar el contenedor antes de agregar los personajes
        const dragonBallContainer = document.getElementById('list-dragon-ball');
        dragonBallContainer.innerHTML = '';

        allCharacters = [];  // Limpiar el array global
        for(const character of items){
            const { id, name } = character;
            const response_character = await fetch(`https://dragonball-api.com/api/characters/${id}`);
            const data_character = await response_character.json();
            const { name: nameCharacter, race, image, originPlanet, transformations } = data_character;
            const { name: planet } = originPlanet;
            const itemTransformation = transformations.map(({ name }) => name);

            allCharacters.push({
                name: nameCharacter,
                race,
                image,
                planet,
                itemTransformation
            });

            const article = document.createElement('article');
            article.innerHTML = `
                <h4>${nameCharacter}</h4>
                <img src=${image} >
                <p>Raza: ${race}</p>
                <p>Planeta: ${planet}</p>
                <p>Tranformaciones: ${itemTransformation.length > 0 ? itemTransformation.join(', ') : 'No hay transformaciones'}</p>
            `;
            dragonBallContainer.appendChild(article);
        }
    } catch (error) {
        console.log('Error al obtener la data de dragon ball', error);
    }
}

export async function getPlanets() {
    try {
        const response = await fetch("https://dragonball-api.com/api/planets?limit=20");
        const data = await response.json();
        const { items } = data;

        const containerPlanet = document.querySelector('#planet');
        const select = document.createElement('select');
        select.id = 'planet-select';

        for(const planet_data of items) {
            const { name } = planet_data;
            select.innerHTML += `<option value="${name}">${name}</option>`;
        }
        containerPlanet.appendChild(select);
    } catch (error) {
        console.log("Error al obtener los planetas", error);
    }
}

// Función para filtrar personajes por planeta
export function filterCharactersByPlanet(planet) {
    const filteredCharacters = allCharacters.filter(character => character.planet === planet);
    const dragonBallContainer = document.getElementById('list-dragon-ball');
    dragonBallContainer.innerHTML = '';

    filteredCharacters.forEach(character => {
        const { name, race, image, itemTransformation } = character;

        const article = document.createElement('article');
        article.innerHTML = `
            <h4>${name}</h4>
            <img src=${image} >
            <p>Raza: ${race}</p>
            <p>Planeta: ${planet}</p>
            <p>Tranformaciones: ${itemTransformation.length > 0 ? itemTransformation.join(', ') : 'No hay transformaciones'}</p>
        `;
        dragonBallContainer.appendChild(article);
    });
}
