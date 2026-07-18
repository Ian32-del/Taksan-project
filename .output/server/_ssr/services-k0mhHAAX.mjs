import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useI18n } from "./i18n-Boua_Mqz.mjs";
import { S as CircleCheck, b as Earth, c as Route, d as MapPin, i as Truck, n as Users, o as ShieldCheck, x as Clock } from "../_libs/lucide-react.mjs";
import { n as SiteLayout, t as PageHeader } from "./Layout-jl0dGacP.mjs";
import { t as tanker_truck_default } from "./tanker-truck-DfvqmTjD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-k0mhHAAX.js
var import_jsx_runtime = require_jsx_runtime();
var features = [
	{
		i: Truck,
		k: "Modern fuel tanker fleet"
	},
	{
		i: Users,
		k: "Professional drivers"
	},
	{
		i: ShieldCheck,
		k: "Safe petroleum transportation"
	},
	{
		i: Earth,
		k: "Cross-border logistics"
	},
	{
		i: Clock,
		k: "Timely deliveries"
	},
	{
		i: MapPin,
		k: "Reliable scheduling"
	},
	{
		i: Route,
		k: "Route management"
	},
	{
		i: CircleCheck,
		k: "Industry-standard safety compliance"
	}
];
function ServicesPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Services",
			title: t("services.title"),
			sub: t("services.sub")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 grid md:grid-cols-2 gap-10 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold text-brand",
				children: "Petroleum Transportation Services"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground leading-relaxed",
				children: t("services.overview")
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: tanker_truck_default,
				alt: "Fleet",
				className: "rounded-2xl shadow-lg",
				width: 1600,
				height: 900,
				loading: "lazy"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold",
				children: t("services.features")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: features.map(({ i: Icon, k }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-5 hover:-translate-y-1 hover:shadow-lg transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-11 w-11 place-items-center rounded-xl gradient-brand text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-medium",
						children: k
					})]
				}, k))
			})]
		})
	] });
}
//#endregion
export { ServicesPage as component };
