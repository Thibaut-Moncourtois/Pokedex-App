import React from 'react';
import { Pokemon } from '../../types';

interface PokemonListProps {
  pokemon: Pokemon;
}

// Ici on vient destructure les props pour venir récupérer UNIQUEMENT le contenu / l'objet de pokemon
function PokemonList({ pokemon }: PokemonListProps) {
  if (pokemon.pokedexId === 0) return null;

  return (
    <div>
      <section className={`pokemon-list-container min-w-[544px] min-h-[576px]`}>
        <p className="pokemon-name">{pokemon.pokedexId}</p>
        <p className="pokemon-name">{pokemon.name.fr}</p>
        <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
        {/* <p className="pokemon-name"> Type: {type.toString()}</p> */}
      </section>
    </div>
  );
}

export default PokemonList;
