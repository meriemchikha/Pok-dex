import React from "react";
import PropTypes from 'prop-types';

function PokemonCard(props) {
    
    const { pokemon } = props;
    const { imgSrc, name } = pokemon;
    console.log(props);

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
PokemonCard.prototype ={
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.img,
    }).isRequired
    }

export default PokemonCard;

