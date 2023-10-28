export function saludar() {
  console.log("Hola soy Andrea Ruiz");
}

//LLAMADOS A LA API
export async function buscarPokemon() {
  let data = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=25`);
  let dataParseada = await data.json(); // {}.results↓

  //console.log(dataParseada.results); // [ {url,name},{},{}]
  let arrayDePokemones = [];

  for (let i = 0; i < dataParseada.results.length; i++) {
    const pokemon = dataParseada.results[i];

    // console.log("i= ", i);
    // console.log("Pokemon que estamos iterando:", pokemon.url);
    let pokemonData = await fetch(pokemon.url); //https://pokeapi.co/api/v2/pokemon/1/
    let pokemonParseado = await pokemonData.json(); // {}.

    let pokemonFormateado = {
      id: pokemonParseado.id, //"number"
      nombre: pokemonParseado.name, //"string"
      tipos: pokemonParseado.types, // []
      imagen: pokemonParseado.sprites.other.dream_world.front_default, //"string"
    };
    // console.log(pokemonFormateado);
    arrayDePokemones.push(pokemonFormateado);
  }

  return arrayDePokemones; //[{},{},{}]
}

export async function buscarPokemonPorNombre(nombre) {
  let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
  let pokemonParseado = await data.json(); // {}.results↓

  let pokemonFormateado = {
    id: pokemonParseado.id, //"number"
    nombre: pokemonParseado.name, //"string"
    tipos: pokemonParseado.types, // []
    imagen: pokemonParseado.sprites.other.dream_world.front_default, //"string"
  };
  //console.log(pokemonFormateado);
  return pokemonFormateado;
}

/* Ejecuciones de prueba*/
//saludar();
//buscarPokemon();
//buscarPokemonPorNombre("charizard");
