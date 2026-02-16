"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-muted-foreground text-xl">Not Found</p>
      <Button asChild>
        <Link href={"/"}>Back to Home</Link>
      </Button>
    </div>
  );
}
