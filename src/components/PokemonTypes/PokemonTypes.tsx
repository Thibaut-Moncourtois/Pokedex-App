import { useEffect, useState } from 'react';
import axios from 'axios';
import { TypePokemon, PokemonTypesProps } from '../../types';

const PokemonTypes = ({ onChangeType }: PokemonTypesProps) => {
  const [types, setTypes] = useState<TypePokemon[]>([]);

  useEffect(() => {
    axios
      .get('https://api-pokemon-fr.vercel.app/api/v1/types') //'https://pokeapi.co/api/v2/type'
      .then((res) => {
        setTypes(res.data);
      });
  }, []);

  return (
    <nav className="w-full p-4 flex justify-center">
      <div className="relative">
        <span className="absolute text-gray-500 px-2 z-10 -translate-y-1/2 top-0 left-2 text-xs">
          Types
        </span>
        <select
          onChange={(e) => onChangeType(e.target.value)}
          title="Type"
          className="py-2 border border-gray-500 px-20 rounded-md "
          name="Type"
          id="type"
        >
          {types.map((type, index) => (
            <option key={index} value={type.name.fr}>
              {type.name.fr}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default PokemonTypes;
