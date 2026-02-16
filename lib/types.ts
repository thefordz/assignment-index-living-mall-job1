// type for response from poke api
export type GenerationAPIResponse = {
  id: number;
  name: string;
  pokemon_species: {
    name: string;
    url: string;
  }[];
};

export type PokemonAPIResponse = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
};

// type for formatted data used in the app
export type PokemonSpecies = {
  name: string;
  image: string;
};

export type Generation = {
  id: number;
  name: string;
  pokemon_sepecies: PokemonSpecies[];
};

export type Ability = {
  name: string;
};

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  abilities: Ability[];
};
