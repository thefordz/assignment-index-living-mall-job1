"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Pokemon } from "@/lib/types";
import { useEffect, useState } from "react";
import { fetchPokemon } from "../../server/api/fetch-pokemon";
import { PokemonImage } from "./pokemon-image";
import { AlertBar } from "./alert-bar";
import { LoadingBar } from "./loading-bar";
import { PokemonAbilities } from "./pokemon-abilities";

interface PokemonDialogProps {
  name: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PokemonDialog({
  name,
  open,
  onOpenChange,
}: PokemonDialogProps) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    async function loadPokemonData() {
      try {
        setIsLoading(true);
        setIsError(null);
        setPokemon(null);

        const res = await fetchPokemon(name);
        setPokemon(res);
      } catch {
        setIsError("Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    }

    loadPokemonData();
  }, [open, name]);

  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent className="group">
        <DialogHeader>
          <DialogTitle className="capitalize text-start">{name}</DialogTitle>
          <DialogDescription className="sr-only"></DialogDescription>
        </DialogHeader>

        {isLoading && <LoadingBar />}

        {isError && <AlertBar message={isError} />}

        {pokemon && (
          <div className="flex gap-6 items-center">
            <PokemonImage
              src={pokemon.image}
              alt={pokemon.name}
              className="w-40"
            />

            <div className="w-full">
              <PokemonAbilities abilities={pokemon.abilities} />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
