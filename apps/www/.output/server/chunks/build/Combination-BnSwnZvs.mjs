import * as c from 'react';
import { useState } from 'react';
import { I as I$1, S, h } from './index-DJ3tN8qV.mjs';
import { v, h as h$1 } from './index-DXPxg-Qg.mjs';
import { r as rr } from './button-U5Omqg_X.mjs';
import { jsx } from 'react/jsx-runtime';
import f__default from 'react-dom';

function Te(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = S(e);
  c.useEffect(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: true }), () => t.removeEventListener("keydown", r, { capture: true });
  }, [n, t]);
}
var Ae = "DismissableLayer", Q = "dismissableLayer.update", ke = "dismissableLayer.pointerDownOutside", De = "dismissableLayer.focusOutside", te, he = c.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), Fe = c.forwardRef((e, t) => {
  var _a;
  const { disableOutsidePointerEvents: n = false, onEscapeKeyDown: r, onPointerDownOutside: a, onFocusOutside: u, onInteractOutside: s, onDismiss: o, ...b } = e, d = c.useContext(he), [f, h] = c.useState(null), v$1 = (_a = f == null ? void 0 : f.ownerDocument) != null ? _a : globalThis == null ? void 0 : globalThis.document, [, p] = c.useState({}), C = rr(t, (y) => h(y)), c$1 = Array.from(d.layers), [l] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), m = c$1.indexOf(l), w = f ? c$1.indexOf(f) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, g = w >= m, S = Me((y) => {
    const R = y.target, F = [...d.branches].some((j) => j.contains(R));
    !g || F || (a == null ? void 0 : a(y), s == null ? void 0 : s(y), y.defaultPrevented || (o == null ? void 0 : o()));
  }, v$1), O = xe((y) => {
    const R = y.target;
    [...d.branches].some((j) => j.contains(R)) || (u == null ? void 0 : u(y), s == null ? void 0 : s(y), y.defaultPrevented || (o == null ? void 0 : o()));
  }, v$1);
  return Te((y) => {
    w === d.layers.size - 1 && (r == null ? void 0 : r(y), !y.defaultPrevented && o && (y.preventDefault(), o()));
  }, v$1), c.useEffect(() => {
    if (f) return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (te = v$1.body.style.pointerEvents, v$1.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), ne(), () => {
      n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (v$1.body.style.pointerEvents = te);
    };
  }, [f, v$1, n, d]), c.useEffect(() => () => {
    f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), ne());
  }, [f, d]), c.useEffect(() => {
    const y = () => p({});
    return document.addEventListener(Q, y), () => document.removeEventListener(Q, y);
  }, []), jsx(v.div, { ...b, ref: C, style: { pointerEvents: E ? g ? "auto" : "none" : void 0, ...e.style }, onFocusCapture: I$1(e.onFocusCapture, O.onFocusCapture), onBlurCapture: I$1(e.onBlurCapture, O.onBlurCapture), onPointerDownCapture: I$1(e.onPointerDownCapture, S.onPointerDownCapture) });
});
Fe.displayName = Ae;
var Ne = "DismissableLayerBranch", Ie = c.forwardRef((e, t) => {
  const n = c.useContext(he), r = c.useRef(null), a = rr(t, r);
  return c.useEffect(() => {
    const u = r.current;
    if (u) return n.branches.add(u), () => {
      n.branches.delete(u);
    };
  }, [n.branches]), jsx(v.div, { ...e, ref: a });
});
Ie.displayName = Ne;
function Me(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = S(e), r = c.useRef(false), a = c.useRef(() => {
  });
  return c.useEffect(() => {
    const u = (o) => {
      if (o.target && !r.current) {
        let b = function() {
          me(ke, n, d, { discrete: true });
        };
        const d = { originalEvent: o };
        o.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = b, t.addEventListener("click", a.current, { once: true })) : b();
      } else t.removeEventListener("click", a.current);
      r.current = false;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", u);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", u), t.removeEventListener("click", a.current);
    };
  }, [t, n]), { onPointerDownCapture: () => r.current = true };
}
function xe(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = S(e), r = c.useRef(false);
  return c.useEffect(() => {
    const a = (u) => {
      u.target && !r.current && me(De, n, { originalEvent: u }, { discrete: false });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), { onFocusCapture: () => r.current = true, onBlurCapture: () => r.current = false };
}
function ne() {
  const e = new CustomEvent(Q);
  document.dispatchEvent(e);
}
function me(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, u = new CustomEvent(e, { bubbles: false, cancelable: true, detail: n });
  t && a.addEventListener(e, t, { once: true }), r ? h$1(a, u) : a.dispatchEvent(u);
}
var X = 0;
function Kt() {
  c.useEffect(() => {
    var _a, _b;
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (_a = e[0]) != null ? _a : re()), document.body.insertAdjacentElement("beforeend", (_b = e[1]) != null ? _b : re()), X++, () => {
      X === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), X--;
    };
  }, []);
}
function re() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Y = "focusScope.autoFocusOnMount", z = "focusScope.autoFocusOnUnmount", ae = { bubbles: false, cancelable: true }, Be = "FocusScope", We = c.forwardRef((e, t) => {
  const { loop: n = false, trapped: r = false, onMountAutoFocus: a, onUnmountAutoFocus: u, ...s } = e, [o, b] = c.useState(null), d = S(a), f = S(u), h = c.useRef(null), v$1 = rr(t, (c) => b(c)), p = c.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  c.useEffect(() => {
    if (r) {
      let c = function(E) {
        if (p.paused || !o) return;
        const g = E.target;
        o.contains(g) ? h.current = g : L(h.current, { select: true });
      }, l = function(E) {
        if (p.paused || !o) return;
        const g = E.relatedTarget;
        g !== null && (o.contains(g) || L(h.current, { select: true }));
      }, m = function(E) {
        if (document.activeElement === document.body) for (const S of E) S.removedNodes.length > 0 && L(o);
      };
      document.addEventListener("focusin", c), document.addEventListener("focusout", l);
      const w = new MutationObserver(m);
      return o && w.observe(o, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", c), document.removeEventListener("focusout", l), w.disconnect();
      };
    }
  }, [r, o, p.paused]), c.useEffect(() => {
    if (o) {
      ie.add(p);
      const c = document.activeElement;
      if (!o.contains(c)) {
        const m = new CustomEvent(Y, ae);
        o.addEventListener(Y, d), o.dispatchEvent(m), m.defaultPrevented || (_e(Ve(pe(o)), { select: true }), document.activeElement === c && L(o));
      }
      return () => {
        o.removeEventListener(Y, d), setTimeout(() => {
          const m = new CustomEvent(z, ae);
          o.addEventListener(z, f), o.dispatchEvent(m), m.defaultPrevented || L(c != null ? c : document.body, { select: true }), o.removeEventListener(z, f), ie.remove(p);
        }, 0);
      };
    }
  }, [o, d, f, p]);
  const C = c.useCallback((c) => {
    if (!n && !r || p.paused) return;
    const l = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, m = document.activeElement;
    if (l && m) {
      const w = c.currentTarget, [E, g] = Ue(w);
      E && g ? !c.shiftKey && m === g ? (c.preventDefault(), n && L(E, { select: true })) : c.shiftKey && m === E && (c.preventDefault(), n && L(g, { select: true })) : m === w && c.preventDefault();
    }
  }, [n, r, p.paused]);
  return jsx(v.div, { tabIndex: -1, ...s, ref: v$1, onKeyDown: C });
});
We.displayName = Be;
function _e(e, { select: t = false } = {}) {
  const n = document.activeElement;
  for (const r of e) if (L(r, { select: t }), document.activeElement !== n) return;
}
function Ue(e) {
  const t = pe(e), n = oe(t, e), r = oe(t.reverse(), e);
  return [n, r];
}
function pe(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (r) => {
    const a = r.tagName === "INPUT" && r.type === "hidden";
    return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function oe(e, t) {
  for (const n of e) if (!Ke(n, { upTo: t })) return n;
}
function Ke(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return true;
  for (; e; ) {
    if (t !== void 0 && e === t) return false;
    if (getComputedStyle(e).display === "none") return true;
    e = e.parentElement;
  }
  return false;
}
function He(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function L(e, { select: t = false } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: true }), e !== n && He(e) && t && e.select();
  }
}
var ie = je();
function je() {
  let e = [];
  return { add(t) {
    const n = e[0];
    t !== n && (n == null ? void 0 : n.pause()), e = ce(e, t), e.unshift(t);
  }, remove(t) {
    var _a;
    e = ce(e, t), (_a = e[0]) == null ? void 0 : _a.resume();
  } };
}
function ce(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ve(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Xe = c.useId || (() => {
}), Ye = 0;
function Ht(e) {
  const [t, n] = c.useState(Xe());
  return h(() => {
    n((r) => r != null ? r : String(Ye++));
  }, [e]), (t ? `radix-${t}` : "");
}
var ze = "Portal", Ge = c.forwardRef((e, t) => {
  var _a;
  const { container: n, ...r } = e, [a, u] = c.useState(false);
  h(() => u(true), []);
  const s = n || a && ((_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body);
  return s ? f__default.createPortal(jsx(v.div, { ...r, ref: t }), s) : null;
});
Ge.displayName = ze;
var Ze = function(e) {
  if (typeof document > "u") return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, T = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), M = {}, G = 0, ye = function(e) {
  return e && (e.host || ye(e.parentNode));
}, $e = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n)) return n;
    var r = ye(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, qe = function(e, t, n, r) {
  var a = $e(t, Array.isArray(e) ? e : [e]);
  M[n] || (M[n] = /* @__PURE__ */ new WeakMap());
  var u = M[n], s = [], o = /* @__PURE__ */ new Set(), b = new Set(a), d = function(h) {
    !h || o.has(h) || (o.add(h), d(h.parentNode));
  };
  a.forEach(d);
  var f = function(h) {
    !h || b.has(h) || Array.prototype.forEach.call(h.children, function(v) {
      if (o.has(v)) f(v);
      else try {
        var p = v.getAttribute(r), C = p !== null && p !== "false", c = (T.get(v) || 0) + 1, l = (u.get(v) || 0) + 1;
        T.set(v, c), u.set(v, l), s.push(v), c === 1 && C && I.set(v, true), l === 1 && v.setAttribute(n, "true"), C || v.setAttribute(r, "true");
      } catch (m) {
        console.error("aria-hidden: cannot operate on ", v, m);
      }
    });
  };
  return f(t), o.clear(), G++, function() {
    s.forEach(function(h) {
      var v = T.get(h) - 1, p = u.get(h) - 1;
      T.set(h, v), u.set(h, p), v || (I.has(h) || h.removeAttribute(r), I.delete(h)), p || h.removeAttribute(n);
    }), G--, G || (T = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), M = {});
  };
}, jt = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = Ze(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), qe(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, P = function() {
  return P = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var u in n) Object.prototype.hasOwnProperty.call(n, u) && (t[u] = n[u]);
    }
    return t;
  }, P.apply(this, arguments);
};
function Ee(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Qe(e, t, n) {
  for (var r = 0, a = t.length, u; r < a; r++) (u || !(r in t)) && (u || (u = Array.prototype.slice.call(t, 0, r)), u[r] = t[r]);
  return e.concat(u || Array.prototype.slice.call(t));
}
var W = "right-scroll-bar-position", _ = "width-before-scroll-bar", Je = "with-scroll-bars-hidden", et = "--removed-body-scroll-bar-size";
function Z(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function tt(e, t) {
  var n = useState(function() {
    return { value: e, callback: t, facade: { get current() {
      return n.value;
    }, set current(r) {
      var a = n.value;
      a !== r && (n.value = r, n.callback(r, a));
    } } };
  })[0];
  return n.callback = t, n.facade;
}
var nt = c.useEffect, ue = /* @__PURE__ */ new WeakMap();
function rt(e, t) {
  var n = tt(null, function(r) {
    return e.forEach(function(a) {
      return Z(a, r);
    });
  });
  return nt(function() {
    var r = ue.get(n);
    if (r) {
      var a = new Set(r), u = new Set(e), s = n.current;
      a.forEach(function(o) {
        u.has(o) || Z(o, null);
      }), u.forEach(function(o) {
        a.has(o) || Z(o, s);
      });
    }
    ue.set(n, e);
  }, [e]), n;
}
function at(e) {
  return e;
}
function ot(e, t) {
  t === void 0 && (t = at);
  var n = [], r = false, a = { read: function() {
    if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return n.length ? n[n.length - 1] : e;
  }, useMedium: function(u) {
    var s = t(u, r);
    return n.push(s), function() {
      n = n.filter(function(o) {
        return o !== s;
      });
    };
  }, assignSyncMedium: function(u) {
    for (r = true; n.length; ) {
      var s = n;
      n = [], s.forEach(u);
    }
    n = { push: function(o) {
      return u(o);
    }, filter: function() {
      return n;
    } };
  }, assignMedium: function(u) {
    r = true;
    var s = [];
    if (n.length) {
      var o = n;
      n = [], o.forEach(u), s = n;
    }
    var b = function() {
      var f = s;
      s = [], f.forEach(u);
    }, d = function() {
      return Promise.resolve().then(b);
    };
    d(), n = { push: function(f) {
      s.push(f), d();
    }, filter: function(f) {
      return s = s.filter(f), n;
    } };
  } };
  return a;
}
function it(e) {
  e === void 0 && (e = {});
  var t = ot(null);
  return t.options = P({ async: true, ssr: false }, e), t;
}
var ge = function(e) {
  var t = e.sideCar, n = Ee(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return c.createElement(r, P({}, n));
};
ge.isSideCarExport = true;
function ct(e, t) {
  return e.useMedium(t), ge;
}
var be = it(), $ = function() {
}, H = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({ onScrollCapture: $, onWheelCapture: $, onTouchMoveCapture: $ }), a = r[0], u = r[1], s = e.forwardProps, o = e.children, b = e.className, d = e.removeScrollBar, f = e.enabled, h = e.shards, v = e.sideCar, p = e.noIsolation, C = e.inert, c$1 = e.allowPinchZoom, l = e.as, m = l === void 0 ? "div" : l, w = e.gapMode, E = Ee(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), g = v, S = rt([n, t]), O = P(P({}, E), a);
  return c.createElement(c.Fragment, null, f && c.createElement(g, { sideCar: be, removeScrollBar: d, shards: h, noIsolation: p, inert: C, setCallbacks: u, allowPinchZoom: !!c$1, lockRef: n, gapMode: w }), s ? c.cloneElement(c.Children.only(o), P(P({}, O), { ref: S })) : c.createElement(m, P({}, O, { className: b, ref: S }), o));
});
H.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
H.classNames = { fullWidth: _, zeroRight: W };
var ut = function() {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function st() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ut();
  return t && e.setAttribute("nonce", t), e;
}
function lt(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function dt(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ft = function() {
  var e = 0, t = null;
  return { add: function(n) {
    e == 0 && (t = st()) && (lt(t, n), dt(t)), e++;
  }, remove: function() {
    e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
  } };
}, vt = function() {
  var e = ft();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Se = function() {
  var e = vt(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, ht = { left: 0, top: 0, right: 0, gap: 0 }, pt = function(e) {
  return ht;
}, yt = Se(), D = "data-scroll-locked", Et = function(e, t, n, r) {
  var a = e.left, u = e.top, s = e.right, o = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Je, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(o, "px ").concat(r, `;
  }
  body[`).concat(D, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(o, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(W, ` {
    right: `).concat(o, "px ").concat(r, `;
  }
  
  .`).concat(_, ` {
    margin-right: `).concat(o, "px ").concat(r, `;
  }
  
  .`).concat(W, " .").concat(W, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(_, " .").concat(_, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(D, `] {
    `).concat(et, ": ").concat(o, `px;
  }
`);
}, se = function() {
  var e = parseInt(document.body.getAttribute(D) || "0", 10);
  return isFinite(e) ? e : 0;
}, gt = function() {
  c.useEffect(function() {
    return document.body.setAttribute(D, (se() + 1).toString()), function() {
      var e = se() - 1;
      e <= 0 ? document.body.removeAttribute(D) : document.body.setAttribute(D, e.toString());
    };
  }, []);
}, bt = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  gt();
  var u = c.useMemo(function() {
    return pt();
  }, [a]);
  return c.createElement(yt, { styles: Et(u, !t, a, n ? "" : "!important") });
};
var A = false, St = function(e) {
  return e.tagName === "TEXTAREA";
}, we = function(e, t) {
  if (!(e instanceof Element)) return false;
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !St(e) && n[t] === "visible");
}, wt = function(e) {
  return we(e, "overflowY");
}, Ct = function(e) {
  return we(e, "overflowX");
}, le = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = Ce(e, r);
    if (a) {
      var u = Pe(e, r), s = u[1], o = u[2];
      if (s > o) return true;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return false;
}, Pt = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [t, n, r];
}, Ot = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [t, n, r];
}, Ce = function(e, t) {
  return e === "v" ? wt(t) : Ct(t);
}, Pe = function(e, t) {
  return e === "v" ? Pt(t) : Ot(t);
}, Rt = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Lt = function(e, t, n, r, a) {
  var u = Rt(e, window.getComputedStyle(t).direction), s = u * r, o = n.target, b = t.contains(o), d = false, f = s > 0, h = 0, v = 0;
  do {
    var p = Pe(e, o), C = p[0], c = p[1], l = p[2], m = c - l - u * C;
    (C || m) && Ce(e, o) && (h += m, v += C), o instanceof ShadowRoot ? o = o.host : o = o.parentNode;
  } while (!b && o !== document.body || b && (t.contains(o) || t === o));
  return (f && (Math.abs(h) < 1 || !a) || !f && (Math.abs(v) < 1 || !a)) && (d = true), d;
}, B = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, de = function(e) {
  return [e.deltaX, e.deltaY];
}, fe = function(e) {
  return e && "current" in e ? e.current : e;
}, Tt = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, At = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, kt = 0, k = [];
function Dt(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), a = c.useState(kt++)[0], u = c.useState(Se)[0], s = c.useRef(e);
  c.useEffect(function() {
    s.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var c = Qe([e.lockRef.current], (e.shards || []).map(fe)).filter(Boolean);
      return c.forEach(function(l) {
        return l.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), c.forEach(function(l) {
          return l.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var o = c.useCallback(function(c, l) {
    if ("touches" in c && c.touches.length === 2 || c.type === "wheel" && c.ctrlKey) return !s.current.allowPinchZoom;
    var m = B(c), w = n.current, E = "deltaX" in c ? c.deltaX : w[0] - m[0], g = "deltaY" in c ? c.deltaY : w[1] - m[1], S, O = c.target, y = Math.abs(E) > Math.abs(g) ? "h" : "v";
    if ("touches" in c && y === "h" && O.type === "range") return false;
    var R = le(y, O);
    if (!R) return true;
    if (R ? S = y : (S = y === "v" ? "h" : "v", R = le(y, O)), !R) return false;
    if (!r.current && "changedTouches" in c && (E || g) && (r.current = S), !S) return true;
    var F = r.current || S;
    return Lt(F, l, c, F === "h" ? E : g, true);
  }, []), b = c.useCallback(function(c) {
    var l = c;
    if (!(!k.length || k[k.length - 1] !== u)) {
      var m = "deltaY" in l ? de(l) : B(l), w = t.current.filter(function(S) {
        return S.name === l.type && (S.target === l.target || l.target === S.shadowParent) && Tt(S.delta, m);
      })[0];
      if (w && w.should) {
        l.cancelable && l.preventDefault();
        return;
      }
      if (!w) {
        var E = (s.current.shards || []).map(fe).filter(Boolean).filter(function(S) {
          return S.contains(l.target);
        }), g = E.length > 0 ? o(l, E[0]) : !s.current.noIsolation;
        g && l.cancelable && l.preventDefault();
      }
    }
  }, []), d = c.useCallback(function(c, l, m, w) {
    var E = { name: c, delta: l, target: m, should: w, shadowParent: Ft(m) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(g) {
        return g !== E;
      });
    }, 1);
  }, []), f = c.useCallback(function(c) {
    n.current = B(c), r.current = void 0;
  }, []), h = c.useCallback(function(c) {
    d(c.type, de(c), c.target, o(c, e.lockRef.current));
  }, []), v = c.useCallback(function(c) {
    d(c.type, B(c), c.target, o(c, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return k.push(u), e.setCallbacks({ onScrollCapture: h, onWheelCapture: h, onTouchMoveCapture: v }), document.addEventListener("wheel", b, A), document.addEventListener("touchmove", b, A), document.addEventListener("touchstart", f, A), function() {
      k = k.filter(function(c) {
        return c !== u;
      }), document.removeEventListener("wheel", b, A), document.removeEventListener("touchmove", b, A), document.removeEventListener("touchstart", f, A);
    };
  }, []);
  var p = e.removeScrollBar, C = e.inert;
  return c.createElement(c.Fragment, null, C ? c.createElement(u, { styles: At(a) }) : null, p ? c.createElement(bt, { gapMode: e.gapMode }) : null);
}
function Ft(e) {
  for (var t = null; e !== null; ) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Nt = ct(be, Dt);
var It = c.forwardRef(function(e, t) {
  return c.createElement(H, P({}, e, { ref: t, sideCar: Nt }));
});
It.classNames = H.classNames;

export { Fe as F, Ge as G, Ht as H, It as I, Kt as K, We as W, jt as j };
//# sourceMappingURL=Combination-BnSwnZvs.mjs.map
