import React from 'react';

interface Props {
  name: string;
  id: number;
  image: string;
  type: string;
}

// Ici on vient destructure les props pour venir récupérer UNIQUEMENT le contenu / l'objet de pokemon
function PokemonList({ pokemon }) {
  return (
    <div>
      <section className={`pokemon-list-container`}>
        <p className="pokemon-name">{pokemon.pokedexId}</p>
        <p className="pokemon-name">{pokemon.name.fr}</p>
        <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
        {/* <p className="pokemon-name"> Type: {type.toString()}</p> */}
      </section>
    </div>
  );
}

export default PokemonList;
