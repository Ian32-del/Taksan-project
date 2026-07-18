import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/products", key: "nav.products" },
  { to: "/services", key: "nav.services" },
  { to: "/why-taksan", key: "nav.why" },
  { to: "/team", key: "nav.team" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg gradient-brand text-white shadow-md">
            <Flame className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-brand">
            TAKSAN <span className="text-energy">ENERGY</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-brand bg-secondary" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-brand hover:bg-secondary/60" }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} setLang={setLang} />
          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-x flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-brand" }}
                inactiveProps={{ className: "text-foreground/80" }}
                className="py-2.5 text-sm font-medium"
              >
                {t(l.key)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center rounded-full border border-border bg-background p-0.5 text-xs">
      <button
        onClick={() => setLang("en")}
        className={cn(
          "px-2.5 py-1 rounded-full font-medium transition-colors",
          lang === "en" ? "bg-brand text-white" : "text-foreground/70 hover:text-brand",
        )}
      >
        🇬🇧 EN
      </button>
      <button
        onClick={() => setLang("fr")}
        className={cn(
          "px-2.5 py-1 rounded-full font-medium transition-colors",
          lang === "fr" ? "bg-brand text-white" : "text-foreground/70 hover:text-brand",
        )}
      >
        🇫🇷 FR
      </button>
    </div>
  );
}
