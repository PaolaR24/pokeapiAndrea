import {
  saludar,
  buscarPokemon,
  buscarPokemonPorNombre,
} from "./controllers/controllers.js";

let root = document.getElementById("root");

/* EJEMPLO */
async function mostrarPokemones() {
  let arrayDePokemones = await buscarPokemon();
  console.log("Estoy dentro de funcion ejemplo", arrayDePokemones);

  let html = "";
  arrayDePokemones.forEach((pokemon) => {
    let cardPokemon = `<div class='card'>
                            <span>${pokemon.nombre}</span>
                            <span>${pokemon.id}</span>
                            <span>${pokemon.tipos[0].type.name}</span>
                            <img class='card-image' src='${pokemon.imagen}'/>
                        </div>`;

    html += cardPokemon;
  });

  root.innerHTML += html;
}

mostrarPokemones();
/* ------ */

//add event listener que va a ver que escribo en el input y ejecuta el buscar x nombre
// buscarPokemonPorNombre(nombre)

let botonDeBusqueda = document.getElementById("buscar-pokemon");
let barraDeBusqueda = document.getElementById("barra-pokemon");

botonDeBusqueda.addEventListener("click", async function (event) {
  event.preventDefault(); // evito que se refresque la pagina luego del click
  // console.log(barraDeBusqueda.value);
  let pokemonBuscado = await buscarPokemonPorNombre(barraDeBusqueda.value);
  let cardPokemon = `<div class='card'>
                          <span>${pokemonBuscado.nombre}</span>
                          <span>${pokemonBuscado.id}</span>
                          <span>${pokemonBuscado.tipos[0].type.name}</span>
                          <img class='card-image' src='${pokemonBuscado.imagen}'/>
                    </div>`;

  root.innerHTML = cardPokemon;
});
