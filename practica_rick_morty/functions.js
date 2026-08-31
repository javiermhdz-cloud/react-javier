console.log("Hello World Rick and Morty");

async function obtenerPersonajes() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log('Personajes:', data.results);
    return data.results;
}