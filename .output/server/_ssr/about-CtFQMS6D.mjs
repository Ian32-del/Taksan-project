import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useI18n } from "./i18n-Boua_Mqz.mjs";
import { a as Sparkles, g as HeartHandshake, h as Leaf, m as Lightbulb, n as Users, o as ShieldCheck, w as Award } from "../_libs/lucide-react.mjs";
import { n as SiteLayout, t as PageHeader } from "./Layout-jl0dGacP.mjs";
import { t as refinery_default } from "./refinery-DA4Q104l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CtFQMS6D.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	{
		i: ShieldCheck,
		k: "values.integrity"
	},
	{
		i: Award,
		k: "values.reliability"
	},
	{
		i: ShieldCheck,
		k: "values.safety"
	},
	{
		i: Sparkles,
		k: "values.excellence"
	},
	{
		i: Lightbulb,
		k: "values.innovation"
	},
	{
		i: HeartHandshake,
		k: "values.customer"
	},
	{
		i: Leaf,
		k: "values.sustainability"
	}
];
function AboutPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "About",
			title: t("about.title"),
			sub: t("about.overview")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20 grid md:grid-cols-2 gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-8 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-2xl font-bold text-brand",
						children: t("about.mission.t")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground leading-relaxed",
						children: t("about.mission.d")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-8 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 place-items-center rounded-xl bg-energy text-black",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-2xl font-bold text-brand",
						children: t("about.vision.t")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground leading-relaxed",
						children: t("about.vision.d")
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: refinery_default,
					alt: "Refinery at dusk",
					className: "h-72 md:h-96 w-full object-cover",
					width: 1600,
					height: 900,
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-brand-deep/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "container-x text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl font-bold max-w-2xl",
							children: "Building Africa's energy backbone, one delivery at a time."
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-bold text-center",
				children: t("about.values.t")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: values.map(({ i: Icon, k }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 text-center hover:-translate-y-1 hover:shadow-lg transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid h-12 w-12 place-items-center rounded-xl bg-secondary text-brand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-semibold",
						children: t(k)
					})]
				}, k))
			})]
		})
	] });
}
//#endregion
export { AboutPage as component };
