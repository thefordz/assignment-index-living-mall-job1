"use client";

import { Loader2 } from "lucide-react";

export function LoadingBar() {
  return (
    <div className="flex gap-3 px-6 py-3 bg-secondary justify-center rounded-xl">
      <Loader2 className="animate-spin shrink-0" />
      <p className="leading-relaxed text-secondary-foreground">Loading...</p>
    </div>
  );
}
