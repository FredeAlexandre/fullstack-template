import { jsxs, jsx } from 'react/jsx-runtime';
import { zodResolver } from '@hookform/resolvers/zod';
import { r as rr, Q as Qe, D as De } from './button-U5Omqg_X.mjs';
import * as c from 'react';
import { U, _, I, y } from './index-DJ3tN8qV.mjs';
import { n } from './index-B_-Stg42.mjs';
import { v } from './index-DXPxg-Qg.mjs';
import { Check } from 'lucide-react';
import { y as y$1, R, x, C as C$1, g, v as v$1, E } from './form-YLSo8OmR.mjs';
import { p } from './input-i05uZG0N.mjs';
import { w } from './password-input-CkSUh9RZ.mjs';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as C from 'zod';
import { i } from './auth-client-CfR_Uf3d.mjs';
import 'react-dom';
import 'better-auth/client/plugins';
import 'better-auth/react';

function oe(t) {
  const r = c.useRef({ value: t, previous: t });
  return c.useMemo(() => (r.current.value !== t && (r.current.previous = r.current.value, r.current.value = t), r.current.previous), [t]);
}
var D = "Checkbox", [ne, Ee] = U(D), [ae, ce] = ne(D), H = c.forwardRef((t, r) => {
  const { __scopeCheckbox: n, name: o, checked: i, defaultChecked: s, required: h, disabled: m, value: y = "on", onCheckedChange: E, form: u, ...R } = t, [p, k] = c.useState(null), S = rr(r, (c) => k(c)), I$1 = c.useRef(false), M = p ? u || !!p.closest("form") : true, [f = false, F] = _({ prop: i, defaultProp: s, onChange: E }), U = c.useRef(f);
  return c.useEffect(() => {
    const c = p == null ? void 0 : p.form;
    if (c) {
      const b = () => F(U.current);
      return c.addEventListener("reset", b), () => c.removeEventListener("reset", b);
    }
  }, [p, F]), jsxs(ae, { scope: n, state: f, disabled: m, children: [jsx(v.button, { type: "button", role: "checkbox", "aria-checked": d(f) ? "mixed" : f, "aria-required": h, "data-state": K(f), "data-disabled": m ? "" : void 0, disabled: m, value: y, ...R, ref: S, onKeyDown: I(t.onKeyDown, (c) => {
    c.key === "Enter" && c.preventDefault();
  }), onClick: I(t.onClick, (c) => {
    F((b) => d(b) ? true : !b), M && (I$1.current = c.isPropagationStopped(), I$1.current || c.stopPropagation());
  }) }), M && jsx(se, { control: p, bubbles: !I$1.current, name: o, value: y, checked: f, required: h, disabled: m, form: u, style: { transform: "translateX(-100%)" }, defaultChecked: d(s) ? false : s })] });
});
H.displayName = D;
var L = "CheckboxIndicator", O = c.forwardRef((t, r) => {
  const { __scopeCheckbox: n, forceMount: o, ...i } = t, s = ce(L, n);
  return jsx(y, { present: o || d(s.state) || s.state === true, children: jsx(v.span, { "data-state": K(s.state), "data-disabled": s.disabled ? "" : void 0, ...i, ref: r, style: { pointerEvents: "none", ...t.style } }) });
});
O.displayName = L;
var se = (t) => {
  const { control: r, checked: n$1, bubbles: o = true, defaultChecked: i, ...s } = t, h = c.useRef(null), m = oe(n$1), y = n(r);
  c.useEffect(() => {
    const u = h.current, R = window.HTMLInputElement.prototype, k = Object.getOwnPropertyDescriptor(R, "checked").set;
    if (m !== n$1 && k) {
      const S = new Event("click", { bubbles: o });
      u.indeterminate = d(n$1), k.call(u, d(n$1) ? false : n$1), u.dispatchEvent(S);
    }
  }, [m, n$1, o]);
  const E = c.useRef(d(n$1) ? false : n$1);
  return jsx("input", { type: "checkbox", "aria-hidden": true, defaultChecked: i != null ? i : E.current, ...s, tabIndex: -1, ref: h, style: { ...t.style, ...y, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } });
};
function d(t) {
  return t === "indeterminate";
}
function K(t) {
  return d(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
var q = H, ie = O;
const T = c.forwardRef(({ className: t, ...r }, n) => c.createElement(q, { ref: n, className: Qe("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", t), ...r }, c.createElement(ie, { className: Qe("flex items-center justify-center text-current") }, c.createElement(Check, { className: "h-4 w-4" }))));
T.displayName = q.displayName;
const le = C.object({ name: C.string().min(2).max(255), email: C.string().email(), password: C.string().min(8).max(255), policy: C.literal(true) }), Re = function() {
  const r = useForm({ resolver: zodResolver(le) });
  async function n(o) {
    try {
      const { error: i$1 } = await i.signUp.email(o);
      i$1 ? toast.error(i$1.message) : toast.success("Account created successfully. Check your email to verify your account.");
    } catch {
      toast.error("Failed to submit the form. Please try again.");
    }
  }
  return jsx("div", { className: "flex justify-center items-center h-dvh", children: jsxs("div", { className: "w-[30rem] border p-4 rounded-lg space-y-6", children: [jsxs("div", { className: "space-y-2", children: [jsx("h1", { className: "font-bold", children: "Sign Up" }), jsx("p", { className: "text-muted-foreground", children: "Create an account to access smartflow" })] }), jsx(y$1, { ...r, children: jsxs("form", { onSubmit: r.handleSubmit(n), className: "space-y-2 w-full", children: [jsx(R, { control: r.control, name: "name", render: ({ field: o }) => jsxs(x, { children: [jsx(C$1, { children: "Name" }), jsx(g, { children: jsx(p, { placeholder: "Alex", type: "text", ...o }) }), jsx(v$1, { children: "How we should call you." }), jsx(E, {})] }) }), jsx(R, { control: r.control, name: "email", render: ({ field: o }) => jsxs(x, { children: [jsx(C$1, { children: "Email" }), jsx(g, { children: jsx(p, { placeholder: "alex@smart-flow.site", type: "email", ...o }) }), jsx(v$1, { children: "Communication & authentification email." }), jsx(E, {})] }) }), jsx(R, { control: r.control, name: "password", render: ({ field: o }) => jsxs(x, { children: [jsx(C$1, { children: "Password" }), jsx(g, { children: jsx(w, { placeholder: "Placeholder", ...o }) }), jsx(v$1, { children: "Enter a password." }), jsx(E, {})] }) }), jsx(R, { control: r.control, name: "policy", render: ({ field: o }) => jsxs(x, { className: "flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4", children: [jsx(g, { children: jsx(T, { checked: o.value, onCheckedChange: o.onChange }) }), jsxs("div", { className: "space-y-1 leading-none", children: [jsx(C$1, { children: "I accept the user policy" }), jsx(v$1, { children: "You can manage your mobile notifications in the mobile settings page." }), jsx(E, {})] })] }) }), jsx(De, { className: "w-full", type: "submit", children: "Submit" })] }) })] }) });
};

export { Re as component };
//# sourceMappingURL=signup-BDaQ3DAc.mjs.map
