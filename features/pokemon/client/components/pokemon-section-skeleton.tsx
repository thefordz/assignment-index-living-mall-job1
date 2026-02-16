"use client";

import { PokemonCardSkeleton } from "./pokemon-card-skelton";

interface Props {
  count?: number;
}

export function PokemonSectionSkeleton({ count = 32 }: Props) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-16 gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <PokemonCardSkeleton key={index} />
      ))}
    </section>
  );
}
