import { Q as Qe, D as De } from './button-U5Omqg_X.mjs';
import { EyeIcon, EyeClosedIcon } from 'lucide-react';
import * as c from 'react';
import { p } from './input-i05uZG0N.mjs';

const w = c.forwardRef(({ className: r, ...a }, o) => {
  const [s, l] = c.useState(false), t = a.value === "" || a.value === void 0 || a.disabled;
  return c.createElement("div", { className: "relative" }, c.createElement(p, { type: s ? "text" : "password", className: Qe("hide-password-toggle pr-10", r), ref: o, ...a }), c.createElement(De, { type: "button", variant: "ghost", size: "sm", className: "absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent", onClick: () => l((n) => !n), disabled: t }, s && !t ? c.createElement(EyeIcon, { className: "h-4 w-4", "aria-hidden": "true" }) : c.createElement(EyeClosedIcon, { className: "h-4 w-4", "aria-hidden": "true" }), c.createElement("span", { className: "sr-only" }, s ? "Hide password" : "Show password")), c.createElement("style", null, `
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`));
});
w.displayName = "PasswordInput";

export { w };
//# sourceMappingURL=password-input-CkSUh9RZ.mjs.map
