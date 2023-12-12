import React from 'react';

function NavBar({ handlePreviousClick, handleNextClick }) {
    return (
        <div className="pokemon"> 
 
          <button onClick={handlePreviousClick}>Précédent</button>
       
        
          <button onClick={handleNextClick}>Suivant</button>
       
       </div>
    );
  }
  
 

  export default NavBar;