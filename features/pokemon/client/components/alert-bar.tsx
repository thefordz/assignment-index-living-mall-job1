"use client";

import { TriangleAlert } from "lucide-react";

interface AlertBarProps {
  message?: string;
}

export function AlertBar({ message }: AlertBarProps) {
  return (
    <div className="flex justify-center gap-3 px-6 py-3 bg-secondary  rounded-xl">
      <TriangleAlert className="text-red-500 shrink-0" />
      <p className="leading-relaxed text-secondary-foreground">{message}</p>
    </div>
  );
}
