import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pokemon } from '../interface';
import '../Pokemon.css';
import HeaderPokedex from '../Header/HeaderPokedex';
import Nav from '../Nav/Nav';
import PokemonCollection from '../PokemonCollection/PokemonCollection';

interface Pokemons {
  name: string;
  url: string;
}

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNexUrl] = useState<string>('');

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=20&offset=20'
      );

      setNexUrl(res.data.next);

      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]);
      });
    };

    getPokemon();
  }, []);

  const nextPage = async () => {
    let res = await axios.get(nextUrl);

    setNexUrl(res.data.next);

    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
    });
  };

  return (
    <div className="App">
      <HeaderPokedex />
      <Nav />
      <PokemonCollection pokemons={pokemons} />
      <button onClick={nextPage}>Charger</button>
    </div>
  );
}

export default App;
