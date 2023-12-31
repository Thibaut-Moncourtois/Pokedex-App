import React from 'react';
import { Pokemon } from '../../types';
import PokemonList from '../PokemonList/PokemonList';
import { PokemonCollectionProps } from '../../types';

function PokemonCollection({ pokemons }: PokemonCollectionProps) {
  console.log(pokemons);

  return (
    <section className="collection-container text-white mt-8 font-semibold flex justify-center items-center flex-wrap">
      {pokemons.map((pokemon) => (
        <PokemonList
          key={pokemon.pokedexId}
          pokemon={pokemon}
          // type={pokemon.types[0].type.name}
        />
      ))}
    </section>
  );
}

export default PokemonCollection;
