function PokemonCard({pokemon}){

  

    return <div>
      {pokemon.map((p)=> (
        
        p.imgSrc ? (<> <img src={p.imgSrc}/> 
        <p>{p.name}</p></>) : <p>{"???"}</p>
        
      )) }
        
    </div>
  
}

export default PokemonCard;

