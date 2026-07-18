import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";

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
  { name: "James Mwangi", role: "Chief Executive Officer", bio: "Two decades of leadership in African energy and cross-border logistics." },
  { name: "Aline Kabila", role: "Chief Operations Officer", bio: "Directs regional operations across Kenya, DRC and Mozambique." },
  { name: "Samuel Otieno", role: "Head of Logistics", bio: "Oversees fleet operations, safety and on-time delivery performance." },
  { name: "Fatima N'Doumbé", role: "Head of Customer Relations", bio: "Builds long-term partnerships with our commercial and institutional clients." },
  { name: "David Kimani", role: "Head of Quality & Safety", bio: "Ensures every product meets our uncompromising quality standards." },
  { name: "Isabelle Manuel", role: "Country Manager — Mozambique", bio: "Leads our operations and business development in Mozambique." },
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
      <PageHeader eyebrow="Team" title={t("team.title")} sub={t("team.sub")} />

      <section className="container-x py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => {
          const initials = m.name.split(" ").map((s) => s[0]).slice(0, 2).join("");
          return (
            <div key={m.name} className="group rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-xl transition">
              <div className={`h-48 bg-gradient-to-br ${palette[i % palette.length]} grid place-items-center text-white`}>
                <span className="font-display text-5xl font-bold drop-shadow">{initials}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">{m.name}</h3>
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
