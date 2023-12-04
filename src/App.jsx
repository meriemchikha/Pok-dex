import { useState } from "react";
import PropTypes from "prop-types";
import PokemonCard from "./components/PokemonCard"

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePreviousClick = () => {
    if (pokemonIndex > 0){
      setPokemonIndex((pokemonIndex) => pokemonIndex - 1);
    }
    
  };

  const handleNextClick = () => {
    if (pokemonIndex < 0){
      setPokemonIndex((pokemonIndex) => pokemonIndex + 1);
    }
    
  };

  return (
    <div>
      <h1>{pokemonList[pokemonIndex]}</h1>
      {pokemonIndex > 0 && (
        <button onClick={handlePreviousClick}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleNextClick}>Suivant</button>
      )}
    </div>
  );
}

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
export default App;
