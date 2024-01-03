import "../App.css";

// eslint-disable-next-line react/prop-types
function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.id} onClick={() => setPokemonIndex(index)}>
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
