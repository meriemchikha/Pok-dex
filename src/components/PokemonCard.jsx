function PokemonCard(props) {
    console.log(props);
    const { pokemon } = props;
    const { imgSrc, name } = pokemon;
    return (
        <figure className="pokemon-card">
            <figcaption>{pokemon.name}</figcaption>
            {pokemon.imgSrc ? (
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p>???</p>
            )}
        </figure>
    );
}


export default PokemonCard;

