import React from 'react';
import LogoPokemon from '@assets/logopokemon.png';
import { PokemonTypesProps } from '../../types';

function HeaderPokedex({ onChangeType }: PokemonTypesProps) {
  return (
    <header className="flex w-full justify-center p-10 cursor-pointer">
      <img
        className="w-48"
        src={LogoPokemon}
        alt="logo"
        onClick={() => onChangeType('')}
      />
    </header>
  );
}

export default HeaderPokedex;
