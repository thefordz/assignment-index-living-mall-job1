import { PokemonGenerationSkeleton } from "@/features/pokemon/client/components/pokemon-generation-skelton";
import { PokemonSectionSkeleton } from "@/features/pokemon/client/components/pokemon-section-skeleton";

export default async function Loading() {
  return (
    <div className="p-3">
      <div className="space-y-3">
        <PokemonGenerationSkeleton />
        <PokemonSectionSkeleton />
      </div>
    </div>
  );
}
