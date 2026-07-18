globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx+unenv.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/Layout-DALsy45f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"909a-LTF/CBNbcIyfYL2HoqZufKTQ1uM\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 37018,
		"path": "../public/assets/Layout-DALsy45f.js"
	},
	"/assets/about-DnNNPVbI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d53-nAJKNgMZAC4U5uWyH6DRAMWgGI0\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 3411,
		"path": "../public/assets/about-DnNNPVbI.js"
	},
	"/assets/Stat-BM3qdU1t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32f-9GebPTQ/FuzAtAjjKhA6H5FHga0\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 815,
		"path": "../public/assets/Stat-BM3qdU1t.js"
	},
	"/assets/circle-check-DCsLH7tE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a8-rm0R5rO5Dlx1cZu4qDIxKeK9GRc\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 168,
		"path": "../public/assets/circle-check-DCsLH7tE.js"
	},
	"/assets/contact-BCV5M_Do.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed2f-FCiJ4AaFWQk+CGNsIfB8hXG8hL0\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 60719,
		"path": "../public/assets/contact-BCV5M_Do.js"
	},
	"/assets/earth-DFk9SriT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f-CpJgA41h1VhVOHNWLi9G3aq5QZU\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 383,
		"path": "../public/assets/earth-DFk9SriT.js"
	},
	"/assets/heart-handshake-DCNwDefR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29d-a9bohSGb0cnV2Q2pXR7X4/7u6zg\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 669,
		"path": "../public/assets/heart-handshake-DCNwDefR.js"
	},
	"/assets/hero-terminal-DCBAppxf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"169-MF7udC7uwa0TwJ1iElsKE/iO6Hk\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 361,
		"path": "../public/assets/hero-terminal-DCBAppxf.js"
	},
	"/assets/products-DY-DiBG0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cf2-FR0ExvJZeQhwhxlvN/BHKA8rjg8\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 7410,
		"path": "../public/assets/products-DY-DiBG0.js"
	},
	"/assets/refinery-BxvBPTnz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"142-Mdz+70z4EGdTtfwTfF4ZF4DB890\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 322,
		"path": "../public/assets/refinery-BxvBPTnz.js"
	},
	"/assets/hero-terminal-CI1i98Id.jpg": {
		"type": "image/jpeg",
		"etag": "\"36bb5-p+JLzf1jG3WsUsx/DwNB/cCQ5Kg\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 224181,
		"path": "../public/assets/hero-terminal-CI1i98Id.jpg"
	},
	"/assets/routes-BYDzmVFM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1526-CsG1bXoILSCppi8iiY/3DOxZe6c\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 5414,
		"path": "../public/assets/routes-BYDzmVFM.js"
	},
	"/assets/services-DNXQMe-7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86c-8gUdu7iKGu+OuruLrRfRCisX0wo\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 2156,
		"path": "../public/assets/services-DNXQMe-7.js"
	},
	"/assets/shield-check-tGJtOVhJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136-pTDCJtVoNJ4ODm/feX74BBdHWAs\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 310,
		"path": "../public/assets/shield-check-tGJtOVhJ.js"
	},
	"/assets/lpg-facility-CokMnla_.jpg": {
		"type": "image/jpeg",
		"etag": "\"28428-8yRqKT8p1BUYwtnGViTWMtSns6s\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 164904,
		"path": "../public/assets/lpg-facility-CokMnla_.jpg"
	},
	"/assets/tanker-truck-DF5Z5qfe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"39-fpxzSKF4k2Zz+7Yh0bJXUCt+n1s\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 57,
		"path": "../public/assets/tanker-truck-DF5Z5qfe.js"
	},
	"/assets/styles-6YIFvnOy.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15693-tnatd+PdGnYfymlHrwt4ViDHnYU\"",
		"mtime": "2026-07-18T07:00:45.008Z",
		"size": 87699,
		"path": "../public/assets/styles-6YIFvnOy.css"
	},
	"/assets/team-D-Nmh0da.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7fb-+zy3YHGF0t45mK2kR1RvBt427jY\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 2043,
		"path": "../public/assets/team-D-Nmh0da.js"
	},
	"/assets/truck-B0usP7St.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18c-ONQ4WwdsMwF5Qrhmpp+G60TiBPQ\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 396,
		"path": "../public/assets/truck-B0usP7St.js"
	},
	"/assets/users-Bh5pUF7C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"128-DXKGqiOTY1QFis3OdCQZBSZYmYY\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 296,
		"path": "../public/assets/users-Bh5pUF7C.js"
	},
	"/assets/why-taksan-ZzsThmv5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a8-f55/EmegUqfGDekVKNOAydrCcUg\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 2472,
		"path": "../public/assets/why-taksan-ZzsThmv5.js"
	},
	"/assets/index-A-CJJzlH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f3da-KA+s53GcNgvonRo3rLyf48dB5eU\"",
		"mtime": "2026-07-18T07:00:45.006Z",
		"size": 390106,
		"path": "../public/assets/index-A-CJJzlH.js"
	},
	"/assets/refinery-C6ycokls.jpg": {
		"type": "image/jpeg",
		"etag": "\"295af-fvCg590FF6RrZjyf5C6gFJNVt00\"",
		"mtime": "2026-07-18T07:00:45.007Z",
		"size": 169391,
		"path": "../public/assets/refinery-C6ycokls.jpg"
	},
	"/assets/tanker-truck-Di45EkyA.jpg": {
		"type": "image/jpeg",
		"etag": "\"27760-kZgatiammEOIDPwc7sq0x1GlimQ\"",
		"mtime": "2026-07-18T07:00:45.008Z",
		"size": 161632,
		"path": "../public/assets/tanker-truck-Di45EkyA.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_tATO0A = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_tATO0A
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
