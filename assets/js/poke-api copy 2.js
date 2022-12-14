const pokeApi = {}

pokeApi.getPokemonDteail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 9) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDteail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((erro) => console.log(erro))
}
