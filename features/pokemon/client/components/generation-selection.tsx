"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface GenerationSelectionProps {
  generation: string;
}

export function GenerationSelection({ generation }: GenerationSelectionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const generationParams = searchParams.get("generation") ?? 1;

  function handleNext() {
    router.push(`/?generation=${Number(generationParams) + 1}`);
  }

  function handleBack() {
    router.push(`/?generation=${Number(generationParams) - 1}`);
  }

  return (
    <div className="w-full flex items-center justify-center ">
      <div className="bg-background flex items-center gap-6 p-2 rounded-full border-3">
        <Button
          type="button"
          className="rounded-full"
          size={"icon"}
          variant={"secondary"}
          onClick={handleBack}
          disabled={Number(generationParams) <= 1}
        >
          <ChevronLeft />
        </Button>
        <p className="uppercase">{generation}</p>
        <Button
          type="button"
          className="rounded-full"
          size={"icon"}
          variant={"secondary"}
          onClick={handleNext}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
