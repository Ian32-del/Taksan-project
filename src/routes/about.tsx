import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, HeartHandshake, Sparkles, Award, Lightbulb, Users, Leaf } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import refineryImg from "@/assets/refinery.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Taksan Energy Limited" },
      { name: "description", content: "15+ years delivering petroleum products across Kenya, DRC and Mozambique. Learn about our mission, vision and values." },
      { property: "og:title", content: "About Taksan Energy Limited" },
      { property: "og:description", content: "Trusted African petroleum company. Our story, mission and values." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { i: ShieldCheck, k: "values.integrity" },
  { i: Award, k: "values.reliability" },
  { i: ShieldCheck, k: "values.safety" },
  { i: Sparkles, k: "values.excellence" },
  { i: Lightbulb, k: "values.innovation" },
  { i: HeartHandshake, k: "values.customer" },
  { i: Leaf, k: "values.sustainability" },
];

function AboutPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHeader eyebrow="About" title={t("about.title")} sub={t("about.overview")} />

      <section className="container-x py-20 grid md:grid-cols-2 gap-10">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white"><Sparkles className="h-6 w-6" /></div>
          <h2 className="mt-5 text-2xl font-bold text-brand">{t("about.mission.t")}</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">{t("about.mission.d")}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-energy text-black"><Users className="h-6 w-6" /></div>
          <h2 className="mt-5 text-2xl font-bold text-brand">{t("about.vision.t")}</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">{t("about.vision.d")}</p>
        </div>
      </section>

      <section className="relative">
        <img src={refineryImg} alt="Refinery at dusk" className="h-72 md:h-96 w-full object-cover" width={1600} height={900} loading="lazy" />
        <div className="absolute inset-0 bg-brand-deep/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-x text-white">
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">Building Africa's energy backbone, one delivery at a time.</h2>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <h2 className="text-3xl font-bold text-center">{t("about.values.t")}</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ i: Icon, k }) => (
            <div key={k} className="rounded-2xl border border-border bg-card p-6 text-center hover:-translate-y-1 hover:shadow-lg transition">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-secondary text-brand">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-4 font-semibold">{t(k)}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
