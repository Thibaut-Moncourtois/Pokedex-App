import { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonTypes = () => {
  const [types, setTypes] = useState<TypePokemon[]>([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/type')
      .then((res) => {
        setTypes(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <nav className="w-full p-4 bg-white flex justify-center">
      <div className="relative">
        <span className="absolute text-gray-500 bg-white px-2 z-10 -translate-y-1/2 top-0 left-2 text-xs">
          Types
        </span>
        <select
          title="Type"
          className="py-2 border border-gray-500 px-20 rounded-md "
          name="Type"
          id="type"
        >
          {types.map((type, index) => (
            <option key={index} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default PokemonTypes;
