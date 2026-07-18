import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Truck, ShieldCheck, Globe2, Fuel, HeartHandshake } from "lucide-react";
import heroImg from "@/assets/hero-terminal.jpg";
import truckImg from "@/assets/tanker-truck.jpg";
import { SiteLayout } from "@/components/site/Layout";
import { AnimatedStat } from "@/components/site/Stat";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Taksan Energy terminal at sunrise" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-brand-deep/85 to-brand-deep/50" />
        </div>
        <div className="container-x relative py-24 md:py-36 text-white">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-widest text-energy">
            <span className="h-1.5 w-1.5 rounded-full bg-energy animate-pulse" />
            Kenya · DRC · Mozambique
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl font-bold leading-[1.05] animate-fade-in">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">{t("hero.sub")}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-energy px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-energy/30 hover:-translate-y-0.5 transition-transform">
              {t("cta.contact")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/15">
              {t("cta.explore")}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 py-14">
          <AnimatedStat value={15} suffix="+" label={t("stats.years")} />
          <AnimatedStat value={3} label={t("stats.countries")} />
          <AnimatedStat value={5000} suffix="+" label={t("stats.deliveries")} />
          <AnimatedStat value={200} suffix="+" label={t("stats.clients")} />
        </div>
      </section>

      {/* Why choose */}
      <section className="container-x py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-energy">Why Taksan</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">{t("why.title")}</h2>
          <p className="mt-3 text-muted-foreground">{t("why.sub")}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { i: Award, k: "1" },
            { i: Fuel, k: "2" },
            { i: ShieldCheck, k: "3" },
            { i: Truck, k: "4" },
            { i: Globe2, k: "5" },
            { i: HeartHandshake, k: "6" },
          ].map(({ i: Icon, k }) => (
            <div key={k} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{t(`why.${k}.t`)}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(`why.${k}.d`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Split feature */}
      <section className="bg-brand-deep text-white">
        <div className="container-x grid md:grid-cols-2 gap-10 py-20 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-energy">Logistics</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Petroleum transportation you can trust</h2>
            <p className="mt-4 text-white/80">
              A modern fleet of fuel tankers, professional drivers and cross-border expertise — delivering
              petroleum products safely and on time across East and Central Africa.
            </p>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 rounded-full bg-energy px-6 py-3 text-sm font-semibold text-black hover:-translate-y-0.5 transition-transform">
              {t("cta.learnMore")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-energy/20 blur-2xl" />
            <img src={truckImg} alt="Taksan tanker truck" className="relative rounded-2xl shadow-2xl" width={1600} height={900} loading="lazy" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to fuel your operations?</h2>
        <p className="mt-3 text-muted-foreground">Talk to our team about reliable supply across Kenya, DRC and Mozambique.</p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white hover:opacity-90">
          {t("cta.contact")} <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </SiteLayout>
  );
}
