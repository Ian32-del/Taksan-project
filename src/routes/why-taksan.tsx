import { createFileRoute } from "@tanstack/react-router";
import { Award, ShieldCheck, Globe2, BadgeCheck, Truck, HeartHandshake } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { AnimatedStat } from "@/components/site/Stat";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/why-taksan")({
  head: () => ({
    meta: [
      { title: "Why Taksan — Taksan Energy Limited" },
      { name: "description", content: "Experience, reliability, regional presence, quality assurance, professional logistics and customer commitment." },
      { property: "og:title", content: "Why Choose Taksan Energy" },
      { property: "og:description", content: "The reasons businesses across Africa trust Taksan Energy." },
    ],
  }),
  component: WhyPage,
});

const reasonKeys = [
  { i: Award,          tKey: "why.1" },
  { i: ShieldCheck,    tKey: "why.2" },
  { i: Globe2,         tKey: "why.3" },
  { i: BadgeCheck,     tKey: "why.4" },
  { i: Truck,          tKey: "why.5" },
  { i: HeartHandshake, tKey: "why.6" },
];

function WhyPage() {
  const { t } = useI18n();

  
  return (
    <SiteLayout>
      <PageHeader
        eyebrow={t("nav.why")}
        title={t("why.title")}
        sub={t("why.sub")}
      />
      <section className="container-x py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reasonKeys.map(({ i: Icon, tKey }) => (
          <div key={tKey} className="group rounded-2xl border border-border bg-card p-7 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl transition">
            <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold">{t(`${tKey}.t`)}</h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{t(`${tKey}.d`)}</p>
          </div>
        ))}
      </section>

      <section className="bg-brand-deep text-white">
        <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-16">

          <div className="rounded-2xl border border-white/15 bg-white/5 p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:bg-white/10 hover:border-energy hover:shadow-2xl">
            <StatWhite value={15} suffix="+" label={t("stats.years")} />
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:bg-white/10 hover:border-energy hover:shadow-2xl">
            <StatWhite value={3} label={t("stats.countries")} />
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:bg-white/10 hover:border-energy hover:shadow-2xl">
            <StatWhite value={5000} suffix="+" label={t("stats.deliveries")} />
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:bg-white/10 hover:border-energy hover:shadow-2xl">
            <StatWhite value={200} suffix="+" label={t("stats.clients")} />
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}

function StatWhite(props: { value: number; suffix?: string; label: string }) {
  return (
    <div className="text-center">
      <div className="[&_div]:!text-white [&_div]:!text-4xl md:[&_div]:!text-5xl">
        <AnimatedStat {...props} />
      </div>
    </div>
  );
}
