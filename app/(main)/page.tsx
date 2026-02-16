import { fetchGeneration } from "@/features/pokemon/server/api/fetch-generation";
import { fetchPokemon } from "@/features/pokemon/server/api/fetch-pokemon";

export default async function Home() {
  const generation = await fetchGeneration(1);
  const pokemon = await fetchPokemon(generation.pokemon_sepecies[0].name);

  return (
    <div>
      <pre>{JSON.stringify(generation, null, 2)}</pre>
      <pre>{JSON.stringify(pokemon, null, 2)}</pre>
    </div>
  );
}
