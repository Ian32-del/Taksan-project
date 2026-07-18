import { createFileRoute } from "@tanstack/react-router";
import { Truck, ShieldCheck, MapPin, Clock, Route as RouteIcon, Users, Globe2, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import truckImg from "@/assets/tanker-truck.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Taksan Energy Limited" },
      { name: "description", content: "Professional petroleum transportation across Kenya, DRC and Mozambique — modern fleet, safety-first drivers, on-time delivery." },
      { property: "og:title", content: "Petroleum Transportation Services — Taksan Energy" },
      { property: "og:description", content: "Cross-border logistics, modern fleet, and safe delivery of petroleum products." },
    ],
  }),
  component: ServicesPage,
});

const features = [
  { i: Truck, k: "Modern fuel tanker fleet" },
  { i: Users, k: "Professional drivers" },
  { i: ShieldCheck, k: "Safe petroleum transportation" },
  { i: Globe2, k: "Cross-border logistics" },
  { i: Clock, k: "Timely deliveries" },
  { i: MapPin, k: "Reliable scheduling" },
  { i: RouteIcon, k: "Route management" },
  { i: CheckCircle2, k: "Industry-standard safety compliance" },
];

function ServicesPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHeader eyebrow="Services" title={t("services.title")} sub={t("services.sub")} />

      <section className="container-x py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-brand">Petroleum Transportation Services</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t("services.overview")}</p>
        </div>
        <img src={truckImg} alt="Fleet" className="rounded-2xl shadow-lg" width={1600} height={900} loading="lazy" />
      </section>

      <section className="container-x pb-20">
        <h3 className="text-xl font-bold">{t("services.features")}</h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ i: Icon, k }) => (
            <div key={k} className="rounded-2xl border border-border bg-card p-5 hover:-translate-y-1 hover:shadow-lg transition">
              <div className="grid h-11 w-11 place-items-center rounded-xl gradient-brand text-white">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-medium">{k}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
