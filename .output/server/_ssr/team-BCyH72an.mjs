import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useI18n } from "./i18n-Boua_Mqz.mjs";
import { n as SiteLayout, t as PageHeader } from "./Layout-jl0dGacP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-BCyH72an.js
var import_jsx_runtime = require_jsx_runtime();
var team = [
	{
		name: "James Mwangi",
		role: "Chief Executive Officer",
		bio: "Two decades of leadership in African energy and cross-border logistics."
	},
	{
		name: "Aline Kabila",
		role: "Chief Operations Officer",
		bio: "Directs regional operations across Kenya, DRC and Mozambique."
	},
	{
		name: "Samuel Otieno",
		role: "Head of Logistics",
		bio: "Oversees fleet operations, safety and on-time delivery performance."
	},
	{
		name: "Fatima N'Doumbé",
		role: "Head of Customer Relations",
		bio: "Builds long-term partnerships with our commercial and institutional clients."
	},
	{
		name: "David Kimani",
		role: "Head of Quality & Safety",
		bio: "Ensures every product meets our uncompromising quality standards."
	},
	{
		name: "Isabelle Manuel",
		role: "Country Manager — Mozambique",
		bio: "Leads our operations and business development in Mozambique."
	}
];
var palette = [
	"from-blue-500 to-indigo-700",
	"from-orange-400 to-red-600",
	"from-emerald-500 to-teal-700",
	"from-purple-500 to-fuchsia-700",
	"from-amber-500 to-orange-700",
	"from-sky-500 to-cyan-700"
];
function TeamPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Team",
		title: t("team.title"),
		sub: t("team.sub")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-x py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
		children: team.map((m, i) => {
			const initials = m.name.split(" ").map((s) => s[0]).slice(0, 2).join("");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-xl transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `h-48 bg-gradient-to-br ${palette[i % palette.length]} grid place-items-center text-white`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-5xl font-bold drop-shadow",
						children: initials
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold",
							children: m.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-energy",
							children: m.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground leading-relaxed",
							children: m.bio
						})
					]
				})]
			}, m.name);
		})
	})] });
}
//#endregion
export { TeamPage as component };
