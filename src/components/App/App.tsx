import { useEffect, useState } from 'react';
import axios from 'axios';

// TS
import { Pokemon } from '../../types';
// Styles
import '../../styles/Pokemon.css';

// Components
import SocialMedia from '../SocialMedia/SocialMedia';
import HeaderPokedex from '../Header/HeaderPokedex';
import PokemonCollection from '../PokemonCollection/PokemonCollection';
import PokemonTypes from '../PokemonTypes/PokemonTypes';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import ArrowUp from '../Arrow/Arrow';

function App() {
  const [pokemonsToDisplay, setPokemonsToDisplay] = useState<Pokemon[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');
  const [numberPokemonsToDisplay, setNumberPokemonsToDisplay] =
    useState<number>(50);
  const [arrowUp, setArrowUp] = useState(false);

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

  useEffect(() => {
    selectedType !== '' ? getPokemonByType() : getPokemon();
  }, [selectedType, numberPokemonsToDisplay]);

  return (
    <div className="App">
      <HeaderPokedex onChangeType={setSelectedType} />
      <SocialMedia />
      <SearchBar />
      <PokemonTypes onChangeType={setSelectedType} />
      <PokemonCollection pokemons={pokemonsToDisplay} name={''} />
      <div className="flex justify-center">
        <button
          className="bg-indigo-500 text-white py-2 px-8 leading-6 rounded-full flex 
          items-center font-semibold tracking-wide cursor-pointer relative shadow
          transition hover:bg-amber-400 hover:shadow-md
          outline-none ring-amber-500/70 ring-offset-2
          focus-visible:ring-2 focus:scale-[0.98]"
          onClick={() =>
            setNumberPokemonsToDisplay(numberPokemonsToDisplay + 50)
          }
        >
          Charger
        </button>
      </div>
      <ArrowUp />
      <Footer />
    </div>
  );
}

export default App;
