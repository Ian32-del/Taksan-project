import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useI18n } from "./i18n-Boua_Mqz.mjs";
import { S as CircleCheck, _ as Fuel, i as Truck, m as Lightbulb, v as Flame } from "../_libs/lucide-react.mjs";
import { n as SiteLayout, t as PageHeader } from "./Layout-jl0dGacP.mjs";
import { t as refinery_default } from "./refinery-DA4Q104l.mjs";
import { t as hero_terminal_default } from "./hero-terminal-B018N3ay.mjs";
import { t as tanker_truck_default } from "./tanker-truck-DfvqmTjD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-DX-NdwSj.js
var import_jsx_runtime = require_jsx_runtime();
var products = [
	{
		id: "pms",
		name: "Super Petrol",
		code: "PMS",
		icon: Fuel,
		image: hero_terminal_default,
		content: {
			en: {
				sig: "Super Petrol is essential for powering passenger vehicles, commercial transportation, and economic activity. It supports mobility, trade, and business growth throughout the region.",
				challenges: [
					"Price fluctuations",
					"Supply chain disruptions",
					"Increasing fuel demand",
					"Environmental concerns"
				],
				gc: "Taksan Energy ensures reliable availability of quality Super Petrol through efficient sourcing, strategic distribution networks, and strong operational capabilities across multiple countries.",
				adv: [
					"High-quality fuel standards",
					"Reliable product availability",
					"Competitive pricing",
					"Efficient distribution network",
					"Professional customer support"
				]
			},
			fr: {
				sig: "Le Super sans plomb est essentiel pour alimenter véhicules particuliers et transport commercial. Il soutient la mobilité, le commerce et la croissance économique.",
				challenges: [
					"Fluctuations des prix",
					"Perturbations logistiques",
					"Demande croissante",
					"Préoccupations environnementales"
				],
				gc: "Taksan Energy garantit la disponibilité constante d'un Super de qualité grâce à un approvisionnement efficace et un réseau de distribution stratégique.",
				adv: [
					"Carburant de haute qualité",
					"Disponibilité fiable",
					"Prix compétitifs",
					"Distribution efficace",
					"Support client professionnel"
				]
			}
		}
	},
	{
		id: "diesel",
		name: "Diesel",
		code: "AGO",
		icon: Truck,
		image: tanker_truck_default,
		content: {
			en: {
				sig: "Diesel is critical for transportation, agriculture, construction, mining, manufacturing, and power generation.",
				challenges: [
					"Supply shortages",
					"Rising operating costs",
					"Fuel contamination risks",
					"Distribution complexities"
				],
				gc: "Taksan provides dependable diesel supply solutions backed by efficient logistics and strict quality control processes.",
				adv: [
					"Consistent product quality",
					"Bulk delivery capability",
					"Fast and reliable supply",
					"Strong regional distribution",
					"Cost-effective solutions"
				]
			},
			fr: {
				sig: "Le diesel est essentiel pour le transport, l'agriculture, la construction, les mines, l'industrie et la production d'électricité.",
				challenges: [
					"Pénuries d'approvisionnement",
					"Coûts opérationnels croissants",
					"Risques de contamination",
					"Complexités de distribution"
				],
				gc: "Taksan offre des solutions fiables d'approvisionnement en diesel, appuyées par une logistique efficace et un contrôle qualité strict.",
				adv: [
					"Qualité constante",
					"Livraison en gros",
					"Approvisionnement rapide",
					"Distribution régionale solide",
					"Solutions économiques"
				]
			}
		}
	},
	{
		id: "lpg",
		name: "LPG",
		code: "GPL",
		icon: Flame,
		image: "/assets/lpg-facility-CokMnla_.jpg",
		content: {
			en: {
				sig: "Liquefied Petroleum Gas offers a cleaner and more efficient energy source for homes, restaurants, industries, and commercial establishments.",
				challenges: [
					"Safety concerns",
					"Accessibility limitations",
					"Distribution challenges",
					"Public awareness issues"
				],
				gc: "Taksan promotes safe LPG distribution through professional handling standards, reliable supply chains, and expanded access across its operating regions.",
				adv: [
					"Safe distribution practices",
					"Cleaner energy solution",
					"Reduced environmental impact",
					"Reliable availability",
					"Competitive pricing"
				]
			},
			fr: {
				sig: "Le GPL est une source d'énergie plus propre et efficace pour les foyers, restaurants, industries et commerces.",
				challenges: [
					"Sécurité",
					"Accessibilité limitée",
					"Défis de distribution",
					"Sensibilisation du public"
				],
				gc: "Taksan encourage une distribution sûre du GPL par des normes de manipulation professionnelles et un approvisionnement fiable.",
				adv: [
					"Distribution sûre",
					"Énergie plus propre",
					"Impact environnemental réduit",
					"Disponibilité fiable",
					"Prix compétitifs"
				]
			}
		}
	},
	{
		id: "ik",
		name: "Paraffin",
		code: "IK",
		icon: Lightbulb,
		image: refinery_default,
		content: {
			en: {
				sig: "Paraffin remains an important energy source for lighting, heating, and cooking, particularly in communities where alternative energy options are limited.",
				challenges: [
					"Safety concerns",
					"Market competition",
					"Supply consistency",
					"Distribution efficiency"
				],
				gc: "Taksan ensures consistent availability and safe delivery of quality paraffin products to meet the needs of households and businesses.",
				adv: [
					"Dependable supply",
					"Affordable energy option",
					"Quality assurance",
					"Professional handling",
					"Customer-focused service"
				]
			},
			fr: {
				sig: "Le pétrole lampant reste une source d'énergie importante pour l'éclairage, le chauffage et la cuisson, en particulier dans les communautés aux options limitées.",
				challenges: [
					"Sécurité",
					"Concurrence du marché",
					"Constance de l'approvisionnement",
					"Efficacité de distribution"
				],
				gc: "Taksan garantit une disponibilité constante et une livraison sûre de produits de qualité.",
				adv: [
					"Approvisionnement fiable",
					"Énergie abordable",
					"Assurance qualité",
					"Manipulation professionnelle",
					"Service centré client"
				]
			}
		}
	}
];
function ProductsPage() {
	const { t, lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Products",
		title: t("products.title"),
		sub: t("products.sub")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-x py-16 space-y-16",
		children: products.map((p, idx) => {
			const c = p.content[lang];
			const Icon = p.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid gap-10 md:grid-cols-5 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `md:col-span-2 ${idx % 2 === 1 ? "md:order-2" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-2xl border border-border shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								className: "h-72 w-full object-cover",
								width: 1200,
								height: 800,
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-deep/70 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-4 left-4 right-4 text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-11 w-11 place-items-center rounded-xl bg-energy text-black",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-widest text-energy font-semibold",
										children: p.code
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-bold",
										children: p.name
									})] })]
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							label: t("p.section.sig"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: c.sig
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							label: t("p.section.challenges"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "grid sm:grid-cols-2 gap-2 text-sm",
								children: c.challenges.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-energy shrink-0" }), x]
								}, x))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							label: t("p.section.gc"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: c.gc
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							label: t("p.section.adv"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "grid sm:grid-cols-2 gap-2 text-sm",
								children: c.adv.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-brand mt-0.5 shrink-0" }), x]
								}, x))
							})
						})
					]
				})]
			}, p.id);
		})
	})] });
}
function Block({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-semibold uppercase tracking-[0.18em] text-energy",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2",
		children
	})] });
}
//#endregion
export { ProductsPage as component };
