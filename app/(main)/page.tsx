import { GenerationSelection } from "@/features/pokemon/client/components/generation-selection";
import { NotFoundSection } from "@/features/pokemon/client/components/not-found-section";
import { PokemonSection } from "@/features/pokemon/client/components/pokemon-section";
import { fetchGeneration } from "@/features/pokemon/server/api/fetch-generation";

interface HomeProps {
  searchParams: Promise<{ generation?: number }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { generation = 1 } = await searchParams;

  const generationData = await fetchGeneration(generation);

  return (
    <div>
      {!generationData || generation < 1 ? (
        <div className="space-y-3">
          <GenerationSelection
            generation={`Not Found ${generation.toString()}`}
          />
          <NotFoundSection />
        </div>
      ) : (
        <div className="space-y-3">
          <GenerationSelection generation={generationData.name} />
          <PokemonSection pokemonSpecies={generationData.pokemon_species} />
        </div>
      )}
    </div>
  );
}
