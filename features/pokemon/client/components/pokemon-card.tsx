"use client";

import Image from "next/image";

interface PokemonCardProps {
  name: string;
  image: string;
}

export function PokemonCard({ name, image }: PokemonCardProps) {
  return (
    <article className="bg-background border-3 rounded-xl shadow transition-all group p-2 hover:shadow-lg hover:-translate-y-1 ">
      <h2 className="font-semibold text-sm capitalize w-full truncate">
        {name}
      </h2>
      <div className="relative w-full  aspect-square overflow-hidden pointer-events-none ">
        <Image
          src={image}
          alt={name}
          fill
          className="absolute w-full h-full object-cover bg-center group-hover:scale-110 transition-transform"
        />
      </div>
    </article>
  );
}
