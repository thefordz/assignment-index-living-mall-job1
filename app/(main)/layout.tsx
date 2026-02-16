import { Header } from "@/features/layouts/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main className="p-3">{children}</main>
    </div>
  );
}
