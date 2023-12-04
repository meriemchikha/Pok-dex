import PokemonCard from "./components/PokemonCard"

function App() {
  const pokemonList = [
    {
      name: "bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  const pokemon = pokemonList[0];

  return (
    <div className="App">
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}
export default App;
