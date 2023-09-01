import React from 'react';
import LogoPokemon from '@assets/logopokemon.png';

function HeaderPokedex() {
  return (
    <header className="flex w-full justify-center p-10">
      <img className="w-48" src={LogoPokemon} alt="logo" />
    </header>
  );
}

export default HeaderPokedex;
