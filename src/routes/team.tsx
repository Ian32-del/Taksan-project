import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import newTeam from "@/assets/team.jpeg";
import { UserCircle2 } from "lucide-react";


export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Taksan Energy Limited" },
      { name: "description", content: "Meet the leadership behind Taksan Energy Limited — executive, operations, logistics and customer relations." },
      { property: "og:title", content: "Our Team — Taksan Energy" },
      { property: "og:description", content: "The people delivering reliable energy across Africa." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { name: "Abdullahi Irshet Sheikh", role: "Chief Executive Officer", bio: "Two decades of leadership in African energy and cross-border logistics." },
  { name: "Bashi Abdule", role: "Executive Assistant", bio: "Directs regional operations across Kenya, DRC and Mozambique." },
  { name: "Abdirashid Ibrahim Mohamed", role: "Manager", bio: "Oversees fleet operations, safety and on-time delivery performance." },
  { name: "Mohamed Abdullahi", role: "Accountant", bio: "Manages financial planning, reporting, and compliance to support the company's operational and strategic objectives." },
  // { name: "David Kimani", role: "Head of Quality & Safety", bio: "Ensures every product meets our uncompromising quality standards." },
  // { name: "Isabelle Manuel", role: "Country Manager — Mozambique", bio: "Leads our operations and business development in Mozambique." },
];

const palette = [
  "from-blue-500 to-indigo-700",
  "from-orange-400 to-red-600",
  "from-emerald-500 to-teal-700",
  "from-purple-500 to-fuchsia-700",
  "from-amber-500 to-orange-700",
  "from-sky-500 to-cyan-700",
];

function TeamPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <img
          src={newTeam}
          alt="Taksan T.C. Station at night"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            animation: "zoomOut 8s ease-out forwards",
          }}
          loading="lazy"
        />
        <style>{`
          @keyframes zoomOut {
            from { transform: scale(1.1); }
            to   { transform: scale(1); }
          }
        `}</style>
        <div className="absolute inset-0 bg-brand-deep/75" />
        <div className="relative container-x py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-energy">Team</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white max-w-2xl">{t("team.title")}</h1>
          <p className="mt-4 text-white/80 max-w-xl leading-relaxed">{t("team.sub")}</p>
        </div>
      </section>

      <section className="container-x py-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {team.map((m, i) => {
          const initials = m.name.split(" ").map((s) => s[0]).slice(0, 2).join("");
          return (
            <div key={m.name} className="group rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-xl transition">
              <div className="h-48 bg-gray-100 grid place-items-center">
                <svg viewBox="0 0 100 100" className="h-32 w-32 rounded-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="#d1d5db"/>
                  <circle cx="50" cy="38" r="18" fill="#9ca3af"/>
                  <ellipse cx="50" cy="85" rx="28" ry="22" fill="#9ca3af"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold italic">{m.name}</h3>
                <p className="text-sm font-medium text-energy">{m.role}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </div>
            </div>
          );
        })}
      </section>
    </SiteLayout>
  );
}
