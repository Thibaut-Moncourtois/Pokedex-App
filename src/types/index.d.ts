export interface Pokemon {
  id: number;
  name: lang;
  sprites: {
    front_default: string;
    regular: string;
  };
  types: {
    name: string;
  }[];
  pokedexId: number;
}

interface lang {
  fr: string;
}

export interface TypePokemon {
  name: lang;
  url: string;
}

export interface NavProps {
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
}

export interface Pokemons {
  name: string;
  url: string;
}

export interface PokemonCollectionProps {
  pokemons: Pokemon[];
  name: string;
}

export interface PokemonTypesProps {
  onChangeType: (type: string) => void;
}

export interface ArrowUp {
  onChangeUp: (type: string) => Void;
}
