import * as c from 'react';
import { jsx } from 'react/jsx-runtime';
import { r as rr } from './button-U5Omqg_X.mjs';

function b(e, n) {
  const t = c.createContext(n), o = (c$1) => {
    const { children: u, ...f } = c$1, a = c.useMemo(() => f, Object.values(f));
    return jsx(t.Provider, { value: a, children: u });
  };
  o.displayName = e + "Provider";
  function r(c$1) {
    const u = c.useContext(t);
    if (u) return u;
    if (n !== void 0) return n;
    throw new Error(`\`${c$1}\` must be used within \`${e}\``);
  }
  return [o, r];
}
function U(e, n = []) {
  let t = [];
  function o(c$1, u) {
    const f = c.createContext(u), a = t.length;
    t = [...t, u];
    const i = (d) => {
      var _a;
      const { scope: p, children: l, ...N } = d, M = ((_a = p == null ? void 0 : p[e]) == null ? void 0 : _a[a]) || f, P = c.useMemo(() => N, Object.values(N));
      return jsx(M.Provider, { value: P, children: l });
    };
    i.displayName = c$1 + "Provider";
    function m(d, p) {
      var _a;
      const l = ((_a = p == null ? void 0 : p[e]) == null ? void 0 : _a[a]) || f, N = c.useContext(l);
      if (N) return N;
      if (u !== void 0) return u;
      throw new Error(`\`${d}\` must be used within \`${c$1}\``);
    }
    return [i, m];
  }
  const r = () => {
    const c$1 = t.map((u) => c.createContext(u));
    return function(f) {
      const a = (f == null ? void 0 : f[e]) || c$1;
      return c.useMemo(() => ({ [`__scope${e}`]: { ...f, [e]: a } }), [f, a]);
    };
  };
  return r.scopeName = e, [o, A(r, ...n)];
}
function A(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const t = () => {
    const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
    return function(c$1) {
      const u = o.reduce((f, { useScope: a, scopeName: i }) => {
        const d = a(c$1)[`__scope${i}`];
        return { ...f, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${n.scopeName}`]: u }), [u]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
function S(e) {
  const n = c.useRef(e);
  return c.useEffect(() => {
    n.current = e;
  }), c.useMemo(() => (...t) => {
    var _a;
    return (_a = n.current) == null ? void 0 : _a.call(n, ...t);
  }, []);
}
var h = (globalThis == null ? void 0 : globalThis.document) ? c.useLayoutEffect : () => {
};
function I(e, n, { checkForDefaultPrevented: t = true } = {}) {
  return function(r) {
    if (e == null ? void 0 : e(r), t === false || !r.defaultPrevented) return n == null ? void 0 : n(r);
  };
}
function _({ prop: e, defaultProp: n, onChange: t = () => {
} }) {
  const [o, r] = E({ defaultProp: n, onChange: t }), c$1 = e !== void 0, u = c$1 ? e : o, f = S(t), a = c.useCallback((i) => {
    if (c$1) {
      const d = typeof i == "function" ? i(e) : i;
      d !== e && f(d);
    } else r(i);
  }, [c$1, e, r, f]);
  return [u, a];
}
function E({ defaultProp: e, onChange: n }) {
  const t = c.useState(e), [o] = t, r = c.useRef(o), c$1 = S(n);
  return c.useEffect(() => {
    r.current !== o && (c$1(o), r.current = o);
  }, [o, r, c$1]), t;
}
function x(e, n) {
  return c.useReducer((t, o) => {
    var _a;
    return (_a = n[t][o]) != null ? _a : t;
  }, e);
}
var y = (e) => {
  const { present: n, children: t } = e, o = O(n), r = typeof t == "function" ? t({ present: o.isPresent }) : c.Children.only(t), c$1 = rr(o.ref, R(r));
  return typeof t == "function" || o.isPresent ? c.cloneElement(r, { ref: c$1 }) : null;
};
y.displayName = "Presence";
function O(e) {
  const [n, t] = c.useState(), o = c.useRef({}), r = c.useRef(e), c$1 = c.useRef("none"), u = e ? "mounted" : "unmounted", [f, a] = x(u, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return c.useEffect(() => {
    const i = v(o.current);
    c$1.current = f === "mounted" ? i : "none";
  }, [f]), h(() => {
    const i = o.current, m = r.current;
    if (m !== e) {
      const p = c$1.current, l = v(i);
      e ? a("MOUNT") : l === "none" || (i == null ? void 0 : i.display) === "none" ? a("UNMOUNT") : a(m && p !== l ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, a]), h(() => {
    var _a;
    if (n) {
      let i;
      const m = (_a = n.ownerDocument.defaultView) != null ? _a : window, d = (l) => {
        const M = v(o.current).includes(l.animationName);
        if (l.target === n && M && (a("ANIMATION_END"), !r.current)) {
          const P = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", i = m.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = P);
          });
        }
      }, p = (l) => {
        l.target === n && (c$1.current = v(o.current));
      };
      return n.addEventListener("animationstart", p), n.addEventListener("animationcancel", d), n.addEventListener("animationend", d), () => {
        m.clearTimeout(i), n.removeEventListener("animationstart", p), n.removeEventListener("animationcancel", d), n.removeEventListener("animationend", d);
      };
    } else a("ANIMATION_END");
  }, [n, a]), { isPresent: ["mounted", "unmountSuspended"].includes(f), ref: c.useCallback((i) => {
    i && (o.current = getComputedStyle(i)), t(i);
  }, []) };
}
function v(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function R(e) {
  var _a, _b;
  let n = (_a = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}

export { I, S, U, _, b, h, y };
//# sourceMappingURL=index-DJ3tN8qV.mjs.map
