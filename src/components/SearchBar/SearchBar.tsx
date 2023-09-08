import React from 'react';

function SearchBar() {
  return (
    <header className=" absolute top-10 right-20">
      <input
        type="text"
        placeholder="Trouver un Pokemon"
        className="input input-bordered w-full max-w-xs"
      />
    </header>
  );
}

export default SearchBar;
