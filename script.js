async function poke() {
    const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
    const response = await fetch(url);
    const pokemons = await response.json();
    console.log(pokemons);
    console.log(pokemons.name);
    console.log(pokemons.game_indices[0].game_index);
    //document.getElementById('saida').innerHTML =

}
