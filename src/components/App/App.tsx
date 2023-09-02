import { useEffect, useState } from 'react';
import axios from 'axios';

// TS
import { Pokemon, Pokemons } from '../interface';
// Styles
import '../Pokemon.css';

// Components
import HeaderPokedex from '../Header/HeaderPokedex';
import Nav from '../Nav/Nav';
import PokemonCollection from '../PokemonCollection/PokemonCollection';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  // const [nextUrl, setNextUrl] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');

  // Appel API à l'initialisation de l'app
  useEffect(() => {
    const getPokemon = async () => {
      // Je récupère la TOTALITE des pokemons de l'API
      const res = await axios.get(
        'https://api-pokemon-fr.vercel.app/api/v1/pokemon?limit=50'
      );

      // Correspond au nombre de pokemons que je veux faire apparaître
      const max = 50;

      // Parmi les résultats de la requête ci-dessus, je prend (slice) seulement les 50 premiers
      const pokemonsSliced = res.data.slice(1, max);

      // Je set ma variable d'état pokemons avec le résultat de ma const pokemonsSliced
      setPokemons(pokemonsSliced);
    };

    getPokemon();
  }, []);

  return (
    <div className="App">
      <HeaderPokedex />
      {/* <Nav setSelectedType={setSelectedType} /> */}
      <PokemonCollection pokemons={pokemons} />
      {/* Créer une callback handleClick qui change l'état du nombre de pokemon que l'on souhaite filtrer de notre premier appel API.
      Indice : useState...
      */}
      <button>Charger</button>
    </div>
  );
}

export default App;
