import { useEffect, useState } from 'react';
import axios from 'axios';

// TS
import { Pokemon } from '../../types';
// Styles
import '../../styles/Pokemon.css';

// Components
import HeaderPokedex from '../Header/HeaderPokedex';
import PokemonCollection from '../PokemonCollection/PokemonCollection';
import PokemonTypes from '../PokemonTypes/PokemonTypes';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const [pokemonsToDisplay, setPokemonsToDisplay] = useState<Pokemon[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');
  const [numberPokemonsToDisplay, setNumberPokemonsToDisplay] =
    useState<number>(50);

  // Appel API à l'initialisation de l'app

  const getPokemon = async () => {
    // Je récupère la TOTALITE des pokemons de l'API
    const res = await axios.get(
      'https://api-pokemon-fr.vercel.app/api/v1/pokemon'
    );
    const slicedPokemon = await res.data.slice(1, numberPokemonsToDisplay);

    // Je set ma variable d'état pokemons avec le résultat de ma const pokemonsSliced
    setPokemonsToDisplay(slicedPokemon);
  };

  const getPokemonByType = async () => {
    const res = await axios.get(
      `https://api-pokemon-fr.vercel.app/api/v1/types/${selectedType}`
    );

    const slicedPokemon = await res.data.pokemons.slice(
      1,
      numberPokemonsToDisplay
    );

    setPokemonsToDisplay(slicedPokemon);
  };

  //Faire une fonction getPokemonByName

  useEffect(() => {
    selectedType !== '' ? getPokemonByType() : getPokemon();
  }, [selectedType, numberPokemonsToDisplay]);

  return (
    <div className="App">
      <HeaderPokedex onChangeType={setSelectedType} />
      <SearchBar />
      <PokemonTypes onChangeType={setSelectedType} />
      <PokemonCollection pokemons={pokemonsToDisplay} />
      <div className="flex justify-center">
        <button
          className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded flex items-center"
          onClick={() =>
            setNumberPokemonsToDisplay(numberPokemonsToDisplay + 50)
          }
        >
          Charger
        </button>
      </div>
    </div>
  );
}

export default App;
