import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useI18n } from "./i18n-Boua_Mqz.mjs";
import { C as BadgeCheck, b as Earth, g as HeartHandshake, i as Truck, o as ShieldCheck, w as Award } from "../_libs/lucide-react.mjs";
import { n as SiteLayout, t as PageHeader } from "./Layout-jl0dGacP.mjs";
import { t as AnimatedStat } from "./Stat-pjbX_Wf_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/why-taksan-C2xtb1ET.js
var import_jsx_runtime = require_jsx_runtime();
var reasons = [
	{
		i: Award,
		t: "Experience",
		d: "Over 15 years of industry expertise."
	},
	{
		i: ShieldCheck,
		t: "Reliability",
		d: "Consistent product availability and dependable service."
	},
	{
		i: Earth,
		t: "Regional Presence",
		d: "Operations across Kenya, DRC, and Mozambique."
	},
	{
		i: BadgeCheck,
		t: "Quality Assurance",
		d: "Strict quality control procedures."
	},
	{
		i: Truck,
		t: "Professional Logistics",
		d: "Efficient transportation and distribution systems."
	},
	{
		i: HeartHandshake,
		t: "Customer Commitment",
		d: "Dedicated support and long-term partnerships."
	}
];
function WhyPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Why Taksan",
			title: "Why Businesses Choose Taksan Energy",
			sub: "Six reasons partners across East and Central Africa continue to work with us."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: reasons.map(({ i: Icon, t: title, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group rounded-2xl border border-border bg-card p-7 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl transition",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-xl font-bold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground text-sm leading-relaxed",
						children: d
					})
				]
			}, title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-brand-deep text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-16 grid grid-cols-2 md:grid-cols-4 gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatWhite, {
						value: 15,
						suffix: "+",
						label: t("stats.years")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatWhite, {
						value: 3,
						label: t("stats.countries")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatWhite, {
						value: 5e3,
						suffix: "+",
						label: t("stats.deliveries")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatWhite, {
						value: 200,
						suffix: "+",
						label: t("stats.clients")
					})
				]
			})
		})
	] });
}
function StatWhite(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "[&_div]:!text-white [&_div]:!text-4xl md:[&_div]:!text-5xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedStat, { ...props })
		})
	});
}
//#endregion
export { WhyPage as component };
