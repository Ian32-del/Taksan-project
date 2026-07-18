import { createFileRoute } from "@tanstack/react-router";
import { Fuel, Truck, Flame, Lightbulb, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { useI18n, type Lang } from "@/lib/i18n";
import lpgImg from "@/assets/lpg-facility.jpg";
import refineryImg from "@/assets/refinery.jpg";
import truckImg from "@/assets/tanker-truck.jpg";
import heroImg from "@/assets/hero-terminal.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Taksan Energy Limited" },
      { name: "description", content: "Super Petrol (PMS), Diesel (AGO), LPG and Paraffin (IK) — premium petroleum products across Africa." },
      { property: "og:title", content: "Petroleum Products — Taksan Energy" },
      { property: "og:description", content: "PMS, AGO, LPG and IK delivered reliably across Kenya, DRC and Mozambique." },
    ],
  }),
  component: ProductsPage,
});

type Product = {
  id: string;
  name: string;
  code: string;
  icon: typeof Fuel;
  image: string;
  content: Record<Lang, {
    sig: string;
    challenges: string[];
    gc: string;
    adv: string[];
  }>;
};

const products: Product[] = [
  {
    id: "pms",
    name: "Super Petrol",
    code: "PMS",
    icon: Fuel,
    image: heroImg,
    content: {
      en: {
        sig: "Super Petrol is essential for powering passenger vehicles, commercial transportation, and economic activity. It supports mobility, trade, and business growth throughout the region.",
        challenges: ["Price fluctuations", "Supply chain disruptions", "Increasing fuel demand", "Environmental concerns"],
        gc: "Taksan Energy ensures reliable availability of quality Super Petrol through efficient sourcing, strategic distribution networks, and strong operational capabilities across multiple countries.",
        adv: ["High-quality fuel standards", "Reliable product availability", "Competitive pricing", "Efficient distribution network", "Professional customer support"],
      },
      fr: {
        sig: "Le Super sans plomb est essentiel pour alimenter véhicules particuliers et transport commercial. Il soutient la mobilité, le commerce et la croissance économique.",
        challenges: ["Fluctuations des prix", "Perturbations logistiques", "Demande croissante", "Préoccupations environnementales"],
        gc: "Taksan Energy garantit la disponibilité constante d'un Super de qualité grâce à un approvisionnement efficace et un réseau de distribution stratégique.",
        adv: ["Carburant de haute qualité", "Disponibilité fiable", "Prix compétitifs", "Distribution efficace", "Support client professionnel"],
      },
    },
  },
  {
    id: "diesel",
    name: "Diesel",
    code: "AGO",
    icon: Truck,
    image: truckImg,
    content: {
      en: {
        sig: "Diesel is critical for transportation, agriculture, construction, mining, manufacturing, and power generation.",
        challenges: ["Supply shortages", "Rising operating costs", "Fuel contamination risks", "Distribution complexities"],
        gc: "Taksan provides dependable diesel supply solutions backed by efficient logistics and strict quality control processes.",
        adv: ["Consistent product quality", "Bulk delivery capability", "Fast and reliable supply", "Strong regional distribution", "Cost-effective solutions"],
      },
      fr: {
        sig: "Le diesel est essentiel pour le transport, l'agriculture, la construction, les mines, l'industrie et la production d'électricité.",
        challenges: ["Pénuries d'approvisionnement", "Coûts opérationnels croissants", "Risques de contamination", "Complexités de distribution"],
        gc: "Taksan offre des solutions fiables d'approvisionnement en diesel, appuyées par une logistique efficace et un contrôle qualité strict.",
        adv: ["Qualité constante", "Livraison en gros", "Approvisionnement rapide", "Distribution régionale solide", "Solutions économiques"],
      },
    },
  },
  {
    id: "lpg",
    name: "LPG",
    code: "GPL",
    icon: Flame,
    image: lpgImg,
    content: {
      en: {
        sig: "Liquefied Petroleum Gas offers a cleaner and more efficient energy source for homes, restaurants, industries, and commercial establishments.",
        challenges: ["Safety concerns", "Accessibility limitations", "Distribution challenges", "Public awareness issues"],
        gc: "Taksan promotes safe LPG distribution through professional handling standards, reliable supply chains, and expanded access across its operating regions.",
        adv: ["Safe distribution practices", "Cleaner energy solution", "Reduced environmental impact", "Reliable availability", "Competitive pricing"],
      },
      fr: {
        sig: "Le GPL est une source d'énergie plus propre et efficace pour les foyers, restaurants, industries et commerces.",
        challenges: ["Sécurité", "Accessibilité limitée", "Défis de distribution", "Sensibilisation du public"],
        gc: "Taksan encourage une distribution sûre du GPL par des normes de manipulation professionnelles et un approvisionnement fiable.",
        adv: ["Distribution sûre", "Énergie plus propre", "Impact environnemental réduit", "Disponibilité fiable", "Prix compétitifs"],
      },
    },
  },
  {
    id: "ik",
    name: "Paraffin",
    code: "IK",
    icon: Lightbulb,
    image: refineryImg,
    content: {
      en: {
        sig: "Paraffin remains an important energy source for lighting, heating, and cooking, particularly in communities where alternative energy options are limited.",
        challenges: ["Safety concerns", "Market competition", "Supply consistency", "Distribution efficiency"],
        gc: "Taksan ensures consistent availability and safe delivery of quality paraffin products to meet the needs of households and businesses.",
        adv: ["Dependable supply", "Affordable energy option", "Quality assurance", "Professional handling", "Customer-focused service"],
      },
      fr: {
        sig: "Le pétrole lampant reste une source d'énergie importante pour l'éclairage, le chauffage et la cuisson, en particulier dans les communautés aux options limitées.",
        challenges: ["Sécurité", "Concurrence du marché", "Constance de l'approvisionnement", "Efficacité de distribution"],
        gc: "Taksan garantit une disponibilité constante et une livraison sûre de produits de qualité.",
        adv: ["Approvisionnement fiable", "Énergie abordable", "Assurance qualité", "Manipulation professionnelle", "Service centré client"],
      },
    },
  },
];

function ProductsPage() {
  const { t, lang } = useI18n();
  return (
    <SiteLayout>
      <PageHeader eyebrow="Products" title={t("products.title")} sub={t("products.sub")} />

      <div className="container-x py-16 space-y-16">
        {products.map((p, idx) => {
          const c = p.content[lang];
          const Icon = p.icon;
          const reverse = idx % 2 === 1;
          return (
            <article key={p.id} className="grid gap-10 md:grid-cols-5 items-start">
              <div className={`md:col-span-2 ${reverse ? "md:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg">
                  <img src={p.image} alt={p.name} className="h-72 w-full object-cover" width={1200} height={800} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-energy text-black"><Icon className="h-5 w-5" /></span>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-energy font-semibold">{p.code}</p>
                        <h3 className="text-2xl font-bold">{p.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 space-y-6">
                <Block label={t("p.section.sig")}><p className="text-muted-foreground">{c.sig}</p></Block>
                <Block label={t("p.section.challenges")}>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                    {c.challenges.map((x) => (
                      <li key={x} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-energy shrink-0" />{x}</li>
                    ))}
                  </ul>
                </Block>
                <Block label={t("p.section.gc")}><p className="text-muted-foreground">{c.gc}</p></Block>
                <Block label={t("p.section.adv")}>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                    {c.adv.map((x) => (
                      <li key={x} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />{x}</li>
                    ))}
                  </ul>
                </Block>
              </div>
            </article>
          );
        })}
      </div>
    </SiteLayout>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-energy">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}
