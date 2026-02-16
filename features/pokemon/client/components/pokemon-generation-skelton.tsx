import { Skeleton } from "@/components/ui/skeleton";

export function PokemonGenerationSkeleton() {
  return (
    <div className="w-full  flex items-center justify-center">
      <div className="p-2 bg-background border-3 h-14.5 w-62.5 rounded-full ">
        <Skeleton className="w-full h-full rounded-full" />
      </div>
    </div>
  );
}
