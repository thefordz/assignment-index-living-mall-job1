import Link from "next/link";

export function Header() {
  return (
    <header className="h-16 w-full sticky top-0 bg-background z-50">
      <div className="px-3 h-full w-full flex items-center justify-between border-b-3">
        <Link href={"/"} className="text-2xl font-bold">
          Pokemon List
        </Link>
      </div>
    </header>
  );
}
