import { Skeleton } from "@/components/ui/skeleton";

export function PokemonCardSkeleton() {
  return (
    <article className="bg-background border-3 rounded-xl p-2 space-y-3 ">
      <Skeleton className="h-4 w-2/3 round" />
      <Skeleton className="aspect-square    rounded-xl " />
    </article>
  );
}
