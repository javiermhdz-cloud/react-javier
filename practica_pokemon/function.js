async function obtenerPokemon() {
  try {
    // Petición a la PokéAPI para consultar a Ditto
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
    const data = await response.json();

    console.log("Datos recibidos:", data);

    const contenedor = document.getElementById("pokemon-card");

    // Extraemos la información relevante
    const imagen = data.sprites.front_default; // 1. Imagen
    const nombre = data.name.toUpperCase();     // Elemento 1: Nombre
    const tipo = data.types[0].type.name;       // Elemento 2: Tipo principal
    const experiencia = data.base_experience;   // Elemento 3: Experiencia base

    // Insertamos la imagen y los 3 elementos en el HTML
    contenedor.innerHTML = `
      <div class="card">
        <img src="${imagen}" alt="${nombre}" />
        <h2>${nombre}</h2>
        <p><strong>Tipo:</strong> ${tipo}</p>
        <p><strong>Experiencia Base:</strong> ${experiencia} XP</p>
      </div>
    `;
  } catch (error) {
    console.error("Error al obtener la información del Pokémon:", error);
  }
}

// Llamada a la función
obtenerPokemon();