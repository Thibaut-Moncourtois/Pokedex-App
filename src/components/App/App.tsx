import axios from 'axios';
import { useEffect, useState } from 'react';
import LogoPokemon from '@assets/logopokemon.png';
import { Pokemon } from '../interface';
import './App.css';
import '../Pokemon.css';
import PokemonCollection from './PokemonCollection';

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
      <header className="pokemon-header">{LogoPokemon}</header>
      <PokemonCollection pokemons={pokemons} />
      <button onClick={nextPage}>Charger</button>
    </div>
  );
}

export default App;
