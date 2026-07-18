import { n as __toESM } from "../_runtime.mjs";
import { s as performance_default } from "../_libs/h3+rou3+srvx+unenv.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Stat-pjbX_Wf_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AnimatedStat({ value, suffix = "", label }) {
	const [n, setN] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting && !started.current) {
					started.current = true;
					const duration = 1400;
					const start = performance_default.now();
					const step = (t) => {
						const p = Math.min(1, (t - start) / duration);
						setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
						if (p < 1) requestAnimationFrame(step);
					};
					requestAnimationFrame(step);
				}
			});
		}, { threshold: .3 });
		obs.observe(el);
		return () => obs.disconnect();
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "font-display text-4xl md:text-5xl font-bold text-brand",
			children: [n.toLocaleString(), suffix]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: label
		})]
	});
}
//#endregion
export { AnimatedStat as t };
