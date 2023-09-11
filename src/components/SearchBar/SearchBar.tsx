import React from 'react';

function SearchBar(): JSX.Element {
  return (
    <header className="absolute top-10 right-20">
      <input
        type="text"
        placeholder="Rechercher un Pokemon"
        name="search"
        className="input input-bordered w-full max-w-xs"
      />
    </header>
  );
}

export default SearchBar;
