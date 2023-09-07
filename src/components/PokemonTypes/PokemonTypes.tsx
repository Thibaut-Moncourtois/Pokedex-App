import { useEffect, useState } from 'react';
import axios from 'axios';

type Props = {
  onChangeType: (type: string) => void;
};

const PokemonTypes = ({ onChangeType }: Props) => {
  const [types, setTypes] = useState<TypePokemon[]>([]);

  const changeTypeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = event.target.value;
    onChangeType(selectedType);
  };

  useEffect(() => {
    axios
      .get('https://api-pokemon-fr.vercel.app/api/v1/types') //'https://pokeapi.co/api/v2/type'
      .then((res) => {
        console.log({ res: res.data });

        setTypes(res.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  return (
    <nav className="w-full p-4 bg-white flex justify-center">
      <div className="relative">
        <span className="absolute text-gray-500 bg-white px-2 z-10 -translate-y-1/2 top-0 left-2 text-xs">
          Types
        </span>
        <select
          onChange={changeTypeHandler}
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
