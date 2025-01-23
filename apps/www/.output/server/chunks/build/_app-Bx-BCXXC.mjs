import { jsx, jsxs } from 'react/jsx-runtime';
import { Link, Outlet } from '@tanstack/react-router';
import { Q as Qe$1, r as rr, n as ne$1, D as De$1, s as se$1 } from './button-U5Omqg_X.mjs';
import * as c from 'react';
import c__default, { useLayoutEffect, useEffect } from 'react';
import { U as U$1, S, h, _, I, y } from './index-DJ3tN8qV.mjs';
import { v, h as h$1 } from './index-DXPxg-Qg.mjs';
import { ChevronRight, Check, Circle, BellIcon, User, CreditCard, Settings, Keyboard, Users, UserPlus, Mail, MessageSquare, PlusCircle, Plus, Github, LifeBuoy, Cloud, LogOut } from 'lucide-react';
import { H as Ht$1, j as jt$1, K as Kt$1, W as We$1, F as Fe$1, I as It$1, G as Ge$1 } from './Combination-BnSwnZvs.mjs';
import * as f from 'react-dom';
import { n } from './index-B_-Stg42.mjs';
import { i } from './auth-client-CfR_Uf3d.mjs';
import 'better-auth/client/plugins';
import 'better-auth/react';

var at = "Avatar", [ur, aa] = U$1(at), [dr, Ft] = ur(at), $t = c.forwardRef((e, t) => {
  const { __scopeAvatar: n, ...o } = e, [r, i] = c.useState("idle");
  return jsx(dr, { scope: n, imageLoadingStatus: r, onImageLoadingStatusChange: i, children: jsx(v.span, { ...o, ref: t }) });
});
$t.displayName = at;
var Gt = "AvatarImage", Bt = c.forwardRef((e, t) => {
  const { __scopeAvatar: n, src: o, onLoadingStatusChange: r = () => {
  }, ...i } = e, s = Ft(Gt, n), a = fr(o, i.referrerPolicy), d = S((f) => {
    r(f), s.onImageLoadingStatusChange(f);
  });
  return h(() => {
    a !== "idle" && d(a);
  }, [a, d]), a === "loaded" ? jsx(v.img, { ...i, ref: t, src: o }) : null;
});
Bt.displayName = Gt;
var Kt = "AvatarFallback", Ht = c.forwardRef((e, t) => {
  const { __scopeAvatar: n, delayMs: o, ...r } = e, i = Ft(Kt, n), [s, a] = c.useState(o === void 0);
  return c.useEffect(() => {
    if (o !== void 0) {
      const d = window.setTimeout(() => a(true), o);
      return () => window.clearTimeout(d);
    }
  }, [o]), s && i.imageLoadingStatus !== "loaded" ? jsx(v.span, { ...r, ref: t }) : null;
});
Ht.displayName = Kt;
function fr(e, t) {
  const [n, o] = c.useState("idle");
  return h(() => {
    if (!e) {
      o("error");
      return;
    }
    let r = true;
    const i = new window.Image(), s = (a) => () => {
      r && o(a);
    };
    return o("loading"), i.onload = s("loaded"), i.onerror = s("error"), i.src = e, t && (i.referrerPolicy = t), () => {
      r = false;
    };
  }, [e, t]), n;
}
var Ut = $t, Wt = Bt, Vt = Ht;
const zt = c.forwardRef(({ className: e, ...t }, n) => c.createElement(Ut, { ref: n, className: Qe$1("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e), ...t }));
zt.displayName = Ut.displayName;
const Yt = c.forwardRef(({ className: e, ...t }, n) => c.createElement(Wt, { ref: n, className: Qe$1("aspect-square h-full w-full", e), ...t }));
Yt.displayName = Wt.displayName;
const jt = c.forwardRef(({ className: e, ...t }, n) => c.createElement(Vt, { ref: n, className: Qe$1("flex h-full w-full items-center justify-center rounded-full bg-muted", e), ...t }));
jt.displayName = Vt.displayName;
function Xt(e) {
  const t = e + "CollectionProvider", [n, o] = U$1(t), [r, i] = n(t, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), s = (h) => {
    const { scope: m, children: w } = h, x = c__default.useRef(null), v = c__default.useRef(/* @__PURE__ */ new Map()).current;
    return jsx(r, { scope: m, itemMap: v, collectionRef: x, children: w });
  };
  s.displayName = t;
  const a = e + "CollectionSlot", d = c__default.forwardRef((h, m) => {
    const { scope: w, children: x } = h, v = i(a, w), y = rr(m, v.collectionRef);
    return jsx(se$1, { ref: y, children: x });
  });
  d.displayName = a;
  const f = e + "CollectionItemSlot", p = "data-radix-collection-item", u = c__default.forwardRef((h, m) => {
    const { scope: w, children: x, ...v } = h, y = c__default.useRef(null), M = rr(m, y), C = i(f, w);
    return c__default.useEffect(() => (C.itemMap.set(y, { ref: y, ...v }), () => void C.itemMap.delete(y))), jsx(se$1, { [p]: "", ref: M, children: x });
  });
  u.displayName = f;
  function g(h) {
    const m = i(e + "CollectionConsumer", h);
    return c__default.useCallback(() => {
      const x = m.collectionRef.current;
      if (!x) return [];
      const v = Array.from(x.querySelectorAll(`[${p}]`));
      return Array.from(m.itemMap.values()).sort((C, R) => v.indexOf(C.ref.current) - v.indexOf(R.ref.current));
    }, [m.collectionRef, m.itemMap]);
  }
  return [{ Provider: s, Slot: d, ItemSlot: u }, g, o];
}
var pr = c.createContext(void 0);
function qt(e) {
  const t = c.useContext(pr);
  return e || t || "ltr";
}
const mr = ["top", "right", "bottom", "left"], re = Math.min, V = Math.max, Ge = Math.round, ke = Math.floor, Q = (e) => ({ x: e, y: e }), hr = { left: "right", right: "left", bottom: "top", top: "bottom" }, gr = { start: "end", end: "start" };
function tt(e, t, n) {
  return V(e, re(t, n));
}
function ne(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function oe(e) {
  return e.split("-")[0];
}
function xe(e) {
  return e.split("-")[1];
}
function ct(e) {
  return e === "x" ? "y" : "x";
}
function lt(e) {
  return e === "y" ? "height" : "width";
}
function ie(e) {
  return ["top", "bottom"].includes(oe(e)) ? "y" : "x";
}
function ut(e) {
  return ct(ie(e));
}
function wr(e, t, n) {
  n === void 0 && (n = false);
  const o = xe(e), r = ut(e), i = lt(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Be(s)), [s, Be(s)];
}
function vr(e) {
  const t = Be(e);
  return [nt(e), t, nt(t)];
}
function nt(e) {
  return e.replace(/start|end/g, (t) => gr[t]);
}
function xr(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function yr(e, t, n, o) {
  const r = xe(e);
  let i = xr(oe(e), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), t && (i = i.concat(i.map(nt)))), i;
}
function Be(e) {
  return e.replace(/left|right|bottom|top/g, (t) => hr[t]);
}
function br(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Zt(e) {
  return typeof e != "number" ? br(e) : { top: e, right: e, bottom: e, left: e };
}
function Ke(e) {
  const { x: t, y: n, width: o, height: r } = e;
  return { width: o, height: r, top: n, left: t, right: t + o, bottom: n + r, x: t, y: n };
}
function St(e, t, n) {
  let { reference: o, floating: r } = e;
  const i = ie(t), s = ut(t), a = lt(s), d = oe(t), f = i === "y", p = o.x + o.width / 2 - r.width / 2, u = o.y + o.height / 2 - r.height / 2, g = o[a] / 2 - r[a] / 2;
  let h;
  switch (d) {
    case "top":
      h = { x: p, y: o.y - r.height };
      break;
    case "bottom":
      h = { x: p, y: o.y + o.height };
      break;
    case "right":
      h = { x: o.x + o.width, y: u };
      break;
    case "left":
      h = { x: o.x - r.width, y: u };
      break;
    default:
      h = { x: o.x, y: o.y };
  }
  switch (xe(t)) {
    case "start":
      h[s] -= g * (n && f ? -1 : 1);
      break;
    case "end":
      h[s] += g * (n && f ? -1 : 1);
      break;
  }
  return h;
}
const Cr = async (e, t, n) => {
  const { placement: o = "bottom", strategy: r = "absolute", middleware: i = [], platform: s } = n, a = i.filter(Boolean), d = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({ reference: e, floating: t, strategy: r }), { x: p, y: u } = St(f, o, d), g = o, h = {}, m = 0;
  for (let w = 0; w < a.length; w++) {
    const { name: x, fn: v } = a[w], { x: y, y: M, data: C, reset: R } = await v({ x: p, y: u, initialPlacement: o, placement: g, strategy: r, middlewareData: h, rects: f, platform: s, elements: { reference: e, floating: t } });
    p = y != null ? y : p, u = M != null ? M : u, h = { ...h, [x]: { ...h[x], ...C } }, R && m <= 50 && (m++, typeof R == "object" && (R.placement && (g = R.placement), R.rects && (f = R.rects === true ? await s.getElementRects({ reference: e, floating: t, strategy: r }) : R.rects), { x: p, y: u } = St(f, g, d)), w = -1);
  }
  return { x: p, y: u, placement: g, strategy: r, middlewareData: h };
};
async function Se(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: r, platform: i, rects: s, elements: a, strategy: d } = e, { boundary: f = "clippingAncestors", rootBoundary: p = "viewport", elementContext: u = "floating", altBoundary: g = false, padding: h = 0 } = ne(t, e), m = Zt(h), x = a[g ? u === "floating" ? "reference" : "floating" : u], v = Ke(await i.getClippingRect({ element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)), boundary: f, rootBoundary: p, strategy: d })), y = u === "floating" ? { x: o, y: r, width: s.floating.width, height: s.floating.height } : s.reference, M = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), C = await (i.isElement == null ? void 0 : i.isElement(M)) ? await (i.getScale == null ? void 0 : i.getScale(M)) || { x: 1, y: 1 } : { x: 1, y: 1 }, R = Ke(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: a, rect: y, offsetParent: M, strategy: d }) : y);
  return { top: (v.top - R.top + m.top) / C.y, bottom: (R.bottom - v.bottom + m.bottom) / C.y, left: (v.left - R.left + m.left) / C.x, right: (R.right - v.right + m.right) / C.x };
}
const Mr = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: o, placement: r, rects: i, platform: s, elements: a, middlewareData: d } = t, { element: f, padding: p = 0 } = ne(e, t) || {};
  if (f == null) return {};
  const u = Zt(p), g = { x: n, y: o }, h = ut(r), m = lt(h), w = await s.getDimensions(f), x = h === "y", v = x ? "top" : "left", y = x ? "bottom" : "right", M = x ? "clientHeight" : "clientWidth", C = i.reference[m] + i.reference[h] - g[h] - i.floating[m], R = g[h] - i.reference[h], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
  let I = P ? P[M] : 0;
  (!I || !await (s.isElement == null ? void 0 : s.isElement(P))) && (I = a.floating[M] || i.floating[m]);
  const S = C / 2 - R / 2, L = I / 2 - w[m] / 2 - 1, O = re(u[v], L), k = re(u[y], L), F = O, T = I - w[m] - k, D = I / 2 - w[m] / 2 + S, K = tt(F, D, T), _ = !d.arrow && xe(r) != null && D !== K && i.reference[m] / 2 - (D < F ? O : k) - w[m] / 2 < 0, $ = _ ? D < F ? D - F : D - T : 0;
  return { [h]: g[h] + $, data: { [h]: K, centerOffset: D - K - $, ..._ && { alignmentOffset: $ } }, reset: _ };
} }), Rr = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n, o;
    const { placement: r, middlewareData: i, rects: s, initialPlacement: a, platform: d, elements: f } = t, { mainAxis: p = true, crossAxis: u = true, fallbackPlacements: g, fallbackStrategy: h = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: w = true, ...x } = ne(e, t);
    if ((n = i.arrow) != null && n.alignmentOffset) return {};
    const v = oe(r), y = ie(a), M = oe(a) === a, C = await (d.isRTL == null ? void 0 : d.isRTL(f.floating)), R = g || (M || !w ? [Be(a)] : vr(a)), P = m !== "none";
    !g && P && R.push(...yr(a, w, m, C));
    const I = [a, ...R], S = await Se(t, x), L = [];
    let O = ((o = i.flip) == null ? void 0 : o.overflows) || [];
    if (p && L.push(S[v]), u) {
      const D = wr(r, s, C);
      L.push(S[D[0]], S[D[1]]);
    }
    if (O = [...O, { placement: r, overflows: L }], !L.every((D) => D <= 0)) {
      var k, F;
      const D = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1, K = I[D];
      if (K) return { data: { index: D, overflows: O }, reset: { placement: K } };
      let _ = (F = O.filter(($) => $.overflows[0] <= 0).sort(($, A) => $.overflows[1] - A.overflows[1])[0]) == null ? void 0 : F.placement;
      if (!_) switch (h) {
        case "bestFit": {
          var T;
          const $ = (T = O.filter((A) => {
            if (P) {
              const b = ie(A.placement);
              return b === y || b === "y";
            }
            return true;
          }).map((A) => [A.placement, A.overflows.filter((b) => b > 0).reduce((b, B) => b + B, 0)]).sort((A, b) => A[1] - b[1])[0]) == null ? void 0 : T[0];
          $ && (_ = $);
          break;
        }
        case "initialPlacement":
          _ = a;
          break;
      }
      if (r !== _) return { reset: { placement: _ } };
    }
    return {};
  } };
};
function Et(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function Pt(e) {
  return mr.some((t) => e[t] >= 0);
}
const Ar = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(t) {
    const { rects: n } = t, { strategy: o = "referenceHidden", ...r } = ne(e, t);
    switch (o) {
      case "referenceHidden": {
        const i = await Se(t, { ...r, elementContext: "reference" }), s = Et(i, n.reference);
        return { data: { referenceHiddenOffsets: s, referenceHidden: Pt(s) } };
      }
      case "escaped": {
        const i = await Se(t, { ...r, altBoundary: true }), s = Et(i, n.floating);
        return { data: { escapedOffsets: s, escaped: Pt(s) } };
      }
      default:
        return {};
    }
  } };
};
async function Sr(e, t) {
  const { placement: n, platform: o, elements: r } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = oe(n), a = xe(n), d = ie(n) === "y", f = ["left", "top"].includes(s) ? -1 : 1, p = i && d ? -1 : 1, u = ne(t, e);
  let { mainAxis: g, crossAxis: h, alignmentAxis: m } = typeof u == "number" ? { mainAxis: u, crossAxis: 0, alignmentAxis: null } : { mainAxis: u.mainAxis || 0, crossAxis: u.crossAxis || 0, alignmentAxis: u.alignmentAxis };
  return a && typeof m == "number" && (h = a === "end" ? m * -1 : m), d ? { x: h * p, y: g * f } : { x: g * f, y: h * p };
}
const Er = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    var n, o;
    const { x: r, y: i, placement: s, middlewareData: a } = t, d = await Sr(t, e);
    return s === ((n = a.offset) == null ? void 0 : n.placement) && (o = a.arrow) != null && o.alignmentOffset ? {} : { x: r + d.x, y: i + d.y, data: { ...d, placement: s } };
  } };
}, Pr = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: o, placement: r } = t, { mainAxis: i = true, crossAxis: s = false, limiter: a = { fn: (x) => {
      let { x: v, y } = x;
      return { x: v, y };
    } }, ...d } = ne(e, t), f = { x: n, y: o }, p = await Se(t, d), u = ie(oe(r)), g = ct(u);
    let h = f[g], m = f[u];
    if (i) {
      const x = g === "y" ? "top" : "left", v = g === "y" ? "bottom" : "right", y = h + p[x], M = h - p[v];
      h = tt(y, h, M);
    }
    if (s) {
      const x = u === "y" ? "top" : "left", v = u === "y" ? "bottom" : "right", y = m + p[x], M = m - p[v];
      m = tt(y, m, M);
    }
    const w = a.fn({ ...t, [g]: h, [u]: m });
    return { ...w, data: { x: w.x - n, y: w.y - o, enabled: { [g]: i, [u]: s } } };
  } };
}, _r = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(t) {
    const { x: n, y: o, placement: r, rects: i, middlewareData: s } = t, { offset: a = 0, mainAxis: d = true, crossAxis: f = true } = ne(e, t), p = { x: n, y: o }, u = ie(r), g = ct(u);
    let h = p[g], m = p[u];
    const w = ne(a, t), x = typeof w == "number" ? { mainAxis: w, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...w };
    if (d) {
      const M = g === "y" ? "height" : "width", C = i.reference[g] - i.floating[M] + x.mainAxis, R = i.reference[g] + i.reference[M] - x.mainAxis;
      h < C ? h = C : h > R && (h = R);
    }
    if (f) {
      var v, y;
      const M = g === "y" ? "width" : "height", C = ["top", "left"].includes(oe(r)), R = i.reference[u] - i.floating[M] + (C && ((v = s.offset) == null ? void 0 : v[u]) || 0) + (C ? 0 : x.crossAxis), P = i.reference[u] + i.reference[M] + (C ? 0 : ((y = s.offset) == null ? void 0 : y[u]) || 0) - (C ? x.crossAxis : 0);
      m < R ? m = R : m > P && (m = P);
    }
    return { [g]: h, [u]: m };
  } };
}, Ir = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    var n, o;
    const { placement: r, rects: i, platform: s, elements: a } = t, { apply: d = () => {
    }, ...f } = ne(e, t), p = await Se(t, f), u = oe(r), g = xe(r), h = ie(r) === "y", { width: m, height: w } = i.floating;
    let x, v;
    u === "top" || u === "bottom" ? (x = u, v = g === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = u, x = g === "end" ? "top" : "bottom");
    const y = w - p.top - p.bottom, M = m - p.left - p.right, C = re(w - p[x], y), R = re(m - p[v], M), P = !t.middlewareData.shift;
    let I = C, S = R;
    if ((n = t.middlewareData.shift) != null && n.enabled.x && (S = M), (o = t.middlewareData.shift) != null && o.enabled.y && (I = y), P && !g) {
      const O = V(p.left, 0), k = V(p.right, 0), F = V(p.top, 0), T = V(p.bottom, 0);
      h ? S = m - 2 * (O !== 0 || k !== 0 ? O + k : V(p.left, p.right)) : I = w - 2 * (F !== 0 || T !== 0 ? F + T : V(p.top, p.bottom));
    }
    await d({ ...t, availableWidth: S, availableHeight: I });
    const L = await s.getDimensions(a.floating);
    return m !== L.width || w !== L.height ? { reset: { rects: true } } : {};
  } };
};
function ye(e) {
  return "#document";
}
function z(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function te(e) {
  var t;
  return (t = (e.document) || window.document) == null ? void 0 : t.documentElement;
}
function X(e) {
  return false;
}
function ee(e) {
  return false;
}
function _t(e) {
  return false ;
}
function Ie(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = q(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Ye(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return false;
    }
  });
}
function dt(e) {
  const t = ft(), n = e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : false) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !t && (n.filter ? n.filter !== "none" : false) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function ft() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function ge(e) {
  return ["html", "body", "#document"].includes(ye());
}
function q(e) {
  return z(e).getComputedStyle(e);
}
function je(e) {
  return { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function se(e) {
  const t = e.assignedSlot || e.parentNode || _t() || te(e);
  return t;
}
function Jt(e) {
  const t = se(e);
  return ge() ? e.ownerDocument ? e.ownerDocument.body : e.body : Jt(t);
}
function Ee(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = true);
  const r = Jt(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = z(r);
  if (i) {
    const a = ot(s);
    return t.concat(s, s.visualViewport || [], Ie(r) ? r : [], a && n ? Ee(a) : []);
  }
  return t.concat(r, Ee(r, [], n));
}
function ot(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function en(e) {
  const t = q(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const i = n, s = o, a = Ge(n) !== i || Ge(o) !== s;
  return a && (n = i, o = s), { width: n, height: o, $: a };
}
function pt(e) {
  return e.contextElement;
}
function he(e) {
  pt(e);
  return Q(1);
}
const Or = Q(0);
function tn(e) {
  const t = z(e);
  return !ft() || !t.visualViewport ? Or : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Tr(e, t, n) {
  return t === void 0 && (t = false), !n || t && n !== z(e) ? false : t;
}
function fe(e, t, n, o) {
  t === void 0 && (t = false), n === void 0 && (n = false);
  const r = e.getBoundingClientRect(), i = pt(e);
  let s = Q(1);
  t && (o ? X() : s = he(e));
  const a = Tr(i, n, o) ? tn(i) : Q(0);
  let d = (r.left + a.x) / s.x, f = (r.top + a.y) / s.y, p = r.width / s.x, u = r.height / s.y;
  if (i) {
    const g = z(i), h = o && X() ? z(o) : o;
    let m = g, w = ot(m);
    for (; w && o && h !== m; ) {
      const x = he(w), v = w.getBoundingClientRect(), y = q(w), M = v.left + (w.clientLeft + parseFloat(y.paddingLeft)) * x.x, C = v.top + (w.clientTop + parseFloat(y.paddingTop)) * x.y;
      d *= x.x, f *= x.y, p *= x.x, u *= x.y, d += M, f += C, m = z(w), w = ot(m);
    }
  }
  return Ke({ width: p, height: u, x: d, y: f });
}
function mt(e, t) {
  const n = je(e).scrollLeft;
  return t ? t.left + n : fe(te(e)).left + n;
}
function nn(e, t, n) {
  n === void 0 && (n = false);
  const o = e.getBoundingClientRect(), r = o.left + t.scrollLeft - (n ? 0 : mt(e, o)), i = o.top + t.scrollTop;
  return { x: r, y: i };
}
function Lr(e) {
  let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
  const i = r === "fixed", s = te(o), a = t ? Ye(t.floating) : false;
  if (o === s || a && i) return n;
  let d = { scrollLeft: 0, scrollTop: 0 }, f = Q(1);
  const p = Q(0), u = ee();
  if ((!i) && ((d = je(o)), ee())) {
    const h = fe(o);
    f = he(o), p.x = h.x + o.clientLeft, p.y = h.y + o.clientTop;
  }
  const g = s && !u && !i ? nn(s, d, true) : Q(0);
  return { width: n.width * f.x, height: n.height * f.y, x: n.x * f.x - d.scrollLeft * f.x + p.x + g.x, y: n.y * f.y - d.scrollTop * f.y + p.y + g.y };
}
function kr(e) {
  return Array.from(e.getClientRects());
}
function Fr(e) {
  const t = te(e), n = je(e), o = e.ownerDocument.body, r = V(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = V(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + mt(e);
  const a = -n.scrollTop;
  return q(o).direction === "rtl" && (s += V(t.clientWidth, o.clientWidth) - r), { width: r, height: i, x: s, y: a };
}
function $r(e, t) {
  const n = z(e), o = te(e), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, a = 0, d = 0;
  if (r) {
    i = r.width, s = r.height;
    const f = ft();
    (!f || f && t === "fixed") && (a = r.offsetLeft, d = r.offsetTop);
  }
  return { width: i, height: s, x: a, y: d };
}
function It(e, t, n) {
  let o;
  if (t === "viewport") o = $r(e, n);
  else if (t === "document") o = Fr(te(e));
  else {
    const r = tn(e);
    o = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height };
  }
  return Ke(o);
}
function on(e, t) {
  const n = se(e);
  return n === t || !X() || ge() ? false : q(n).position === "fixed" || on(n, t);
}
function Br(e, t) {
  const n = t.get(e);
  if (n) return n;
  let o = Ee(e, [], false).filter((a) => X()), r = null;
  const i = q(e).position === "fixed";
  let s = i ? se(e) : e;
  for (; X(); ) {
    const a = q(s), d = dt(s);
    !d && a.position === "fixed" && (r = null), (i ? !d && !r : !d && a.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Ie(s) && !d && on(e, s)) ? o = o.filter((p) => p !== s) : r = a, s = se(s);
  }
  return t.set(e, o), o;
}
function Kr(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
  const s = [...n === "clippingAncestors" ? Ye(t) ? [] : Br(t, this._c) : [].concat(n), o], a = s[0], d = s.reduce((f, p) => {
    const u = It(t, p, r);
    return f.top = V(u.top, f.top), f.right = re(u.right, f.right), f.bottom = re(u.bottom, f.bottom), f.left = V(u.left, f.left), f;
  }, It(t, a, r));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}
function Hr(e) {
  const { width: t, height: n } = en(e);
  return { width: t, height: n };
}
function Ur(e, t, n) {
  const o = ee(), r = te(t), i = n === "fixed", s = fe(e, true, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const d = Q(0);
  if (!i) if ((a = je(t)), o) ; else r && (d.x = mt(r));
  const f = r && !o && !i ? nn(r, a) : Q(0), p = s.left + a.scrollLeft - d.x - f.x, u = s.top + a.scrollTop - d.y - f.y;
  return { x: p, y: u, width: s.width, height: s.height };
}
function rn(e, t) {
  const n = z(e);
  if (Ye(e)) return n;
  {
    let r = se(e);
    for (; r && !ge(); ) {
      r = se(r);
    }
    return n;
  }
}
const Wr = async function(e) {
  const t = this.getOffsetParent || rn, n = this.getDimensions, o = await n(e.floating);
  return { reference: Ur(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } };
};
function Vr(e) {
  return q(e).direction === "rtl";
}
const zr = { convertOffsetParentRelativeRectToViewportRelativeRect: Lr, getDocumentElement: te, getClippingRect: Kr, getOffsetParent: rn, getElementRects: Wr, getClientRects: kr, getDimensions: Hr, getScale: he, isElement: X, isRTL: Vr };
function Yr(e, t) {
  let n = null, o;
  const r = te(e);
  function i() {
    var a;
    clearTimeout(o), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, d) {
    a === void 0 && (a = false), d === void 0 && (d = 1), i();
    const { left: f, top: p, width: u, height: g } = e.getBoundingClientRect();
    if (a || t(), !u || !g) return;
    const h = ke(p), m = ke(r.clientWidth - (f + u)), w = ke(r.clientHeight - (p + g)), x = ke(f), y = { rootMargin: -h + "px " + -m + "px " + -w + "px " + -x + "px", threshold: V(0, re(1, d)) || 1 };
    let M = true;
    function C(R) {
      const P = R[0].intersectionRatio;
      if (P !== d) {
        if (!M) return s();
        P ? s(false, P) : o = setTimeout(() => {
          s(false, 1e-7);
        }, 1e3);
      }
      M = false;
    }
    try {
      n = new IntersectionObserver(C, { ...y, root: r.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, y);
    }
    n.observe(e);
  }
  return s(true), i;
}
function jr(e, t, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: r = true, ancestorResize: i = true, elementResize: s = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: d = false } = o, f = pt(e), p = r || i ? [...f ? Ee(f) : [], ...Ee(t)] : [];
  p.forEach((v) => {
    r && v.addEventListener("scroll", n, { passive: true }), i && v.addEventListener("resize", n);
  });
  const u = f && a ? Yr(f, n) : null;
  let g = -1, h = null;
  s && (h = new ResizeObserver((v) => {
    let [y] = v;
    y && y.target === f && h && (h.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var M;
      (M = h) == null || M.observe(t);
    })), n();
  }), f && !d && h.observe(f), h.observe(t));
  let m, w = d ? fe(e) : null;
  d && x();
  function x() {
    const v = fe(e);
    w && (v.x !== w.x || v.y !== w.y || v.width !== w.width || v.height !== w.height) && n(), w = v, m = requestAnimationFrame(x);
  }
  return n(), () => {
    var v;
    p.forEach((y) => {
      r && y.removeEventListener("scroll", n), i && y.removeEventListener("resize", n);
    }), u == null ? void 0 : u(), (v = h) == null || v.disconnect(), h = null, d && cancelAnimationFrame(m);
  };
}
const Xr = Er, qr = Pr, Zr = Rr, Qr = Ir, Jr = Ar, Nt = Mr, ei = _r, ti = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = { platform: zr, ...n }, i = { ...r.platform, _c: o };
  return Cr(e, t, { ...r, platform: i });
};
var Fe = typeof document < "u" ? useLayoutEffect : useEffect;
function He(e, t) {
  if (e === t) return true;
  if (typeof e != typeof t) return false;
  if (typeof e == "function" && e.toString() === t.toString()) return true;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return false;
      for (o = n; o-- !== 0; ) if (!He(e[o], t[o])) return false;
      return true;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length) return false;
    for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(t, r[o])) return false;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && e.$$typeof) && !He(e[i], t[i])) return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function sn(e) {
  return 1 ;
}
function Ot(e, t) {
  const n = sn();
  return Math.round(t * n) / n;
}
function Qe(e) {
  const t = c.useRef(e);
  return Fe(() => {
    t.current = e;
  }), t;
}
function ni(e) {
  e === void 0 && (e = {});
  const { placement: t = "bottom", strategy: n = "absolute", middleware: o = [], platform: r, elements: { reference: i, floating: s } = {}, transform: a = true, whileElementsMounted: d, open: f$1 } = e, [p, u] = c.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: false }), [g, h] = c.useState(o);
  He(g, o) || h(o);
  const [m, w] = c.useState(null), [x, v] = c.useState(null), y = c.useCallback((A) => {
    A !== P.current && (P.current = A, w(A));
  }, []), M = c.useCallback((A) => {
    A !== I.current && (I.current = A, v(A));
  }, []), C = i || m, R = s || x, P = c.useRef(null), I = c.useRef(null), S = c.useRef(p), L = d != null, O = Qe(d), k = Qe(r), F = Qe(f$1), T = c.useCallback(() => {
    if (!P.current || !I.current) return;
    const A = { placement: t, strategy: n, middleware: g };
    k.current && (A.platform = k.current), ti(P.current, I.current, A).then((b) => {
      const B = { ...b, isPositioned: F.current !== false };
      D.current && !He(S.current, B) && (S.current = B, f.flushSync(() => {
        u(B);
      }));
    });
  }, [g, t, n, k, F]);
  Fe(() => {
    f$1 === false && S.current.isPositioned && (S.current.isPositioned = false, u((A) => ({ ...A, isPositioned: false })));
  }, [f$1]);
  const D = c.useRef(false);
  Fe(() => (D.current = true, () => {
    D.current = false;
  }), []), Fe(() => {
    if (C && (P.current = C), R && (I.current = R), C && R) {
      if (O.current) return O.current(C, R, T);
      T();
    }
  }, [C, R, T, O, L]);
  const K = c.useMemo(() => ({ reference: P, floating: I, setReference: y, setFloating: M }), [y, M]), _ = c.useMemo(() => ({ reference: C, floating: R }), [C, R]), $ = c.useMemo(() => {
    const A = { position: n, left: 0, top: 0 };
    if (!_.floating) return A;
    const b = Ot(_.floating, p.x), B = Ot(_.floating, p.y);
    return a ? { ...A, transform: "translate(" + b + "px, " + B + "px)", ...sn(_.floating) >= 1.5 } : { position: n, left: b, top: B };
  }, [n, a, _.floating, p.x, p.y]);
  return c.useMemo(() => ({ ...p, update: T, refs: K, elements: _, floatingStyles: $ }), [p, T, K, _, $]);
}
const oi = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return { name: "arrow", options: e, fn(n) {
    const { element: o, padding: r } = typeof e == "function" ? e(n) : e;
    return o && t(o) ? o.current != null ? Nt({ element: o.current, padding: r }).fn(n) : {} : o ? Nt({ element: o, padding: r }).fn(n) : {};
  } };
}, ri = (e, t) => ({ ...Xr(e), options: [e, t] }), ii = (e, t) => ({ ...qr(e), options: [e, t] }), si = (e, t) => ({ ...ei(e), options: [e, t] }), ai = (e, t) => ({ ...Zr(e), options: [e, t] }), ci = (e, t) => ({ ...Qr(e), options: [e, t] }), li = (e, t) => ({ ...Jr(e), options: [e, t] }), ui = (e, t) => ({ ...oi(e), options: [e, t] });
var di = "Arrow", an = c.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...i } = e;
  return jsx(v.svg, { ...i, ref: t, width: o, height: r, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : jsx("polygon", { points: "0,0 30,0 15,10" }) });
});
an.displayName = di;
var fi = an, ht = "Popper", [cn, ln] = U$1(ht), [pi, un] = cn(ht), dn = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = c.useState(null);
  return jsx(pi, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
dn.displayName = ht;
var fn = "PopperAnchor", pn = c.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: o, ...r } = e, i = un(fn, n), s = c.useRef(null), a = rr(t, s);
  return c.useEffect(() => {
    i.onAnchorChange((o == null ? void 0 : o.current) || s.current);
  }), o ? null : jsx(v.div, { ...r, ref: a });
});
pn.displayName = fn;
var gt = "PopperContent", [mi, hi] = cn(gt), mn = c.forwardRef((e, t) => {
  var _a, _b, _c, _d, _e2, _f, _g, _h;
  const { __scopePopper: n$1, side: o = "bottom", sideOffset: r = 0, align: i = "center", alignOffset: s = 0, arrowPadding: a = 0, avoidCollisions: d = true, collisionBoundary: f = [], collisionPadding: p = 0, sticky: u = "partial", hideWhenDetached: g = false, updatePositionStrategy: h$1 = "optimized", onPlaced: m, ...w } = e, x = un(gt, n$1), [v$1, y] = c.useState(null), M = rr(t, (G) => y(G)), [C, R] = c.useState(null), P = n(C), I = (_a = P == null ? void 0 : P.width) != null ? _a : 0, S$1 = (_b = P == null ? void 0 : P.height) != null ? _b : 0, L = o + (i !== "center" ? "-" + i : ""), O = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, k = Array.isArray(f) ? f : [f], F = k.length > 0, T = { padding: O, boundary: k.filter(wi), altBoundary: F }, { refs: D, floatingStyles: K, placement: _, isPositioned: $, middlewareData: A } = ni({ strategy: "fixed", placement: L, whileElementsMounted: (...G) => jr(...G, { animationFrame: h$1 === "always" }), elements: { reference: x.anchor }, middleware: [ri({ mainAxis: r + S$1, alignmentAxis: s }), d && ii({ mainAxis: true, crossAxis: false, limiter: u === "partial" ? si() : void 0, ...T }), d && ai({ ...T }), ci({ ...T, apply: ({ elements: G, rects: Me, availableWidth: Eo, availableHeight: Po }) => {
    const { width: _o, height: Io } = Me.reference, Le = G.floating.style;
    Le.setProperty("--radix-popper-available-width", `${Eo}px`), Le.setProperty("--radix-popper-available-height", `${Po}px`), Le.setProperty("--radix-popper-anchor-width", `${_o}px`), Le.setProperty("--radix-popper-anchor-height", `${Io}px`);
  } }), C && ui({ element: C, padding: a }), vi({ arrowWidth: I, arrowHeight: S$1 }), g && li({ strategy: "referenceHidden", ...T })] }), [b, B] = wn(_), Z = S(m);
  h(() => {
    $ && (Z == null ? void 0 : Z());
  }, [$, Z]);
  const ce = (_c = A.arrow) == null ? void 0 : _c.x, be = (_d = A.arrow) == null ? void 0 : _d.y, Ce = ((_e2 = A.arrow) == null ? void 0 : _e2.centerOffset) !== 0, [Te, le] = c.useState();
  return h(() => {
    v$1 && le(window.getComputedStyle(v$1).zIndex);
  }, [v$1]), jsx("div", { ref: D.setFloating, "data-radix-popper-content-wrapper": "", style: { ...K, transform: $ ? K.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: Te, "--radix-popper-transform-origin": [(_f = A.transformOrigin) == null ? void 0 : _f.x, (_g = A.transformOrigin) == null ? void 0 : _g.y].join(" "), ...((_h = A.hide) == null ? void 0 : _h.referenceHidden) && { visibility: "hidden", pointerEvents: "none" } }, dir: e.dir, children: jsx(mi, { scope: n$1, placedSide: b, onArrowChange: R, arrowX: ce, arrowY: be, shouldHideArrow: Ce, children: jsx(v.div, { "data-side": b, "data-align": B, ...w, ref: M, style: { ...w.style, animation: $ ? void 0 : "none" } }) }) });
});
mn.displayName = gt;
var hn = "PopperArrow", gi = { top: "bottom", right: "left", bottom: "top", left: "right" }, gn = c.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, i = hi(hn, o), s = gi[i.placedSide];
  return jsx("span", { ref: i.onArrowChange, style: { position: "absolute", left: i.arrowX, top: i.arrowY, [s]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[i.placedSide], visibility: i.shouldHideArrow ? "hidden" : void 0 }, children: jsx(fi, { ...r, ref: n, style: { ...r.style, display: "block" } }) });
});
gn.displayName = hn;
function wi(e) {
  return e !== null;
}
var vi = (e) => ({ name: "transformOrigin", options: e, fn(t) {
  var _a, _b, _c, _d, _e2;
  const { placement: n, rects: o, middlewareData: r } = t, s = ((_a = r.arrow) == null ? void 0 : _a.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, d = s ? 0 : e.arrowHeight, [f, p] = wn(n), u = { start: "0%", center: "50%", end: "100%" }[p], g = ((_c = (_b = r.arrow) == null ? void 0 : _b.x) != null ? _c : 0) + a / 2, h = ((_e2 = (_d = r.arrow) == null ? void 0 : _d.y) != null ? _e2 : 0) + d / 2;
  let m = "", w = "";
  return f === "bottom" ? (m = s ? u : `${g}px`, w = `${-d}px`) : f === "top" ? (m = s ? u : `${g}px`, w = `${o.floating.height + d}px`) : f === "right" ? (m = `${-d}px`, w = s ? u : `${h}px`) : f === "left" && (m = `${o.floating.width + d}px`, w = s ? u : `${h}px`), { data: { x: m, y: w } };
} });
function wn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var vn = dn, xi = pn, yi = mn, bi = gn, Je = "rovingFocusGroup.onEntryFocus", Ci = { bubbles: false, cancelable: true }, Xe = "RovingFocusGroup", [rt, xn, Mi] = Xt(Xe), [Ri, yn] = U$1(Xe, [Mi]), [Ai, Si] = Ri(Xe), bn = c.forwardRef((e, t) => jsx(rt.Provider, { scope: e.__scopeRovingFocusGroup, children: jsx(rt.Slot, { scope: e.__scopeRovingFocusGroup, children: jsx(Ei, { ...e, ref: t }) }) }));
bn.displayName = Xe;
var Ei = c.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: o, loop: r = false, dir: i, currentTabStopId: s, defaultCurrentTabStopId: a, onCurrentTabStopIdChange: d, onEntryFocus: f, preventScrollOnEntryFocus: p = false, ...u } = e, g = c.useRef(null), h = rr(t, g), m = qt(i), [w = null, x] = _({ prop: s, defaultProp: a, onChange: d }), [v$1, y] = c.useState(false), M = S(f), C = xn(n), R = c.useRef(false), [P, I$1] = c.useState(0);
  return c.useEffect(() => {
    const S = g.current;
    if (S) return S.addEventListener(Je, M), () => S.removeEventListener(Je, M);
  }, [M]), jsx(Ai, { scope: n, orientation: o, dir: m, loop: r, currentTabStopId: w, onItemFocus: c.useCallback((S) => x(S), [x]), onItemShiftTab: c.useCallback(() => y(true), []), onFocusableItemAdd: c.useCallback(() => I$1((S) => S + 1), []), onFocusableItemRemove: c.useCallback(() => I$1((S) => S - 1), []), children: jsx(v.div, { tabIndex: v$1 || P === 0 ? -1 : 0, "data-orientation": o, ...u, ref: h, style: { outline: "none", ...e.style }, onMouseDown: I(e.onMouseDown, () => {
    R.current = true;
  }), onFocus: I(e.onFocus, (S) => {
    const L = !R.current;
    if (S.target === S.currentTarget && L && !v$1) {
      const O = new CustomEvent(Je, Ci);
      if (S.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
        const k = C().filter((_) => _.focusable), F = k.find((_) => _.active), T = k.find((_) => _.id === w), K = [F, T, ...k].filter(Boolean).map((_) => _.ref.current);
        Rn(K, p);
      }
    }
    R.current = false;
  }), onBlur: I(e.onBlur, () => y(false)) }) });
}), Cn = "RovingFocusGroupItem", Mn = c.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: o = true, active: r = false, tabStopId: i, ...s } = e, a = Ht$1(), d = i || a, f = Si(Cn, n), p = f.currentTabStopId === d, u = xn(n), { onFocusableItemAdd: g, onFocusableItemRemove: h } = f;
  return c.useEffect(() => {
    if (o) return g(), () => h();
  }, [o, g, h]), jsx(rt.ItemSlot, { scope: n, id: d, focusable: o, active: r, children: jsx(v.span, { tabIndex: p ? 0 : -1, "data-orientation": f.orientation, ...s, ref: t, onMouseDown: I(e.onMouseDown, (m) => {
    o ? f.onItemFocus(d) : m.preventDefault();
  }), onFocus: I(e.onFocus, () => f.onItemFocus(d)), onKeyDown: I(e.onKeyDown, (m) => {
    if (m.key === "Tab" && m.shiftKey) {
      f.onItemShiftTab();
      return;
    }
    if (m.target !== m.currentTarget) return;
    const w = Ii(m, f.orientation, f.dir);
    if (w !== void 0) {
      if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
      m.preventDefault();
      let v = u().filter((y) => y.focusable).map((y) => y.ref.current);
      if (w === "last") v.reverse();
      else if (w === "prev" || w === "next") {
        w === "prev" && v.reverse();
        const y = v.indexOf(m.currentTarget);
        v = f.loop ? Di(v, y + 1) : v.slice(y + 1);
      }
      setTimeout(() => Rn(v));
    }
  }) }) });
});
Mn.displayName = Cn;
var Pi = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function _i(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Ii(e, t, n) {
  const o = _i(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o))) return Pi[o];
}
function Rn(e, t = false) {
  const n = document.activeElement;
  for (const o of e) if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Di(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var Ni = bn, Oi = Mn, it = ["Enter", " "], Ti = ["ArrowDown", "PageUp", "Home"], An = ["ArrowUp", "PageDown", "End"], Li = [...Ti, ...An], ki = { ltr: [...it, "ArrowRight"], rtl: [...it, "ArrowLeft"] }, Fi = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] }, De = "Menu", [Pe, $i, Gi] = Xt(De), [pe, Sn] = U$1(De, [Gi, ln, yn]), Ne = ln(), En = yn(), [Pn, ae] = pe(De), [Bi, Oe] = pe(De), _n = (e) => {
  const { __scopeMenu: t, open: n = false, children: o, dir: r, onOpenChange: i, modal: s = true } = e, a = Ne(t), [d, f] = c.useState(null), p = c.useRef(false), u = S(i), g = qt(r);
  return c.useEffect(() => {
    const h = () => {
      p.current = true, document.addEventListener("pointerdown", m, { capture: true, once: true }), document.addEventListener("pointermove", m, { capture: true, once: true });
    }, m = () => p.current = false;
    return document.addEventListener("keydown", h, { capture: true }), () => {
      document.removeEventListener("keydown", h, { capture: true }), document.removeEventListener("pointerdown", m, { capture: true }), document.removeEventListener("pointermove", m, { capture: true });
    };
  }, []), jsx(vn, { ...a, children: jsx(Pn, { scope: t, open: n, onOpenChange: u, content: d, onContentChange: f, children: jsx(Bi, { scope: t, onClose: c.useCallback(() => u(false), [u]), isUsingKeyboardRef: p, dir: g, modal: s, children: o }) }) });
};
_n.displayName = De;
var Ki = "MenuAnchor", wt = c.forwardRef((e, t) => {
  const { __scopeMenu: n, ...o } = e, r = Ne(n);
  return jsx(xi, { ...r, ...o, ref: t });
});
wt.displayName = Ki;
var vt = "MenuPortal", [Hi, In] = pe(vt, { forceMount: void 0 }), Dn = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, i = ae(vt, t);
  return jsx(Hi, { scope: t, forceMount: n, children: jsx(y, { present: n || i.open, children: jsx(Ge$1, { asChild: true, container: r, children: o }) }) });
};
Dn.displayName = vt;
var Y = "MenuContent", [Ui, xt] = pe(Y), Nn = c.forwardRef((e, t) => {
  const n = In(Y, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, i = ae(Y, e.__scopeMenu), s = Oe(Y, e.__scopeMenu);
  return jsx(Pe.Provider, { scope: e.__scopeMenu, children: jsx(y, { present: o || i.open, children: jsx(Pe.Slot, { scope: e.__scopeMenu, children: s.modal ? jsx(Wi, { ...r, ref: t }) : jsx(Vi, { ...r, ref: t }) }) }) });
}), Wi = c.forwardRef((e, t) => {
  const n = ae(Y, e.__scopeMenu), o = c.useRef(null), r = rr(t, o);
  return c.useEffect(() => {
    const i = o.current;
    if (i) return jt$1(i);
  }, []), jsx(yt, { ...e, ref: r, trapFocus: n.open, disableOutsidePointerEvents: n.open, disableOutsideScroll: true, onFocusOutside: I(e.onFocusOutside, (i) => i.preventDefault(), { checkForDefaultPrevented: false }), onDismiss: () => n.onOpenChange(false) });
}), Vi = c.forwardRef((e, t) => {
  const n = ae(Y, e.__scopeMenu);
  return jsx(yt, { ...e, ref: t, trapFocus: false, disableOutsidePointerEvents: false, disableOutsideScroll: false, onDismiss: () => n.onOpenChange(false) });
}), yt = c.forwardRef((e, t) => {
  const { __scopeMenu: n, loop: o = false, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: s, disableOutsidePointerEvents: a, onEntryFocus: d, onEscapeKeyDown: f, onPointerDownOutside: p, onFocusOutside: u, onInteractOutside: g, onDismiss: h, disableOutsideScroll: m, ...w } = e, x = ae(Y, n), v = Oe(Y, n), y = Ne(n), M = En(n), C = $i(n), [R, P] = c.useState(null), I$1 = c.useRef(null), S = rr(t, I$1, x.onContentChange), L = c.useRef(0), O = c.useRef(""), k = c.useRef(0), F = c.useRef(null), T = c.useRef("right"), D = c.useRef(0), K = m ? It$1 : c.Fragment, _ = m ? { as: se$1, allowPinchZoom: true } : void 0, $ = (b) => {
    var _a, _b;
    const B = O.current + b, Z = C().filter((G) => !G.disabled), ce = document.activeElement, be = (_a = Z.find((G) => G.ref.current === ce)) == null ? void 0 : _a.textValue, Ce = Z.map((G) => G.textValue), Te = os(Ce, B, be), le = (_b = Z.find((G) => G.textValue === Te)) == null ? void 0 : _b.ref.current;
    ((function G(Me) {
      O.current = Me, window.clearTimeout(L.current), Me !== "" && (L.current = window.setTimeout(() => G(""), 1e3));
    }))(B), le && setTimeout(() => le.focus());
  };
  c.useEffect(() => () => window.clearTimeout(L.current), []), Kt$1();
  const A = c.useCallback((b) => {
    var _a, _b;
    return T.current === ((_a = F.current) == null ? void 0 : _a.side) && is(b, (_b = F.current) == null ? void 0 : _b.area);
  }, []);
  return jsx(Ui, { scope: n, searchRef: O, onItemEnter: c.useCallback((b) => {
    A(b) && b.preventDefault();
  }, [A]), onItemLeave: c.useCallback((b) => {
    var _a;
    A(b) || ((_a = I$1.current) == null ? void 0 : _a.focus(), P(null));
  }, [A]), onTriggerLeave: c.useCallback((b) => {
    A(b) && b.preventDefault();
  }, [A]), pointerGraceTimerRef: k, onPointerGraceIntentChange: c.useCallback((b) => {
    F.current = b;
  }, []), children: jsx(K, { ..._, children: jsx(We$1, { asChild: true, trapped: r, onMountAutoFocus: I(i, (b) => {
    var _a;
    b.preventDefault(), (_a = I$1.current) == null ? void 0 : _a.focus({ preventScroll: true });
  }), onUnmountAutoFocus: s, children: jsx(Fe$1, { asChild: true, disableOutsidePointerEvents: a, onEscapeKeyDown: f, onPointerDownOutside: p, onFocusOutside: u, onInteractOutside: g, onDismiss: h, children: jsx(Ni, { asChild: true, ...M, dir: v.dir, orientation: "vertical", loop: o, currentTabStopId: R, onCurrentTabStopIdChange: P, onEntryFocus: I(d, (b) => {
    v.isUsingKeyboardRef.current || b.preventDefault();
  }), preventScrollOnEntryFocus: true, children: jsx(yi, { role: "menu", "aria-orientation": "vertical", "data-state": Xn(x.open), "data-radix-menu-content": "", dir: v.dir, ...y, ...w, ref: S, style: { outline: "none", ...w.style }, onKeyDown: I(w.onKeyDown, (b) => {
    const Z = b.target.closest("[data-radix-menu-content]") === b.currentTarget, ce = b.ctrlKey || b.altKey || b.metaKey, be = b.key.length === 1;
    Z && (b.key === "Tab" && b.preventDefault(), !ce && be && $(b.key));
    const Ce = I$1.current;
    if (b.target !== Ce || !Li.includes(b.key)) return;
    b.preventDefault();
    const le = C().filter((G) => !G.disabled).map((G) => G.ref.current);
    An.includes(b.key) && le.reverse(), ts(le);
  }), onBlur: I(e.onBlur, (b) => {
    b.currentTarget.contains(b.target) || (window.clearTimeout(L.current), O.current = "");
  }), onPointerMove: I(e.onPointerMove, _e((b) => {
    const B = b.target, Z = D.current !== b.clientX;
    if (b.currentTarget.contains(B) && Z) {
      const ce = b.clientX > D.current ? "right" : "left";
      T.current = ce, D.current = b.clientX;
    }
  })) }) }) }) }) }) });
});
Nn.displayName = Y;
var zi = "MenuGroup", bt = c.forwardRef((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return jsx(v.div, { role: "group", ...o, ref: t });
});
bt.displayName = zi;
var Yi = "MenuLabel", On = c.forwardRef((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return jsx(v.div, { ...o, ref: t });
});
On.displayName = Yi;
var Ue = "MenuItem", Tt = "menu.itemSelect", qe = c.forwardRef((e, t) => {
  const { disabled: n = false, onSelect: o, ...r } = e, i = c.useRef(null), s = Oe(Ue, e.__scopeMenu), a = xt(Ue, e.__scopeMenu), d = rr(t, i), f = c.useRef(false), p = () => {
    const u = i.current;
    if (!n && u) {
      const g = new CustomEvent(Tt, { bubbles: true, cancelable: true });
      u.addEventListener(Tt, (h) => o == null ? void 0 : o(h), { once: true }), h$1(u, g), g.defaultPrevented ? f.current = false : s.onClose();
    }
  };
  return jsx(Tn, { ...r, ref: d, disabled: n, onClick: I(e.onClick, p), onPointerDown: (u) => {
    var _a;
    (_a = e.onPointerDown) == null ? void 0 : _a.call(e, u), f.current = true;
  }, onPointerUp: I(e.onPointerUp, (u) => {
    var _a;
    f.current || ((_a = u.currentTarget) == null ? void 0 : _a.click());
  }), onKeyDown: I(e.onKeyDown, (u) => {
    const g = a.searchRef.current !== "";
    n || g && u.key === " " || it.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
  }) });
});
qe.displayName = Ue;
var Tn = c.forwardRef((e, t) => {
  const { __scopeMenu: n, disabled: o = false, textValue: r, ...i } = e, s = xt(Ue, n), a = En(n), d = c.useRef(null), f = rr(t, d), [p, u] = c.useState(false), [g, h] = c.useState("");
  return c.useEffect(() => {
    var _a;
    const m = d.current;
    m && h(((_a = m.textContent) != null ? _a : "").trim());
  }, [i.children]), jsx(Pe.ItemSlot, { scope: n, disabled: o, textValue: r != null ? r : g, children: jsx(Oi, { asChild: true, ...a, focusable: !o, children: jsx(v.div, { role: "menuitem", "data-highlighted": p ? "" : void 0, "aria-disabled": o || void 0, "data-disabled": o ? "" : void 0, ...i, ref: f, onPointerMove: I(e.onPointerMove, _e((m) => {
    o ? s.onItemLeave(m) : (s.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus({ preventScroll: true }));
  })), onPointerLeave: I(e.onPointerLeave, _e((m) => s.onItemLeave(m))), onFocus: I(e.onFocus, () => u(true)), onBlur: I(e.onBlur, () => u(false)) }) }) });
}), ji = "MenuCheckboxItem", Ln = c.forwardRef((e, t) => {
  const { checked: n = false, onCheckedChange: o, ...r } = e;
  return jsx(Bn, { scope: e.__scopeMenu, checked: n, children: jsx(qe, { role: "menuitemcheckbox", "aria-checked": We(n) ? "mixed" : n, ...r, ref: t, "data-state": Rt(n), onSelect: I(r.onSelect, () => o == null ? void 0 : o(We(n) ? true : !n), { checkForDefaultPrevented: false }) }) });
});
Ln.displayName = ji;
var kn = "MenuRadioGroup", [Xi, qi] = pe(kn, { value: void 0, onValueChange: () => {
} }), Fn = c.forwardRef((e, t) => {
  const { value: n, onValueChange: o, ...r } = e, i = S(o);
  return jsx(Xi, { scope: e.__scopeMenu, value: n, onValueChange: i, children: jsx(bt, { ...r, ref: t }) });
});
Fn.displayName = kn;
var $n = "MenuRadioItem", Gn = c.forwardRef((e, t) => {
  const { value: n, ...o } = e, r = qi($n, e.__scopeMenu), i = n === r.value;
  return jsx(Bn, { scope: e.__scopeMenu, checked: i, children: jsx(qe, { role: "menuitemradio", "aria-checked": i, ...o, ref: t, "data-state": Rt(i), onSelect: I(o.onSelect, () => {
    var _a;
    return (_a = r.onValueChange) == null ? void 0 : _a.call(r, n);
  }, { checkForDefaultPrevented: false }) }) });
});
Gn.displayName = $n;
var Ct = "MenuItemIndicator", [Bn, Zi] = pe(Ct, { checked: false }), Kn = c.forwardRef((e, t) => {
  const { __scopeMenu: n, forceMount: o, ...r } = e, i = Zi(Ct, n);
  return jsx(y, { present: o || We(i.checked) || i.checked === true, children: jsx(v.span, { ...r, ref: t, "data-state": Rt(i.checked) }) });
});
Kn.displayName = Ct;
var Qi = "MenuSeparator", Hn = c.forwardRef((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return jsx(v.div, { role: "separator", "aria-orientation": "horizontal", ...o, ref: t });
});
Hn.displayName = Qi;
var Ji = "MenuArrow", Un = c.forwardRef((e, t) => {
  const { __scopeMenu: n, ...o } = e, r = Ne(n);
  return jsx(bi, { ...r, ...o, ref: t });
});
Un.displayName = Ji;
var Mt = "MenuSub", [es, Wn] = pe(Mt), Vn = (e) => {
  const { __scopeMenu: t, children: n, open: o = false, onOpenChange: r } = e, i = ae(Mt, t), s = Ne(t), [a, d] = c.useState(null), [f, p] = c.useState(null), u = S(r);
  return c.useEffect(() => (i.open === false && u(false), () => u(false)), [i.open, u]), jsx(vn, { ...s, children: jsx(Pn, { scope: t, open: o, onOpenChange: u, content: f, onContentChange: p, children: jsx(es, { scope: t, contentId: Ht$1(), triggerId: Ht$1(), trigger: a, onTriggerChange: d, children: n }) }) });
};
Vn.displayName = Mt;
var Re = "MenuSubTrigger", zn = c.forwardRef((e, t) => {
  const n = ae(Re, e.__scopeMenu), o = Oe(Re, e.__scopeMenu), r = Wn(Re, e.__scopeMenu), i = xt(Re, e.__scopeMenu), s = c.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: d } = i, f = { __scopeMenu: e.__scopeMenu }, p = c.useCallback(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return c.useEffect(() => p, [p]), c.useEffect(() => {
    const u = a.current;
    return () => {
      window.clearTimeout(u), d(null);
    };
  }, [a, d]), jsx(wt, { asChild: true, ...f, children: jsx(Tn, { id: r.triggerId, "aria-haspopup": "menu", "aria-expanded": n.open, "aria-controls": r.contentId, "data-state": Xn(n.open), ...e, ref: ne$1(t, r.onTriggerChange), onClick: (u) => {
    var _a;
    (_a = e.onClick) == null ? void 0 : _a.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(true));
  }, onPointerMove: I(e.onPointerMove, _e((u) => {
    i.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
      n.onOpenChange(true), p();
    }, 100));
  })), onPointerLeave: I(e.onPointerLeave, _e((u) => {
    var _a, _b;
    p();
    const g = (_a = n.content) == null ? void 0 : _a.getBoundingClientRect();
    if (g) {
      const h = (_b = n.content) == null ? void 0 : _b.dataset.side, m = h === "right", w = m ? -5 : 5, x = g[m ? "left" : "right"], v = g[m ? "right" : "left"];
      i.onPointerGraceIntentChange({ area: [{ x: u.clientX + w, y: u.clientY }, { x, y: g.top }, { x: v, y: g.top }, { x: v, y: g.bottom }, { x, y: g.bottom }], side: h }), window.clearTimeout(a.current), a.current = window.setTimeout(() => i.onPointerGraceIntentChange(null), 300);
    } else {
      if (i.onTriggerLeave(u), u.defaultPrevented) return;
      i.onPointerGraceIntentChange(null);
    }
  })), onKeyDown: I(e.onKeyDown, (u) => {
    var _a;
    const g = i.searchRef.current !== "";
    e.disabled || g && u.key === " " || ki[o.dir].includes(u.key) && (n.onOpenChange(true), (_a = n.content) == null ? void 0 : _a.focus(), u.preventDefault());
  }) }) });
});
zn.displayName = Re;
var Yn = "MenuSubContent", jn = c.forwardRef((e, t) => {
  const n = In(Y, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, i = ae(Y, e.__scopeMenu), s = Oe(Y, e.__scopeMenu), a = Wn(Yn, e.__scopeMenu), d = c.useRef(null), f = rr(t, d);
  return jsx(Pe.Provider, { scope: e.__scopeMenu, children: jsx(y, { present: o || i.open, children: jsx(Pe.Slot, { scope: e.__scopeMenu, children: jsx(yt, { id: a.contentId, "aria-labelledby": a.triggerId, ...r, ref: f, align: "start", side: s.dir === "rtl" ? "left" : "right", disableOutsidePointerEvents: false, disableOutsideScroll: false, trapFocus: false, onOpenAutoFocus: (p) => {
    var _a;
    s.isUsingKeyboardRef.current && ((_a = d.current) == null ? void 0 : _a.focus()), p.preventDefault();
  }, onCloseAutoFocus: (p) => p.preventDefault(), onFocusOutside: I(e.onFocusOutside, (p) => {
    p.target !== a.trigger && i.onOpenChange(false);
  }), onEscapeKeyDown: I(e.onEscapeKeyDown, (p) => {
    s.onClose(), p.preventDefault();
  }), onKeyDown: I(e.onKeyDown, (p) => {
    var _a;
    const u = p.currentTarget.contains(p.target), g = Fi[s.dir].includes(p.key);
    u && g && (i.onOpenChange(false), (_a = a.trigger) == null ? void 0 : _a.focus(), p.preventDefault());
  }) }) }) }) });
});
jn.displayName = Yn;
function Xn(e) {
  return e ? "open" : "closed";
}
function We(e) {
  return e === "indeterminate";
}
function Rt(e) {
  return We(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ts(e) {
  const t = document.activeElement;
  for (const n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function ns(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function os(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((f) => f === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = ns(e, Math.max(i, 0));
  r.length === 1 && (s = s.filter((f) => f !== n));
  const d = s.find((f) => f.toLowerCase().startsWith(r.toLowerCase()));
  return d !== n ? d : void 0;
}
function rs(e, t) {
  const { x: n, y: o } = e;
  let r = false;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x, d = t[i].y, f = t[s].x, p = t[s].y;
    d > o != p > o && n < (f - a) * (o - d) / (p - d) + a && (r = !r);
  }
  return r;
}
function is(e, t) {
  if (!t) return false;
  const n = { x: e.clientX, y: e.clientY };
  return rs(n, t);
}
function _e(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var ss = _n, as = wt, cs = Dn, ls = Nn, us = bt, ds = On, fs = qe, ps = Ln, ms = Fn, hs = Gn, gs = Kn, ws = Hn, vs = Un, xs = Vn, ys = zn, bs = jn, At = "DropdownMenu", [Cs, ca] = U$1(At, [Sn]), H = Sn(), [Ms, qn] = Cs(At), Zn = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: o, open: r, defaultOpen: i, onOpenChange: s, modal: a = true } = e, d = H(t), f = c.useRef(null), [p = false, u] = _({ prop: r, defaultProp: i, onChange: s });
  return jsx(Ms, { scope: t, triggerId: Ht$1(), triggerRef: f, contentId: Ht$1(), open: p, onOpenChange: u, onOpenToggle: c.useCallback(() => u((g) => !g), [u]), modal: a, children: jsx(ss, { ...d, open: p, onOpenChange: u, dir: o, modal: a, children: n }) });
};
Zn.displayName = At;
var Qn = "DropdownMenuTrigger", Jn = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, disabled: o = false, ...r } = e, i = qn(Qn, n), s = H(n);
  return jsx(as, { asChild: true, ...s, children: jsx(v.button, { type: "button", id: i.triggerId, "aria-haspopup": "menu", "aria-expanded": i.open, "aria-controls": i.open ? i.contentId : void 0, "data-state": i.open ? "open" : "closed", "data-disabled": o ? "" : void 0, disabled: o, ...r, ref: ne$1(t, i.triggerRef), onPointerDown: I(e.onPointerDown, (a) => {
    !o && a.button === 0 && a.ctrlKey === false && (i.onOpenToggle(), i.open || a.preventDefault());
  }), onKeyDown: I(e.onKeyDown, (a) => {
    o || (["Enter", " "].includes(a.key) && i.onOpenToggle(), a.key === "ArrowDown" && i.onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
  }) }) });
});
Jn.displayName = Qn;
var Rs = "DropdownMenuPortal", eo = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = H(t);
  return jsx(cs, { ...o, ...n });
};
eo.displayName = Rs;
var to = "DropdownMenuContent", no = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = qn(to, n), i = H(n), s = c.useRef(false);
  return jsx(ls, { id: r.contentId, "aria-labelledby": r.triggerId, ...i, ...o, ref: t, onCloseAutoFocus: I(e.onCloseAutoFocus, (a) => {
    var _a;
    s.current || ((_a = r.triggerRef.current) == null ? void 0 : _a.focus()), s.current = false, a.preventDefault();
  }), onInteractOutside: I(e.onInteractOutside, (a) => {
    const d = a.detail.originalEvent, f = d.button === 0 && d.ctrlKey === true, p = d.button === 2 || f;
    (!r.modal || p) && (s.current = true);
  }), style: { ...e.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
no.displayName = to;
var As = "DropdownMenuGroup", oo = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = H(n);
  return jsx(us, { ...r, ...o, ref: t });
});
oo.displayName = As;
var Ss = "DropdownMenuLabel", ro = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = H(n);
  return jsx(ds, { ...r, ...o, ref: t });
});
ro.displayName = Ss;
var Es = "DropdownMenuItem", io = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = H(n);
  return jsx(fs, { ...r, ...o, ref: t });
});
io.displayName = Es;
var Ps = "DropdownMenuCheckboxItem", so = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = H(n);
  return jsx(ps, { ...r, ...o, ref: t });
});
so.displayName = Ps;
var _s = "DropdownMenuRadioGroup", Is = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = H(n);
  return jsx(ms, { ...r, ...o, ref: t });
});
Is.displayName = _s;
var Ds = "DropdownMenuRadioItem", ao = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = H(n);
  return jsx(hs, { ...r, ...o, ref: t });
});
ao.displayName = Ds;
var Ns = "DropdownMenuItemIndicator", co = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = H(n);
  return jsx(gs, { ...r, ...o, ref: t });
});
co.displayName = Ns;
var Os = "DropdownMenuSeparator", lo = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = H(n);
  return jsx(ws, { ...r, ...o, ref: t });
});
lo.displayName = Os;
var Ts = "DropdownMenuArrow", Ls = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = H(n);
  return jsx(vs, { ...r, ...o, ref: t });
});
Ls.displayName = Ts;
var ks = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: o, onOpenChange: r, defaultOpen: i } = e, s = H(t), [a = false, d] = _({ prop: o, defaultProp: i, onChange: r });
  return jsx(xs, { ...s, open: a, onOpenChange: d, children: n });
}, Fs = "DropdownMenuSubTrigger", uo = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = H(n);
  return jsx(ys, { ...r, ...o, ref: t });
});
uo.displayName = Fs;
var $s = "DropdownMenuSubContent", fo = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = H(n);
  return jsx(bs, { ...r, ...o, ref: t, style: { ...e.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
fo.displayName = $s;
var Gs = Zn, Bs = Jn, po = eo, mo = no, Ks = oo, ho = ro, go = io, wo = so, vo = ao, xo = co, yo = lo, Hs = ks, bo = uo, Co = fo;
const Us = Gs, Ws = Bs, Lt = Ks, Vs = po, zs = Hs, Mo = c.forwardRef(({ className: e, inset: t, children: n, ...o }, r) => c.createElement(bo, { ref: r, className: Qe$1("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", t && "pl-8", e), ...o }, n, c.createElement(ChevronRight, { className: "ml-auto" })));
Mo.displayName = bo.displayName;
const Ro = c.forwardRef(({ className: e, ...t }, n) => c.createElement(Co, { ref: n, className: Qe$1("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e), ...t }));
Ro.displayName = Co.displayName;
const Ao = c.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => c.createElement(po, null, c.createElement(mo, { ref: o, sideOffset: t, className: Qe$1("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e), ...n })));
Ao.displayName = mo.displayName;
const U = c.forwardRef(({ className: e, inset: t, ...n }, o) => c.createElement(go, { ref: o, className: Qe$1("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", t && "pl-8", e), ...n }));
U.displayName = go.displayName;
const Ys = c.forwardRef(({ className: e, children: t, checked: n, ...o }, r) => c.createElement(wo, { ref: r, className: Qe$1("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e), checked: n, ...o }, c.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, c.createElement(xo, null, c.createElement(Check, { className: "h-4 w-4" }))), t));
Ys.displayName = wo.displayName;
const js = c.forwardRef(({ className: e, children: t, ...n }, o) => c.createElement(vo, { ref: o, className: Qe$1("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e), ...n }, c.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, c.createElement(xo, null, c.createElement(Circle, { className: "h-2 w-2 fill-current" }))), t));
js.displayName = vo.displayName;
const So = c.forwardRef(({ className: e, inset: t, ...n }, o) => c.createElement(ho, { ref: o, className: Qe$1("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e), ...n }));
So.displayName = ho.displayName;
const me = c.forwardRef(({ className: e, ...t }, n) => c.createElement(yo, { ref: n, className: Qe$1("-mx-1 my-1 h-px bg-muted", e), ...t }));
me.displayName = yo.displayName;
const de = ({ className: e, ...t }) => c.createElement("span", { className: Qe$1("ml-auto text-xs tracking-widest opacity-60", e), ...t });
de.displayName = "DropdownMenuShortcut";
const la = function() {
  return jsxs("div", { className: "bg-slate-50 min-h-dvh", children: [jsxs("div", { className: "h-16 w-full px-6 flex items-center justify-between bg-background", children: [jsx(Link, { to: "/dashboard", children: jsx("img", { className: "size-6", src: "/favicon.svg", alt: "smartflow logo" }) }), jsxs("div", { className: "flex items-center justify-end gap-10", children: [jsxs("div", { className: "flex justify-end items-center gap-4 text-sm font-normal text-muted-foreground", children: [jsx("a", { href: "/", children: "Changelog" }), jsx("a", { href: "/", children: "Help" }), jsx("a", { href: "/", children: "Docs" })] }), jsxs("div", { className: "flex justify-end items-center gap-2", children: [jsx(De$1, { variant: "outline", size: "icon", className: "rounded-full", children: jsx(BellIcon, { className: "size-4" }) }), jsxs(Us, { children: [jsx(Ws, { children: jsxs(zt, { className: "size-9", children: [jsx(Yt, { src: "https://github.com/shadcn.png" }), jsx(jt, { children: "CN" })] }) }), jsxs(Ao, { align: "end", className: "w-56", children: [jsx(So, { children: "My Account" }), jsx(me, {}), jsxs(Lt, { children: [jsxs(U, { children: [jsx(User, {}), jsx("span", { children: "Profile" }), jsx(de, { children: "\u21E7\u2318P" })] }), jsxs(U, { children: [jsx(CreditCard, {}), jsx("span", { children: "Billing" }), jsx(de, { children: "\u2318B" })] }), jsxs(U, { children: [jsx(Settings, {}), jsx("span", { children: "Settings" }), jsx(de, { children: "\u2318S" })] }), jsxs(U, { children: [jsx(Keyboard, {}), jsx("span", { children: "Keyboard shortcuts" }), jsx(de, { children: "\u2318K" })] })] }), jsx(me, {}), jsxs(Lt, { children: [jsxs(U, { children: [jsx(Users, {}), jsx("span", { children: "Team" })] }), jsxs(zs, { children: [jsxs(Mo, { children: [jsx(UserPlus, {}), jsx("span", { children: "Invite users" })] }), jsx(Vs, { children: jsxs(Ro, { children: [jsxs(U, { children: [jsx(Mail, {}), jsx("span", { children: "Email" })] }), jsxs(U, { children: [jsx(MessageSquare, {}), jsx("span", { children: "Message" })] }), jsx(me, {}), jsxs(U, { children: [jsx(PlusCircle, {}), jsx("span", { children: "More..." })] })] }) })] }), jsxs(U, { children: [jsx(Plus, {}), jsx("span", { children: "New Team" }), jsx(de, { children: "\u2318+T" })] })] }), jsx(me, {}), jsxs(U, { children: [jsx(Github, {}), jsx("span", { children: "GitHub" })] }), jsxs(U, { children: [jsx(LifeBuoy, {}), jsx("span", { children: "Support" })] }), jsxs(U, { disabled: true, children: [jsx(Cloud, {}), jsx("span", { children: "API" })] }), jsx(me, {}), jsxs(U, { onClick: () => {
    i.signOut();
  }, children: [jsx(LogOut, {}), jsx("span", { children: "Log out" }), jsx(de, { children: "\u21E7\u2318Q" })] })] })] })] })] })] }), jsx(Outlet, {})] });
};

export { la as component };
//# sourceMappingURL=_app-Bx-BCXXC.mjs.map
