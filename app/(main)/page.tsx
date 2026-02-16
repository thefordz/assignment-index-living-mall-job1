import { PokemonSection } from "@/features/pokemon/client/components/pokemon-section";
import { fetchGeneration } from "@/features/pokemon/server/api/fetch-generation";

export default async function Home() {
  const generation = await fetchGeneration(1);

  return (
    <div className="space-y-3">
      <h1 className="capitalize">{generation.name}</h1>
      <PokemonSection pokemonSpecies={generation.pokemon_species} />
    </div>
  );
}
