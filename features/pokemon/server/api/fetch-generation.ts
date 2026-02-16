import { Generation, GenerationAPIResponse, PokemonSpecies } from "@/lib/types";
import { BASE_POKE_API_URL } from "./base-api";
import { extractIdFromPokemonSpecies } from "@/lib/utils";
import { RAW_SPRITE_URL } from "@/lib/constants";

export async function fetchGeneration(generation: number): Promise<Generation> {
  const res = await fetch(`${BASE_POKE_API_URL}/generation/${generation}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch generation ${generation}`);
  }

  const data: GenerationAPIResponse = await res.json();

  const pokemon_sepecies: PokemonSpecies[] = data.pokemon_species.map(
    (pokemon) => {
      const id = extractIdFromPokemonSpecies(pokemon.url);

      return {
        name: pokemon.name,
        image: `${RAW_SPRITE_URL}/${id}.png`,
      };
    },
  );

  return {
    id: data.id,
    name: data.name,
    pokemon_sepecies,
  };
}
