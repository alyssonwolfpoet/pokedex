
console.log("Sucesso!!");

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}">
        </div>
    </li>
    `
}

// console.log(document.getElementsByClassName('pokemonList'))
const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

    // const newList = pokemons.map((pokemon) => {
    //     return convertPokemonToLi(pokemon)
    // })

    // const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon))
    // const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon)).join("")
    // const newList = pokemons.map(convertPokemonToLi).join("")

    // const newHtml = newList.join("")
    // pokemonList.innerHTML += newHtml
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("")
    

    // const listIntems = []

    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listIntems.push(convertPokemonToLi(pokemon))
    // }
    // console.log(listIntems)
})
