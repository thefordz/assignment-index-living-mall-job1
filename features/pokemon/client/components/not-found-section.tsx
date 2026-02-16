import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NotFoundSection() {
  return (
    <section className="min-h-[calc(100vh-58px-64px-24px-12px)] flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-muted-foreground text-xl">Not Found</p>
      <Button asChild>
        <Link href={"/"}>Back to Home</Link>
      </Button>
    </section>
  );
}
