"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface PokemonImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function PokemonImage({ src, alt, className }: PokemonImageProps) {
  return (
    <div
      className={cn(
        "relative w-full  aspect-square overflow-hidden pointer-events-none ",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="absolute w-full h-full object-cover bg-center group-hover:scale-110 transition-transform"
      />
    </div>
  );
}
