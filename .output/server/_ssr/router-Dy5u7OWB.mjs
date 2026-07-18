import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as I18nProvider } from "./i18n-Boua_Mqz.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Dy5u7OWB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-6YIFvnOy.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-brand",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:opacity-90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Taksan Energy Limited — Reliable Petroleum Solutions Across Africa" },
			{
				name: "description",
				content: "Taksan Energy Limited: 15+ years delivering premium petroleum products and energy solutions across Kenya, DRC and Mozambique."
			},
			{
				name: "author",
				content: "Taksan Energy Limited"
			},
			{
				property: "og:title",
				content: "Taksan Energy Limited — Reliable Petroleum Solutions"
			},
			{
				property: "og:description",
				content: "Premium petroleum products and dependable transportation services across Kenya, DRC and Mozambique."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I18nProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "top-right",
			richColors: true
		})] })
	});
}
var $$splitComponentImporter$6 = () => import("./routes-CiCUoCjf.mjs");
var Route$7 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./about-CtFQMS6D.mjs");
var Route$6 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Taksan Energy Limited" },
		{
			name: "description",
			content: "15+ years delivering petroleum products across Kenya, DRC and Mozambique. Learn about our mission, vision and values."
		},
		{
			property: "og:title",
			content: "About Taksan Energy Limited"
		},
		{
			property: "og:description",
			content: "Trusted African petroleum company. Our story, mission and values."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-GqmLBEKO.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Taksan Energy Limited" },
		{
			name: "description",
			content: "Contact Taksan Energy Limited for petroleum supply and transportation across Kenya, DRC and Mozambique."
		},
		{
			property: "og:title",
			content: "Contact Taksan Energy"
		},
		{
			property: "og:description",
			content: "Get in touch about reliable petroleum supply and logistics."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./products-DX-NdwSj.mjs");
var Route$4 = createFileRoute("/products")({
	head: () => ({ meta: [
		{ title: "Products — Taksan Energy Limited" },
		{
			name: "description",
			content: "Super Petrol (PMS), Diesel (AGO), LPG and Paraffin (IK) — premium petroleum products across Africa."
		},
		{
			property: "og:title",
			content: "Petroleum Products — Taksan Energy"
		},
		{
			property: "og:description",
			content: "PMS, AGO, LPG and IK delivered reliably across Kenya, DRC and Mozambique."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./services-k0mhHAAX.mjs");
var Route$3 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services — Taksan Energy Limited" },
		{
			name: "description",
			content: "Professional petroleum transportation across Kenya, DRC and Mozambique — modern fleet, safety-first drivers, on-time delivery."
		},
		{
			property: "og:title",
			content: "Petroleum Transportation Services — Taksan Energy"
		},
		{
			property: "og:description",
			content: "Cross-border logistics, modern fleet, and safe delivery of petroleum products."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var BASE_URL = "";
var Route$2 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		"/",
		"/about",
		"/products",
		"/services",
		"/why-taksan",
		"/team",
		"/contact"
	].map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$1 = () => import("./team-BCyH72an.mjs");
var Route$1 = createFileRoute("/team")({
	head: () => ({ meta: [
		{ title: "Team — Taksan Energy Limited" },
		{
			name: "description",
			content: "Meet the leadership behind Taksan Energy Limited — executive, operations, logistics and customer relations."
		},
		{
			property: "og:title",
			content: "Our Team — Taksan Energy"
		},
		{
			property: "og:description",
			content: "The people delivering reliable energy across Africa."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./why-taksan-C2xtb1ET.mjs");
var Route = createFileRoute("/why-taksan")({
	head: () => ({ meta: [
		{ title: "Why Taksan — Taksan Energy Limited" },
		{
			name: "description",
			content: "Experience, reliability, regional presence, quality assurance, professional logistics and customer commitment."
		},
		{
			property: "og:title",
			content: "Why Choose Taksan Energy"
		},
		{
			property: "og:description",
			content: "The reasons businesses across Africa trust Taksan Energy."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AboutRoute: Route$6.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$8
	}),
	ContactRoute: Route$5.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$8
	}),
	ProductsRoute: Route$4.update({
		id: "/products",
		path: "/products",
		getParentRoute: () => Route$8
	}),
	ServicesRoute: Route$3.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$8
	}),
	SitemapDotxmlRoute: Route$2.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$8
	}),
	TeamRoute: Route$1.update({
		id: "/team",
		path: "/team",
		getParentRoute: () => Route$8
	}),
	WhyTaksanRoute: Route.update({
		id: "/why-taksan",
		path: "/why-taksan",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
