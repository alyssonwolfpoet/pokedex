const pokeApi = {}

function convertpokeApiDetailToPokemon(pokemonsDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokemonsDetail.order
    pokemon.name = pokemonsDetail.name
    const types = pokemonsDetail.types.map((typeSlot) => typeSlot.type.name)

     const [type] = types //array destruct

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokemonsDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDteail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertpokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDteail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((erro) => console.log(erro))
}
