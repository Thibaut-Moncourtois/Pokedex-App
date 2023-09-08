import React from 'react';
import { Pokemon } from '../../types';
import PokemonList from '../PokemonList/PokemonList';
import { PokemonCollectionProps } from '../../types';

function PokemonCollection({ pokemons }: PokemonCollectionProps) {
  return (
    <section className="collection-container text-white mt-8 font-semibold flex justify-center items-center flex-wrap">
      {pokemons.map((pokemon) => (
        <PokemonList key={pokemon.pokedexId} pokemon={pokemon} />
      ))}
    </section>
  );
}

export default PokemonCollection;
