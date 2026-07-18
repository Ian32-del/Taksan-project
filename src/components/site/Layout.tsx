import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <section className="relative gradient-brand text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_40%)]" />
      <div className="container-x relative py-20 md:py-28">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-energy">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
        {sub && <p className="mt-4 max-w-2xl text-white/80 text-lg">{sub}</p>}
      </div>
    </section>
  );
}
