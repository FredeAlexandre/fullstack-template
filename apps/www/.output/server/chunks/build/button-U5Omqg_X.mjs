import * as c from 'react';
import { jsx, Fragment } from 'react/jsx-runtime';

function D(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function ne(...e) {
  return (t) => {
    let r = false;
    const o = e.map((s) => {
      const n = D(s, t);
      return !r && typeof n == "function" && (r = true), n;
    });
    if (r) return () => {
      for (let s = 0; s < o.length; s++) {
        const n = o[s];
        typeof n == "function" ? n() : D(e[s], null);
      }
    };
  };
}
function rr(...e) {
  return c.useCallback(ne(...e), e);
}
var se = c.forwardRef((e, t) => {
  const { children: r, ...o } = e, s = c.Children.toArray(r), n = s.find(ge);
  if (n) {
    const l = n.props.children, i = s.map((d) => d === n ? c.Children.count(l) > 1 ? c.Children.only(null) : c.isValidElement(l) ? l.props.children : null : d);
    return jsx(U, { ...o, ref: t, children: c.isValidElement(l) ? c.cloneElement(l, void 0, i) : null });
  }
  return jsx(U, { ...o, ref: t, children: r });
});
se.displayName = "Slot";
var U = c.forwardRef((e, t) => {
  const { children: r, ...o } = e;
  if (c.isValidElement(r)) {
    const s = he(r);
    return c.cloneElement(r, { ...me(o, r.props), ref: t ? ne(t, s) : s });
  }
  return c.Children.count(r) > 1 ? c.Children.only(null) : null;
});
U.displayName = "SlotClone";
var fe = ({ children: e }) => jsx(Fragment, { children: e });
function ge(e) {
  return c.isValidElement(e) && e.type === fe;
}
function me(e, t) {
  const r = { ...t };
  for (const o in t) {
    const s = e[o], n = t[o];
    /^on[A-Z]/.test(o) ? s && n ? r[o] = (...i) => {
      n(...i), s(...i);
    } : s && (r[o] = s) : o === "style" ? r[o] = { ...s, ...n } : o === "className" && (r[o] = [s, n].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function he(e) {
  var _a, _b;
  let t = (_a = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function ie(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = ie(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function le() {
  for (var e, t, r = 0, o = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = ie(e)) && (o && (o += " "), o += t);
  return o;
}
const ee = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, re = le, ye = (e, t) => (r) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return re(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: n } = t, l = Object.keys(s).map((c) => {
    const f = r == null ? void 0 : r[c], h = n == null ? void 0 : n[c];
    if (f === null) return null;
    const m = ee(f) || ee(h);
    return s[c][m];
  }), i = r && Object.entries(r).reduce((c, f) => {
    let [h, m] = f;
    return m === void 0 || (c[h] = m), c;
  }, {}), d = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, f) => {
    let { class: h, className: m, ...C } = f;
    return Object.entries(C).every((x) => {
      let [g, u] = x;
      return Array.isArray(u) ? u.includes({ ...n, ...i }[g]) : { ...n, ...i }[g] === u;
    }) ? [...c, h, m] : c;
  }, []);
  return re(e, l, d, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, q = "-", ve = (e) => {
  const t = we(e), { conflictingClassGroups: r, conflictingClassGroupModifiers: o } = e;
  return { getClassGroupId: (l) => {
    const i = l.split(q);
    return i[0] === "" && i.length !== 1 && i.shift(), ae(i, t) || xe(l);
  }, getConflictingClassGroupIds: (l, i) => {
    const d = r[l] || [];
    return i && o[l] ? [...d, ...o[l]] : d;
  } };
}, ae = (e, t) => {
  var _a;
  if (e.length === 0) return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), s = o ? ae(e.slice(1), o) : void 0;
  if (s) return s;
  if (t.validators.length === 0) return;
  const n = e.join(q);
  return (_a = t.validators.find(({ validator: l }) => l(n))) == null ? void 0 : _a.classGroupId;
}, te = /^\[(.+)\]$/, xe = (e) => {
  if (te.test(e)) {
    const t = te.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r) return "arbitrary.." + r;
  }
}, we = (e) => {
  const { theme: t, prefix: r } = e, o = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
  return ke(Object.entries(e.classGroups), r).forEach(([n, l]) => {
    F(l, o, n, t);
  }), o;
}, F = (e, t, r, o) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const n = s === "" ? t : oe(t, s);
      n.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (Ce(s)) {
        F(s(o), t, r, o);
        return;
      }
      t.validators.push({ validator: s, classGroupId: r });
      return;
    }
    Object.entries(s).forEach(([n, l]) => {
      F(l, oe(t, n), r, o);
    });
  });
}, oe = (e, t) => {
  let r = e;
  return t.split(q).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), r = r.nextPart.get(o);
  }), r;
}, Ce = (e) => e.isThemeGetter, ke = (e, t) => t ? e.map(([r, o]) => {
  const s = o.map((n) => typeof n == "string" ? t + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([l, i]) => [t + l, i])) : n);
  return [r, s];
}) : e, ze = (e) => {
  if (e < 1) return { get: () => {
  }, set: () => {
  } };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const s = (n, l) => {
    r.set(n, l), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return { get(n) {
    let l = r.get(n);
    if (l !== void 0) return l;
    if ((l = o.get(n)) !== void 0) return s(n, l), l;
  }, set(n, l) {
    r.has(n) ? r.set(n, l) : s(n, l);
  } };
}, ce = "!", Se = (e) => {
  const { separator: t, experimentalParseClassName: r } = e, o = t.length === 1, s = t[0], n = t.length, l = (i) => {
    const d = [];
    let c = 0, f = 0, h;
    for (let u = 0; u < i.length; u++) {
      let y = i[u];
      if (c === 0) {
        if (y === s && (o || i.slice(u, u + n) === t)) {
          d.push(i.slice(f, u)), f = u + n;
          continue;
        }
        if (y === "/") {
          h = u;
          continue;
        }
      }
      y === "[" ? c++ : y === "]" && c--;
    }
    const m = d.length === 0 ? i : i.substring(f), C = m.startsWith(ce), x = C ? m.substring(1) : m, g = h && h > f ? h - f : void 0;
    return { modifiers: d, hasImportantModifier: C, baseClassName: x, maybePostfixModifierPosition: g };
  };
  return r ? (i) => r({ className: i, parseClassName: l }) : l;
}, Ae = (e) => {
  if (e.length <= 1) return e;
  const t = [];
  let r = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
  }), t.push(...r.sort()), t;
}, Re = (e) => ({ cache: ze(e.cacheSize), parseClassName: Se(e), ...ve(e) }), Pe = /\s+/, Me = (e, t) => {
  const { parseClassName: r, getClassGroupId: o, getConflictingClassGroupIds: s } = t, n = [], l = e.trim().split(Pe);
  let i = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const c = l[d], { modifiers: f, hasImportantModifier: h, baseClassName: m, maybePostfixModifierPosition: C } = r(c);
    let x = !!C, g = o(x ? m.substring(0, C) : m);
    if (!g) {
      if (!x) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = o(m), !g) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      x = false;
    }
    const u = Ae(f).join(":"), y = h ? u + ce : u, w = y + g;
    if (n.includes(w)) continue;
    n.push(w);
    const N = s(g, x);
    for (let R = 0; R < N.length; ++R) {
      const V = N[R];
      n.push(y + V);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Ne() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; ) (t = arguments[e++]) && (r = de(t)) && (o && (o += " "), o += r);
  return o;
}
const de = (e) => {
  if (typeof e == "string") return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++) e[o] && (t = de(e[o])) && (r && (r += " "), r += t);
  return r;
};
function Ge(e, ...t) {
  let r, o, s, n = l;
  function l(d) {
    const c = t.reduce((f, h) => h(f), e());
    return r = Re(c), o = r.cache.get, s = r.cache.set, n = i, i(d);
  }
  function i(d) {
    const c = o(d);
    if (c) return c;
    const f = Me(d, r);
    return s(d, f), f;
  }
  return function() {
    return n(Ne.apply(null, arguments));
  };
}
const p = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = true, t;
}, ue = /^\[(?:([a-z-]+):)?(.+)\]$/i, je = /^\d+\/\d+$/, Ee = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ve = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ie = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Te = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, We = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Oe = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, z = (e) => P(e) || Ee.has(e) || je.test(e), S = (e) => M(e, "length", He), P = (e) => !!e && !Number.isNaN(Number(e)), B = (e) => M(e, "number", P), j = (e) => !!e && Number.isInteger(Number(e)), Le = (e) => e.endsWith("%") && P(e.slice(0, -1)), a = (e) => ue.test(e), A = (e) => Ve.test(e), _e = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Be = (e) => M(e, _e, pe), $e = (e) => M(e, "position", pe), Ue = /* @__PURE__ */ new Set(["image", "url"]), Fe = (e) => M(e, Ue, Je), qe = (e) => M(e, "", Ze), E = () => true, M = (e, t, r) => {
  const o = ue.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : false;
}, He = (e) => Ie.test(e) && !Te.test(e), pe = () => false, Ze = (e) => We.test(e), Je = (e) => Oe.test(e), Ke = () => {
  const e = p("colors"), t = p("spacing"), r = p("blur"), o = p("brightness"), s = p("borderColor"), n = p("borderRadius"), l = p("borderSpacing"), i = p("borderWidth"), d = p("contrast"), c = p("grayscale"), f = p("hueRotate"), h = p("invert"), m = p("gap"), C = p("gradientColorStops"), x = p("gradientColorStopPositions"), g = p("inset"), u = p("margin"), y = p("opacity"), w = p("padding"), N = p("saturate"), R = p("scale"), V = p("sepia"), H = p("skew"), Z = p("space"), J = p("translate"), W = () => ["auto", "contain", "none"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", a, t], b = () => [a, t], K = () => ["", z, S], I = () => ["auto", P, a], X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], T = () => ["solid", "dashed", "dotted", "double", "none"], Q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _ = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", a], Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [P, a];
  return { cacheSize: 500, separator: ":", theme: { colors: [E], spacing: [z, S], blur: ["none", "", A, a], brightness: k(), borderColor: [e], borderRadius: ["none", "", "full", A, a], borderSpacing: b(), borderWidth: K(), contrast: k(), grayscale: G(), hueRotate: k(), invert: G(), gap: b(), gradientColorStops: [e], gradientColorStopPositions: [Le, S], inset: L(), margin: L(), opacity: k(), padding: b(), saturate: k(), scale: k(), sepia: G(), skew: k(), space: b(), translate: b() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", a] }], container: ["container"], columns: [{ columns: [A] }], "break-after": [{ "break-after": Y() }], "break-before": [{ "break-before": Y() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...X(), a] }], overflow: [{ overflow: O() }], "overflow-x": [{ "overflow-x": O() }], "overflow-y": [{ "overflow-y": O() }], overscroll: [{ overscroll: W() }], "overscroll-x": [{ "overscroll-x": W() }], "overscroll-y": [{ "overscroll-y": W() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [g] }], "inset-x": [{ "inset-x": [g] }], "inset-y": [{ "inset-y": [g] }], start: [{ start: [g] }], end: [{ end: [g] }], top: [{ top: [g] }], right: [{ right: [g] }], bottom: [{ bottom: [g] }], left: [{ left: [g] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", j, a] }], basis: [{ basis: L() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", a] }], grow: [{ grow: G() }], shrink: [{ shrink: G() }], order: [{ order: ["first", "last", "none", j, a] }], "grid-cols": [{ "grid-cols": [E] }], "col-start-end": [{ col: ["auto", { span: ["full", j, a] }, a] }], "col-start": [{ "col-start": I() }], "col-end": [{ "col-end": I() }], "grid-rows": [{ "grid-rows": [E] }], "row-start-end": [{ row: ["auto", { span: [j, a] }, a] }], "row-start": [{ "row-start": I() }], "row-end": [{ "row-end": I() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", a] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", a] }], gap: [{ gap: [m] }], "gap-x": [{ "gap-x": [m] }], "gap-y": [{ "gap-y": [m] }], "justify-content": [{ justify: ["normal", ..._()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ..._(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [..._(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [w] }], px: [{ px: [w] }], py: [{ py: [w] }], ps: [{ ps: [w] }], pe: [{ pe: [w] }], pt: [{ pt: [w] }], pr: [{ pr: [w] }], pb: [{ pb: [w] }], pl: [{ pl: [w] }], m: [{ m: [u] }], mx: [{ mx: [u] }], my: [{ my: [u] }], ms: [{ ms: [u] }], me: [{ me: [u] }], mt: [{ mt: [u] }], mr: [{ mr: [u] }], mb: [{ mb: [u] }], ml: [{ ml: [u] }], "space-x": [{ "space-x": [Z] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [Z] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", a, t] }], "min-w": [{ "min-w": [a, t, "min", "max", "fit"] }], "max-w": [{ "max-w": [a, t, "none", "full", "min", "max", "fit", "prose", { screen: [A] }, A] }], h: [{ h: [a, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [a, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [a, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [a, t, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", A, S] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", B] }], "font-family": [{ font: [E] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", a] }], "line-clamp": [{ "line-clamp": ["none", P, B] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", z, a] }], "list-image": [{ "list-image": ["none", a] }], "list-style-type": [{ list: ["none", "disc", "decimal", a] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e] }], "placeholder-opacity": [{ "placeholder-opacity": [y] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e] }], "text-opacity": [{ "text-opacity": [y] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...T(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", z, S] }], "underline-offset": [{ "underline-offset": ["auto", z, a] }], "text-decoration-color": [{ decoration: [e] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: b() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", a] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", a] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [y] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...X(), $e] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", Be] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Fe] }], "bg-color": [{ bg: [e] }], "gradient-from-pos": [{ from: [x] }], "gradient-via-pos": [{ via: [x] }], "gradient-to-pos": [{ to: [x] }], "gradient-from": [{ from: [C] }], "gradient-via": [{ via: [C] }], "gradient-to": [{ to: [C] }], rounded: [{ rounded: [n] }], "rounded-s": [{ "rounded-s": [n] }], "rounded-e": [{ "rounded-e": [n] }], "rounded-t": [{ "rounded-t": [n] }], "rounded-r": [{ "rounded-r": [n] }], "rounded-b": [{ "rounded-b": [n] }], "rounded-l": [{ "rounded-l": [n] }], "rounded-ss": [{ "rounded-ss": [n] }], "rounded-se": [{ "rounded-se": [n] }], "rounded-ee": [{ "rounded-ee": [n] }], "rounded-es": [{ "rounded-es": [n] }], "rounded-tl": [{ "rounded-tl": [n] }], "rounded-tr": [{ "rounded-tr": [n] }], "rounded-br": [{ "rounded-br": [n] }], "rounded-bl": [{ "rounded-bl": [n] }], "border-w": [{ border: [i] }], "border-w-x": [{ "border-x": [i] }], "border-w-y": [{ "border-y": [i] }], "border-w-s": [{ "border-s": [i] }], "border-w-e": [{ "border-e": [i] }], "border-w-t": [{ "border-t": [i] }], "border-w-r": [{ "border-r": [i] }], "border-w-b": [{ "border-b": [i] }], "border-w-l": [{ "border-l": [i] }], "border-opacity": [{ "border-opacity": [y] }], "border-style": [{ border: [...T(), "hidden"] }], "divide-x": [{ "divide-x": [i] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [y] }], "divide-style": [{ divide: T() }], "border-color": [{ border: [s] }], "border-color-x": [{ "border-x": [s] }], "border-color-y": [{ "border-y": [s] }], "border-color-s": [{ "border-s": [s] }], "border-color-e": [{ "border-e": [s] }], "border-color-t": [{ "border-t": [s] }], "border-color-r": [{ "border-r": [s] }], "border-color-b": [{ "border-b": [s] }], "border-color-l": [{ "border-l": [s] }], "divide-color": [{ divide: [s] }], "outline-style": [{ outline: ["", ...T()] }], "outline-offset": [{ "outline-offset": [z, a] }], "outline-w": [{ outline: [z, S] }], "outline-color": [{ outline: [e] }], "ring-w": [{ ring: K() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e] }], "ring-opacity": [{ "ring-opacity": [y] }], "ring-offset-w": [{ "ring-offset": [z, S] }], "ring-offset-color": [{ "ring-offset": [e] }], shadow: [{ shadow: ["", "inner", "none", A, qe] }], "shadow-color": [{ shadow: [E] }], opacity: [{ opacity: [y] }], "mix-blend": [{ "mix-blend": [...Q(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": Q() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [r] }], brightness: [{ brightness: [o] }], contrast: [{ contrast: [d] }], "drop-shadow": [{ "drop-shadow": ["", "none", A, a] }], grayscale: [{ grayscale: [c] }], "hue-rotate": [{ "hue-rotate": [f] }], invert: [{ invert: [h] }], saturate: [{ saturate: [N] }], sepia: [{ sepia: [V] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [r] }], "backdrop-brightness": [{ "backdrop-brightness": [o] }], "backdrop-contrast": [{ "backdrop-contrast": [d] }], "backdrop-grayscale": [{ "backdrop-grayscale": [c] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }], "backdrop-invert": [{ "backdrop-invert": [h] }], "backdrop-opacity": [{ "backdrop-opacity": [y] }], "backdrop-saturate": [{ "backdrop-saturate": [N] }], "backdrop-sepia": [{ "backdrop-sepia": [V] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [l] }], "border-spacing-x": [{ "border-spacing-x": [l] }], "border-spacing-y": [{ "border-spacing-y": [l] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", a] }], duration: [{ duration: k() }], ease: [{ ease: ["linear", "in", "out", "in-out", a] }], delay: [{ delay: k() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", a] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [R] }], "scale-x": [{ "scale-x": [R] }], "scale-y": [{ "scale-y": [R] }], rotate: [{ rotate: [j, a] }], "translate-x": [{ "translate-x": [J] }], "translate-y": [{ "translate-y": [J] }], "skew-x": [{ "skew-x": [H] }], "skew-y": [{ "skew-y": [H] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", a] }], accent: [{ accent: ["auto", e] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", a] }], "caret-color": [{ caret: [e] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": b() }], "scroll-mx": [{ "scroll-mx": b() }], "scroll-my": [{ "scroll-my": b() }], "scroll-ms": [{ "scroll-ms": b() }], "scroll-me": [{ "scroll-me": b() }], "scroll-mt": [{ "scroll-mt": b() }], "scroll-mr": [{ "scroll-mr": b() }], "scroll-mb": [{ "scroll-mb": b() }], "scroll-ml": [{ "scroll-ml": b() }], "scroll-p": [{ "scroll-p": b() }], "scroll-px": [{ "scroll-px": b() }], "scroll-py": [{ "scroll-py": b() }], "scroll-ps": [{ "scroll-ps": b() }], "scroll-pe": [{ "scroll-pe": b() }], "scroll-pt": [{ "scroll-pt": b() }], "scroll-pr": [{ "scroll-pr": b() }], "scroll-pb": [{ "scroll-pb": b() }], "scroll-pl": [{ "scroll-pl": b() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", a] }], fill: [{ fill: [e, "none"] }], "stroke-w": [{ stroke: [z, S, B] }], stroke: [{ stroke: [e, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}, Xe = Ge(Ke);
function Qe(...e) {
  return Xe(le(e));
}
const Ye = ye("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "bg-primary text-primary-foreground shadow hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8", icon: "h-9 w-9" } }, defaultVariants: { variant: "default", size: "default" } }), De = c.forwardRef(({ className: e, variant: t, size: r, asChild: o = false, ...s }, n) => {
  const l = o ? se : "button";
  return c.createElement(l, { className: Qe(Ye({ variant: t, size: r, className: e })), ref: n, ...s });
});
De.displayName = "Button";

export { De as D, Qe as Q, ne as n, rr as r, se as s, ye as y };
//# sourceMappingURL=button-U5Omqg_X.mjs.map
