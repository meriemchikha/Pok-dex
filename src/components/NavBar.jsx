import "../App.css";

// eslint-disable-next-line react/prop-types
function NavBar({ pokemonList, onPokemonClick }) {
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.id} onClick={() => onPokemonClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
