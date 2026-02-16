"use client";

import { useState } from "react";
import { PokemonDialog } from "./pokemon-dialog";
import { PokemonImage } from "./pokemon-image";

interface PokemonCardProps {
  name: string;
  image: string;
}

export function PokemonCard({ name, image }: PokemonCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleOpenDialog() {
    setIsDialogOpen((prev) => !prev);
  }

  return (
    <>
      <article
        className="bg-background border-3 rounded-xl shadow transition-all group p-2 hover:shadow-lg hover:-translate-y-1 "
        onClick={handleOpenDialog}
      >
        <h2 className="font-semibold text-sm capitalize w-full truncate">
          {name}
        </h2>
        <PokemonImage src={image} alt={name} />
      </article>

      <PokemonDialog
        name={name}
        onOpenChange={handleOpenDialog}
        open={isDialogOpen}
      />
    </>
  );
}
