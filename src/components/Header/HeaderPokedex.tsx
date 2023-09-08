import React from 'react';
import LogoPokemon from '@assets/logopokemon.png';

function HeaderPokedex() {
  return (
    <header className="flex w-full justify-center p-10">
      <img className="w-48" src={LogoPokemon} alt="logo" />
      <div className="flex items-end">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs justify-center"
        />
      </div>
    </header>
  );
}

export default HeaderPokedex;
