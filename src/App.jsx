import PropTypes from "prop-types";
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
  return (
    <div className="App">
      <PokemonCard pokemon={pokemonList} />
    </div>
  );
}
export default App;
