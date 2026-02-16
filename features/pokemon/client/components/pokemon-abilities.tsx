import { Ability } from "@/lib/types";
import { AbilityItem } from "./ability-item";

interface PokemonAbilityProps {
  abilities: Ability[];
}

export function PokemonAbilities({ abilities }: PokemonAbilityProps) {
  return (
    <div className=" h-full space-y-3">
      <p className="font-medium ">Abilities</p>
      <ul className="space-y-1 text-sm gap-3 flex flex-wrap  ">
        {abilities.map((ability) => (
          <AbilityItem key={ability.name} name={ability.name} />
        ))}
      </ul>
    </div>
  );
}
