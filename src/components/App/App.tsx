import { useEffect, useState } from 'react';
import axios from 'axios';

// TS
import { Pokemon, Pokemons } from '../interface';
// Styles
import '../Pokemon.css';

// Components
import HeaderPokedex from '../Header/HeaderPokedex';
import PokemonCollection from '../PokemonCollection/PokemonCollection';
import PokemonTypes from '../PokemonTypes/PokemonTypes';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonsToDisplay, setPokemonsToDisplay] = useState<Pokemon[]>([]);
  // const [nextUrl, setNextUrl] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>();
  const [numberPokemonsToDisplay, setNumberPokemonsToDisplay] = useState(50);

  const selectTypeHandler = (type: string) => {
    console.log(type);
    setNumberPokemonsToDisplay(50);

    setSelectedType(type);
  };

  const clickLoadMoreHandler = () => {
    setNumberPokemonsToDisplay((state) => state + 100);
  };

  // Appel API à l'initialisation de l'app
  useEffect(() => {
    const getPokemon = async () => {
      // Je récupère la TOTALITE des pokemons de l'API
      const res = await axios
        .get('https://api-pokemon-fr.vercel.app/api/v1/pokemon')
        .catch((err) => console.log(err));

      // Correspond au nombre de pokemons que je veux faire apparaître
      // const max = 50;

      // Parmi les résultats de la requête ci-dessus, je prend (slice) seulement les 50 premiers
      const allPokemons = res.data;
      const pokemonsSliced = allPokemons.slice(1, numberPokemonsToDisplay);

      // Je set ma variable d'état pokemons avec le résultat de ma const pokemonsSliced
      setPokemons(allPokemons);
      setPokemonsToDisplay(pokemonsSliced);
    };

    getPokemon();
  }, []);

  useEffect(() => {
    let filteredPokemons = pokemons.filter((pokemon) => {
      console.log({ pokemon });

      return pokemon?.types?.some((type) => type.name === selectedType);
    });

    filteredPokemons = filteredPokemons.slice(1, numberPokemonsToDisplay);

    setPokemonsToDisplay(filteredPokemons);
  }, [selectedType, numberPokemonsToDisplay]);

  return (
    <div className="App">
      <HeaderPokedex />
      <PokemonTypes onChangeType={selectTypeHandler} />
      {/* <Nav setSelectedType={setSelectedType} /> */}
      <PokemonCollection pokemons={pokemonsToDisplay} />
      {/* Créer une callback handleClick qui change l'état du nombre de pokemon que l'on souhaite filtrer de notre premier appel API.
      Indice : useState...
      */}
      <div className="flex justify-center">
        <button
          className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded flex items-center"
          onClick={clickLoadMoreHandler}
        >
          Charger
        </button>
      </div>
    </div>
  );
}

export default App;
