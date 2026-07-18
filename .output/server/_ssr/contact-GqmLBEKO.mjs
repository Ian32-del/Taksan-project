import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useI18n } from "./i18n-Boua_Mqz.mjs";
import { d as MapPin, f as Mail, l as Phone, s as Send } from "../_libs/lucide-react.mjs";
import { n as SiteLayout, t as PageHeader } from "./Layout-jl0dGacP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-GqmLBEKO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	name: stringType().trim().min(1).max(100),
	company: stringType().trim().max(120).optional(),
	email: stringType().trim().email().max(255),
	phone: stringType().trim().max(40).optional(),
	country: stringType().trim().max(80).optional(),
	subject: stringType().trim().min(1).max(150),
	message: stringType().trim().min(1).max(2e3)
});
function ContactPage() {
	const { t } = useI18n();
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const data = Object.fromEntries(form.entries());
		if (!schema.safeParse(data).success) {
			toast.error("Please check your inputs.");
			return;
		}
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			toast.success(t("form.sent"));
			e.target.reset();
		}, 700);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Contact",
			title: t("contact.title"),
			sub: t("contact.sub")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 grid gap-10 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "lg:col-span-3 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "name",
								label: t("form.name"),
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "company",
								label: t("form.company")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "email",
								label: t("form.email"),
								type: "email",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "phone",
								label: t("form.phone"),
								type: "tel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "country",
								label: t("form.country")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "subject",
								label: t("form.subject"),
								required: true
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm font-medium",
						children: [t("form.message"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-energy",
							children: " *"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						required: true,
						maxLength: 2e3,
						rows: 5,
						className: "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						disabled: submitting,
						className: "inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }),
							" ",
							t("form.send")
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:col-span-2 space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl gradient-brand p-6 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold",
						children: t("contact.info")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 mt-0.5" }), " +254 700 000 000"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 mt-0.5" }), " info@taksanenergy.com"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 mt-0.5" }), " Head Office: Nairobi, Kenya"]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-brand",
						children: t("contact.countries")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "🇰🇪 Kenya" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "🇨🇩 Democratic Republic of Congo" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "🇲🇿 Mozambique" })
						]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-2xl border border-border shadow",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Regions we serve",
					className: "w-full h-96",
					src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16657846.03!2d24.85!3d-6.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1700000000000",
					loading: "lazy"
				})
			})
		})
	] });
}
function Field({ name, label, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "text-sm font-medium",
		children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-energy",
			children: " *"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		maxLength: 255,
		className: "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
	})] });
}
//#endregion
export { ContactPage as component };
