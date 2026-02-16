import { BASE_POKE_API_URL } from "@/features/pokemon/server/api/base-api";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractIdFromPokemonSpecies(url: string) {
  const prefix = `${BASE_POKE_API_URL}/pokemon-species/`;

  //cut prefix and "/" after id for raw id
  const id = url.replace(prefix, "").replace("/", "");

  if (!id || isNaN(Number(id))) {
    throw new Error("Invalid ID");
  }

  return Number(id);
}
