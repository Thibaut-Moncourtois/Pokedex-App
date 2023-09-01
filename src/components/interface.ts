export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

export interface TypePokemon {
  name: string;
  url: string;
}

export interface NavProps {
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
}
