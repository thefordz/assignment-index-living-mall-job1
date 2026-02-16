"use client";

import { PokemonSpecies } from "@/lib/types";
import { PokemonCard } from "./pokemon-card";

interface PokemonGridProps {
  pokemonSpecies: PokemonSpecies[];
}

export function PokemonSection({ pokemonSpecies }: PokemonGridProps) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-16 gap-2">
      {pokemonSpecies.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.image}
        />
      ))}
    </section>
  );
}
