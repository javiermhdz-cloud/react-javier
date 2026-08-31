const pokemones = ["bulbasaur", "charizard", "mewtwo"];

async function obtenerPokemones() {
  try {
    const contenedor = document.getElementById("pokemon-container");

    for (const nombrePokemon of pokemones) {
      // Petición a la API
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
      const data = await response.json();

      // Extraemos la imagen y los 3 elementos pedidos
      //imagen
      const imagen = data.sprites.front_default;
      //nombre
      const nombre = data.name.toUpperCase();     
      //tipo
      const tipo = data.types[0].type.name;       
      //experiencia
      const experiencia = data.base_experience;

      // Creamos la tarjeta y la agregamos al HTML
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${imagen}" alt="${nombre}" />
        <h2>${nombre}</h2>
        <p><strong>Tipo:</strong> ${tipo}</p>
        <p><strong>Experiencia Base:</strong> ${experiencia} XP</p>
      `;

      contenedor.appendChild(card);
    }
  } catch (error) {
    console.error("Error al obtener la información de los Pokémon:", error);
  }
}

// Llamada a la función
obtenerPokemones();