import { Ability, Pokemon, PokemonAPIResponse } from "@/lib/types";
import { BASE_POKE_API_URL } from "./base-api";

export async function fetchPokemon(name: string): Promise<Pokemon> {
  const res = await fetch(`${BASE_POKE_API_URL}/pokemon/${name}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch pokemon ${name}`);
  }

  const data: PokemonAPIResponse = await res.json();

  const abilities: Ability[] = data.abilities.map((ability) => {
    return {
      name: ability.ability.name,
    };
  });

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    abilities,
  };
}
