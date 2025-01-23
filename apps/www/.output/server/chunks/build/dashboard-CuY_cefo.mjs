import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as c from 'react';
import { useState } from 'react';
import { useSuspenseQuery, queryOptions, useQueryClient, useMutation } from '@tanstack/react-query';
import { r as rr, s as se$1, Q as Qe$1, D as De } from './button-U5Omqg_X.mjs';
import { U as U$1, I as I$1, y, b as b$1, _ } from './index-DJ3tN8qV.mjs';
import { I as It, j as jt, K as Kt, W as We$1, F as Fe$1, G as Ge$1, H as Ht } from './Combination-BnSwnZvs.mjs';
import { v } from './index-DXPxg-Qg.mjs';
import { X as X$1, LoaderCircleIcon } from 'lucide-react';
import { p, c as c$1 } from './input-i05uZG0N.mjs';
import { S as Se$1, K as Kn, f as ft, a as fo, h as ht, g as go } from '../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import { useRouter, isRedirect } from '@tanstack/react-router';
import 'react-dom';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:async_hooks';
import 'fs';
import 'path';
import 'os';
import 'crypto';
import 'drizzle-orm/node-postgres';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import 'better-auth/plugins';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/mysql-core';
import 'drizzle-orm/sqlite-core';
import 'zod';
import 'react-dom/server';
import '@tanstack/react-router-with-query';
import '@tanstack/router-devtools';
import 'sonner';
import 'usehooks-ts';

function Se(e) {
  const t = useRouter();
  return async (...o) => {
    try {
      const r = await e(...o);
      if (isRedirect(r)) throw r;
      return r;
    } catch (r) {
      if (isRedirect(r)) {
        const n = t.resolveRedirect({ ...r, _fromLocation: t.state.location });
        return t.navigate(n);
      }
      throw r;
    }
  };
}
var P = "Dialog", [L, Tt] = U$1(P), [Fe, u] = L(P), W = (e) => {
  const { __scopeDialog: t, children: o, open: r, defaultOpen: n, onOpenChange: a, modal: l = true } = e, c$1 = c.useRef(null), p = c.useRef(null), [f = false, y] = _({ prop: r, defaultProp: n, onChange: a });
  return jsx(Fe, { scope: t, triggerRef: c$1, contentRef: p, contentId: Ht(), titleId: Ht(), descriptionId: Ht(), open: f, onOpenChange: y, onOpenToggle: c.useCallback(() => y((fe) => !fe), [y]), modal: l, children: o });
};
W.displayName = P;
var G = "DialogTrigger", q = c.forwardRef((e, t) => {
  const { __scopeDialog: o, ...r } = e, n = u(G, o), a = rr(t, n.triggerRef);
  return jsx(v.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": n.open, "aria-controls": n.contentId, "data-state": I(n.open), ...r, ref: a, onClick: I$1(e.onClick, n.onOpenToggle) });
});
q.displayName = G;
var b = "DialogPortal", [Me, B] = L(b, { forceMount: void 0 }), U = (e) => {
  const { __scopeDialog: t, forceMount: o, children: r, container: n } = e, a = u(b, t);
  return jsx(Me, { scope: t, forceMount: o, children: c.Children.map(r, (l) => jsx(y, { present: o || a.open, children: jsx(Ge$1, { asChild: true, container: n, children: l }) })) });
};
U.displayName = b;
var D = "DialogOverlay", z = c.forwardRef((e, t) => {
  const o = B(D, e.__scopeDialog), { forceMount: r = o.forceMount, ...n } = e, a = u(D, e.__scopeDialog);
  return a.modal ? jsx(y, { present: r || a.open, children: jsx($e, { ...n, ref: t }) }) : null;
});
z.displayName = D;
var $e = c.forwardRef((e, t) => {
  const { __scopeDialog: o, ...r } = e, n = u(D, o);
  return jsx(It, { as: se$1, allowPinchZoom: true, shards: [n.contentRef], children: jsx(v.div, { "data-state": I(n.open), ...r, ref: t, style: { pointerEvents: "auto", ...r.style } }) });
}), m = "DialogContent", Q = c.forwardRef((e, t) => {
  const o = B(m, e.__scopeDialog), { forceMount: r = o.forceMount, ...n } = e, a = u(m, e.__scopeDialog);
  return jsx(y, { present: r || a.open, children: a.modal ? jsx(je, { ...n, ref: t }) : jsx(ke, { ...n, ref: t }) });
});
Q.displayName = m;
var je = c.forwardRef((e, t) => {
  const o = u(m, e.__scopeDialog), r = c.useRef(null), n = rr(t, o.contentRef, r);
  return c.useEffect(() => {
    const a = r.current;
    if (a) return jt(a);
  }, []), jsx(H, { ...e, ref: n, trapFocus: o.open, disableOutsidePointerEvents: true, onCloseAutoFocus: I$1(e.onCloseAutoFocus, (a) => {
    var _a;
    a.preventDefault(), (_a = o.triggerRef.current) == null ? void 0 : _a.focus();
  }), onPointerDownOutside: I$1(e.onPointerDownOutside, (a) => {
    const l = a.detail.originalEvent, c = l.button === 0 && l.ctrlKey === true;
    (l.button === 2 || c) && a.preventDefault();
  }), onFocusOutside: I$1(e.onFocusOutside, (a) => a.preventDefault()) });
}), ke = c.forwardRef((e, t) => {
  const o = u(m, e.__scopeDialog), r = c.useRef(false), n = c.useRef(false);
  return jsx(H, { ...e, ref: t, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (a) => {
    var _a, _b;
    (_a = e.onCloseAutoFocus) == null ? void 0 : _a.call(e, a), a.defaultPrevented || (r.current || ((_b = o.triggerRef.current) == null ? void 0 : _b.focus()), a.preventDefault()), r.current = false, n.current = false;
  }, onInteractOutside: (a) => {
    var _a, _b;
    (_a = e.onInteractOutside) == null ? void 0 : _a.call(e, a), a.defaultPrevented || (r.current = true, a.detail.originalEvent.type === "pointerdown" && (n.current = true));
    const l = a.target;
    ((_b = o.triggerRef.current) == null ? void 0 : _b.contains(l)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && n.current && a.preventDefault();
  } });
}), H = c.forwardRef((e, t) => {
  const { __scopeDialog: o, trapFocus: r, onOpenAutoFocus: n, onCloseAutoFocus: a, ...l } = e, c$1 = u(m, o), p = c.useRef(null), f = rr(t, p);
  return Kt(), jsxs(Fragment, { children: [jsx(We$1, { asChild: true, loop: true, trapped: r, onMountAutoFocus: n, onUnmountAutoFocus: a, children: jsx(Fe$1, { role: "dialog", id: c$1.contentId, "aria-describedby": c$1.descriptionId, "aria-labelledby": c$1.titleId, "data-state": I(c$1.open), ...l, ref: f, onDismiss: () => c$1.onOpenChange(false) }) }), jsxs(Fragment, { children: [jsx(Le, { titleId: c$1.titleId }), jsx(Ge, { contentRef: p, descriptionId: c$1.descriptionId })] })] });
}), w = "DialogTitle", V = c.forwardRef((e, t) => {
  const { __scopeDialog: o, ...r } = e, n = u(w, o);
  return jsx(v.h2, { id: n.titleId, ...r, ref: t });
});
V.displayName = w;
var K = "DialogDescription", X = c.forwardRef((e, t) => {
  const { __scopeDialog: o, ...r } = e, n = u(K, o);
  return jsx(v.p, { id: n.descriptionId, ...r, ref: t });
});
X.displayName = K;
var Y = "DialogClose", Z = c.forwardRef((e, t) => {
  const { __scopeDialog: o, ...r } = e, n = u(Y, o);
  return jsx(v.button, { type: "button", ...r, ref: t, onClick: I$1(e.onClick, () => n.onOpenChange(false)) });
});
Z.displayName = Y;
function I(e) {
  return e ? "open" : "closed";
}
var J = "DialogTitleWarning", [At, ee] = b$1(J, { contentName: m, titleName: w, docsSlug: "dialog" }), Le = ({ titleId: e }) => {
  const t = ee(J), o = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(o));
  }, [o, e]), null;
}, We = "DialogDescriptionWarning", Ge = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ee(We).contentName}}.`;
  return c.useEffect(() => {
    var _a;
    const n = (_a = e.current) == null ? void 0 : _a.getAttribute("aria-describedby");
    t && n && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, qe = W, Be = q, Ue = U, te = z, oe = Q, re = V, ae = X, ze = Z;
const Qe = qe, He = Be, Ve = Ue, ne = c.forwardRef(({ className: e, ...t }, o) => c.createElement(te, { ref: o, className: Qe$1("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e), ...t }));
ne.displayName = te.displayName;
const se = c.forwardRef(({ className: e, children: t, ...o }, r) => c.createElement(Ve, null, c.createElement(ne, null), c.createElement(oe, { ref: r, className: Qe$1("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e), ...o }, t, c.createElement(ze, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, c.createElement(X$1, { className: "h-4 w-4" }), c.createElement("span", { className: "sr-only" }, "Close")))));
se.displayName = oe.displayName;
const ie = ({ className: e, ...t }) => c.createElement("div", { className: Qe$1("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t });
ie.displayName = "DialogHeader";
const ce = ({ className: e, ...t }) => c.createElement("div", { className: Qe$1("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
ce.displayName = "DialogFooter";
const le = c.forwardRef(({ className: e, ...t }, o) => c.createElement(re, { ref: o, className: Qe$1("text-lg font-semibold leading-none tracking-tight", e), ...t }));
le.displayName = re.displayName;
const de = c.forwardRef(({ className: e, ...t }, o) => c.createElement(ae, { ref: o, className: Qe$1("text-sm text-muted-foreground", e), ...t }));
de.displayName = ae.displayName;
const ue = Se$1({ method: "GET" }).handler(Kn(Ke, "c_19i7ppj", "$$function0"), async () => {
  const e = await ft();
  if (!e) throw new Error("User not connected");
  return fo.select().from(ht).where(eq(ht.userId, e.user.id));
}), O = () => queryOptions({ queryKey: ["projects"], queryFn: () => ue() }), pe = Se$1({ method: "POST" }).validator((e) => go.omit({ userId: true }).parse(e)).handler(Kn(Xe, "c_19i7ppj", "$$function1"), async ({ data: e }) => {
  const t = await ft();
  if (!t) throw new Error("User not connected");
  await fo.insert(ht).values({ userId: t.user.id, ...e });
});
function Ke(e) {
  return ue.__executeServer(e);
}
function Xe(e) {
  return pe.__executeServer(e);
}
function Ye() {
  const [e, t] = useState(""), [o, r] = useState(void 0), [n, a] = useState(false), l = useQueryClient(), { mutate: c, isPending: p$1 } = useMutation({ mutationFn: Se(pe), onSuccess: () => {
    a(false), l.invalidateQueries(O());
  } });
  return jsxs(Qe, { open: n, onOpenChange: a, children: [jsx(He, { asChild: true, children: jsx(De, { children: "Add Project" }) }), jsxs(se, { className: "sm:max-w-[425px]", children: [jsxs(ie, { children: [jsx(le, { children: "Add project" }), jsx(de, { children: "Create a new project to your project list." })] }), jsxs("div", { className: "space-y-4", children: [jsxs("div", { className: "space-y-1", children: [jsx(c$1, { htmlFor: "name", children: "Name" }), jsx(p, { value: e, onChange: (f) => {
    t(f.target.value);
  }, id: "name", placeholder: "Uniswap V5", className: "col-span-3" })] }), jsxs("div", { className: "space-y-1", children: [jsx(c$1, { htmlFor: "description", children: "Description" }), jsx(p, { value: o, onChange: (f) => {
    r(f.target.value);
  }, id: "description", placeholder: "The next generation of exchange", className: "col-span-3" })] })] }), jsx(ce, { children: jsx(De, { type: "submit", disabled: p$1, onClick: () => c({ data: { name: e, description: o } }), children: p$1 ? jsx(LoaderCircleIcon, { className: "animate-spin size-4" }) : "Create project" }) })] })] });
}
const St = function() {
  const { data: t } = useSuspenseQuery(O());
  return jsxs("div", { className: "container mx-auto py-6 space-y-6", children: [jsxs("div", { className: "flex gap-2", children: [jsx(p, { placeholder: "Search projects", className: "bg-background" }), jsx(Ye, {})] }), jsx("div", { className: "grid grid-cols-4 gap-4", children: t ? t.map((o) => jsxs("div", { className: "border rounded p-4 w-full bg-background", children: [jsx("div", { children: o.name }), jsx("div", { className: "text-sm text-muted-foreground", children: o.description })] }, o.id)) : null })] });
}, Ft = async ({ context: e }) => {
  await e.queryClient.ensureQueryData(O());
};

export { St as component, Ft as loader };
//# sourceMappingURL=dashboard-CuY_cefo.mjs.map
