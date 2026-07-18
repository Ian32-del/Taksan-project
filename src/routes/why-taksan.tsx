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

const reasons = [
  { i: Award, t: "Experience", d: "Over 15 years of industry expertise." },
  { i: ShieldCheck, t: "Reliability", d: "Consistent product availability and dependable service." },
  { i: Globe2, t: "Regional Presence", d: "Operations across Kenya, DRC, and Mozambique." },
  { i: BadgeCheck, t: "Quality Assurance", d: "Strict quality control procedures." },
  { i: Truck, t: "Professional Logistics", d: "Efficient transportation and distribution systems." },
  { i: HeartHandshake, t: "Customer Commitment", d: "Dedicated support and long-term partnerships." },
];

function WhyPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHeader eyebrow="Why Taksan" title="Why Businesses Choose Taksan Energy" sub="Six reasons partners across East and Central Africa continue to work with us." />

      <section className="container-x py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ i: Icon, t: title, d }) => (
          <div key={title} className="group rounded-2xl border border-border bg-card p-7 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl transition">
            <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white"><Icon className="h-6 w-6" /></div>
            <h3 className="mt-5 text-xl font-bold">{title}</h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{d}</p>
          </div>
        ))}
      </section>

      <section className="bg-brand-deep text-white">
        <div className="container-x py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatWhite value={15} suffix="+" label={t("stats.years")} />
          <StatWhite value={3} label={t("stats.countries")} />
          <StatWhite value={5000} suffix="+" label={t("stats.deliveries")} />
          <StatWhite value={200} suffix="+" label={t("stats.clients")} />
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
