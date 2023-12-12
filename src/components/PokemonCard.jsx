import React from "react";
import PropTypes from 'prop-types';

function PokemonCard({pokemon}){

  

    return <div>
      {pokemon.map((p)=> (
        
        p.imgSrc ? (<> <img src={p.imgSrc}/> 
        <p>{p.name}</p></>) : <p>{"???"}</p>
        
      )) }
        
    </div>
  
}
PokemonCard.prototype ={
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.img,
    }).isRequired
    }

export default PokemonCard;

