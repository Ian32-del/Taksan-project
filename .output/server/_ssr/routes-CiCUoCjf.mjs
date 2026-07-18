import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useI18n } from "./i18n-Boua_Mqz.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as ArrowRight, _ as Fuel, b as Earth, g as HeartHandshake, i as Truck, o as ShieldCheck, w as Award } from "../_libs/lucide-react.mjs";
import { n as SiteLayout } from "./Layout-jl0dGacP.mjs";
import { t as hero_terminal_default } from "./hero-terminal-B018N3ay.mjs";
import { t as tanker_truck_default } from "./tanker-truck-DfvqmTjD.mjs";
import { t as AnimatedStat } from "./Stat-pjbX_Wf_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CiCUoCjf.js
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_terminal_default,
					alt: "Taksan Energy terminal at sunrise",
					className: "h-full w-full object-cover",
					width: 1920,
					height: 1080
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-brand-deep/85 to-brand-deep/50" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative py-24 md:py-36 text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-widest text-energy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-energy animate-pulse" }), "Kenya · DRC · Mozambique"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 max-w-4xl text-4xl md:text-6xl font-bold leading-[1.05] animate-fade-in",
						children: t("hero.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-lg text-white/85",
						children: t("hero.sub")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-full bg-energy px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-energy/30 hover:-translate-y-0.5 transition-transform",
							children: [
								t("cta.contact"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/15",
							children: t("cta.explore")
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-secondary/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid grid-cols-2 md:grid-cols-4 gap-8 py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedStat, {
						value: 15,
						suffix: "+",
						label: t("stats.years")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedStat, {
						value: 3,
						label: t("stats.countries")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedStat, {
						value: 5e3,
						suffix: "+",
						label: t("stats.deliveries")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedStat, {
						value: 200,
						suffix: "+",
						label: t("stats.clients")
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-energy",
						children: "Why Taksan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-4xl font-bold",
						children: t("why.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: t("why.sub")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						i: Award,
						k: "1"
					},
					{
						i: Fuel,
						k: "2"
					},
					{
						i: ShieldCheck,
						k: "3"
					},
					{
						i: Truck,
						k: "4"
					},
					{
						i: Earth,
						k: "5"
					},
					{
						i: HeartHandshake,
						k: "6"
					}
				].map(({ i: Icon, k }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white shadow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-semibold",
							children: t(`why.${k}.t`)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: t(`why.${k}.d`)
						})
					]
				}, k))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-brand-deep text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid md:grid-cols-2 gap-10 py-20 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-energy",
						children: "Logistics"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-4xl font-bold",
						children: "Petroleum transportation you can trust"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-white/80",
						children: "A modern fleet of fuel tankers, professional drivers and cross-border expertise — delivering petroleum products safely and on time across East and Central Africa."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "mt-8 inline-flex items-center gap-2 rounded-full bg-energy px-6 py-3 text-sm font-semibold text-black hover:-translate-y-0.5 transition-transform",
						children: [
							t("cta.learnMore"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-3xl bg-energy/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: tanker_truck_default,
						alt: "Taksan tanker truck",
						className: "relative rounded-2xl shadow-2xl",
						width: 1600,
						height: 900,
						loading: "lazy"
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-bold",
					children: "Ready to fuel your operations?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "Talk to our team about reliable supply across Kenya, DRC and Mozambique."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white hover:opacity-90",
					children: [
						t("cta.contact"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
					]
				})
			]
		})
	] });
}
//#endregion
export { Index as component };
