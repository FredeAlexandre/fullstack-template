import { jsx, jsxs } from 'react/jsx-runtime';
import { createContext, useState, useContext, useEffect, useRef } from 'react';
import { DndContext, useDroppable, useDraggable, useSensors, useSensor, PointerSensor, KeyboardSensor, closestCenter } from '@dnd-kit/core';
import { D as De } from './button-U5Omqg_X.mjs';
import { sortableKeyboardCoordinates, SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ut = { contracts: [], functions: [], addContract: () => {
}, addFunction: () => {
}, addFunctionToContract: () => {
}, delFunctionContract: () => {
}, changeFunctionName: () => {
}, changeFunctionView: () => {
}, getFunctionName: () => "function", getFunctionView: () => true, updatePosition: () => {
} }, z = createContext(ut), ft = ({ children: n }) => {
  const [D, b] = useState([]), [y, C] = useState([]), K = (a) => {
    b((i) => [...i, a]);
  }, x = (a) => C((i) => [...i, a]), T = (a, i) => {
    b((e) => e.map((t) => {
      if (t.props.id === a) {
        const r = { id: i.props.id, name: i.props.name, content: i.props.content, position: i.props.position, variables: i.props.variables, viewInside: i.props.viewInside }, o = [...t.props.functions, r];
        return { content: "contract", props: { id: a, name: t.props.name, content: t.props.content, position: t.props.position, functions: o, variables: o } };
      }
      return t;
    })), C((e) => e.filter((t) => t.props.id !== i.props.id));
  }, f = (a, i) => {
    b((e) => e.map((t) => {
      if (t.props.id === a) {
        const r = t.props.functions.find((R) => R.id === i);
        if (r) {
          const R = { content: "function", props: { id: r.id, name: r.name, position: r.position, content: r.content, variables: r.variables, viewInside: r.viewInside } };
          x(R);
        }
        const o = t.props.functions.filter((R) => R.id !== i);
        return { content: "contract", props: { id: a, name: t.props.name, content: t.props.content, position: t.props.position, functions: o, variables: t.props.variables } };
      }
      return t;
    }));
  }, u = (a, i) => {
    b((e) => e.map((t) => {
      const r = t.props.functions.map((o) => o.id === a ? { ...o, name: i } : o);
      return { ...t, props: { ...t.props, functions: r } };
    })), C((e) => e.map((t) => t.props.id === a ? { ...t, props: { ...t.props, name: i } } : t));
  }, V = (a, i) => {
    b((e) => e.map((t) => {
      const r = t.props.functions.map((o) => o.id === a ? { ...o, viewInside: i } : o);
      return { ...t, props: { ...t.props, functions: r } };
    })), C((e) => e.map((t) => t.props.id === a ? { ...t, props: { ...t.props, viewInside: i } } : t));
  }, E = (a) => {
    for (const e of D) {
      const t = e.props.functions.find((r) => r.id === a);
      if (t) return t.name;
    }
    const i = y.find((e) => e.props.id === a);
    return i ? i.props.name : "";
  }, S = (a) => {
    for (const e of D) {
      const t = e.props.functions.find((r) => r.id === a);
      if (t) return t.viewInside;
    }
    const i = y.find((e) => e.props.id === a);
    return i ? i.props.viewInside : true;
  }, I = (a, i, e) => {
    b((t) => t.map((r) => {
      if (r.props.id === a) return { ...r, props: { ...r.props, position: { x: i, y: e } } };
      const o = r.props.functions.map((d) => d.id === a ? { ...d, position: { x: i, y: e } } : d);
      return { ...r, props: { ...r.props, functions: o } };
    })), C((t) => t.map((r) => r.props.id === a ? { ...r, props: { ...r.props, position: { x: i, y: e } } } : r));
  };
  return jsx(z.Provider, { value: { contracts: D, functions: y, addContract: K, addFunction: x, addFunctionToContract: T, delFunctionContract: f, changeFunctionName: u, getFunctionName: E, getFunctionView: S, updatePosition: I, changeFunctionView: V }, children: n });
};
function ct({ id: n, content: D }) {
  const { attributes: b, listeners: y, setNodeRef: C, setActivatorNodeRef: K, transform: x, transition: T, isDragging: f } = useSortable({ id: n }), u = useRef(null), { changeFunctionName: V, getFunctionName: E } = useContext(z), [S, I] = useState(D), a = (e) => {
    I(e.target.value), V(n, e.target.value);
  }, i = x ? { transform: `translate3d(${x.x}px, ${x.y}px, 0)`, opacity: f ? 0.6 : 1 } : {};
  return jsxs("div", { id: n, ref: C, style: { ...i }, className: "mb-4 flex h-12 w-64 place-items-center rounded-lg border border-black bg-white font-medium text-black text-sm", ...b, children: [jsx("input", { type: "text", ref: u, value: S, onChange: a, className: "ml-4", onKeyDown: (e) => {
    e.stopPropagation(), e.key === "Enter" && u.current && u.current.blur();
  } }), jsx("div", { style: { cursor: "grab" }, ...y, className: "mr-4 flex w-full justify-end", children: jsx("span", { children: ":::" }) })] });
}
function mt({ id: n, content: D }) {
  const { attributes: b, listeners: y, setNodeRef: C, setActivatorNodeRef: K, transform: x, transition: T, isDragging: f } = useSortable({ id: n });
  useRef(null);
  const { contracts: u, delFunctionContract: V, updatePosition: E, functions: S } = useContext(z), { changeFunctionName: I, getFunctionName: a, changeFunctionView: i, getFunctionView: e } = useContext(z), [t, r] = useState(a(n)), [o, d] = useState(e(n)), [R, j] = useState([]), [p, m] = useState([{ id: "1", name: "Variable 1", content: "Variable 1" }, { id: "2", name: "Variable 2", content: "Variable 1" }, { id: "3", name: "Variable 3", content: "Variable 1" }]);
  useEffect(() => {
    const l = u.find((c) => c.props.id === n);
    l && (j(l.props.functions), m(R));
  }, [u, n, R]);
  const g = (l) => {
    r(l.target.value), I(n, l.target.value);
  }, P = useRef(null), h = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })), w = useRef(null), k = (l) => {
    const { active: c, over: v, delta: J } = l, U = c.rect.current.translated;
    if (U && w.current) {
      const N = w.current.getBoundingClientRect();
      if (U.left < N.left || U.right > N.right || U.top < N.top || U.bottom > N.bottom) {
        V(n, c.id.toString()), S.find((G) => G.props.id === c.id) && E(c.id.toString(), U.left, U.top), j((G) => G.filter((O) => O.id !== c.id)), m((G) => G.filter((O) => O.id !== c.id));
        return;
      }
    }
    v && (c == null ? void 0 : c.id) !== (v == null ? void 0 : v.id) && m((N) => {
      const B = N.findIndex(($) => $.id === (c == null ? void 0 : c.id)), G = N.findIndex(($) => $.id === (v == null ? void 0 : v.id));
      return arrayMove(N, B, G);
    });
  };
  return jsxs("div", { id: n, ref: C, style: { transform: x ? `translate3d(${x.x}px, ${x.y}px, 0)` : void 0, opacity: f ? 0.6 : 1 }, className: "my-4 flex h-fit w-80 flex-col rounded-lg border border-black bg-white font-medium text-black text-sm", ...b, children: [jsxs("div", { className: "mt-2 flex h-12 w-full flex-row items-center justify-start", children: [o ? jsx(ChevronUp, { onClick: () => {
    d(false), i(n, false);
  }, className: "ml-2 w-16" }) : jsx(ChevronDown, { onClick: () => {
    d(true), i(n, true);
  }, className: "ml-2 w-16" }), jsx("input", { type: "text", ref: P, value: t, onChange: g, className: "ml-4", onKeyDown: (l) => {
    l.stopPropagation(), l.key === "Enter" && P.current && P.current.blur();
  } }), jsx("div", { style: { cursor: "grab" }, ...y, className: "mr-4 flex w-full justify-end", children: jsx("span", { children: ":::" }) })] }), o ? jsx("div", { className: "my-8 flex justify-center", children: jsx(DndContext, { sensors: h, collisionDetection: closestCenter, onDragEnd: k, children: jsx(SortableContext, { items: p, strategy: verticalListSortingStrategy, children: jsx("ul", { children: p.map((l) => jsx(ct, { id: l.id, content: l.name, name: l.name }, l.id)) }) }) }) }) : jsx("div", { className: "my-2" })] });
}
function gt({ id: n, name: D, position: b }) {
  const { attributes: y, listeners: C, setNodeRef: K, transform: x, isDragging: T } = useDraggable({ id: n }), { contracts: f, delFunctionContract: u, updatePosition: V } = useContext(z), E = useRef(null), S = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })), I = useRef(null), a = (p) => {
    const { active: m, over: g, delta: P } = p;
    console.log("end drag !!!");
    const h = m.rect.current.translated;
    if (h && I.current) {
      const w = I.current.getBoundingClientRect();
      if (h.left < w.left || h.right > w.right || h.top < w.top || h.bottom > w.bottom) {
        u(n, m.id.toString()), e.find((l) => l.id === m.id) && V(m.id.toString(), h.left, h.top), t((l) => l.filter((v) => v.id !== m.id)), o((l) => l.filter((v) => v.id !== m.id));
        return;
      }
    }
    g && (m == null ? void 0 : m.id) !== (g == null ? void 0 : g.id) && o((w) => {
      const k = w.findIndex((c) => c.id === (m == null ? void 0 : m.id)), l = w.findIndex((c) => c.id === (g == null ? void 0 : g.id));
      return arrayMove(w, k, l);
    });
  }, i = (p) => {
    console.log("start drag !!!");
  }, [e, t] = useState([]);
  useEffect(() => {
    const p = f.find((m) => m.props.id === n);
    p && (t(p.props.functions), o(e));
  }, [f, n, e]);
  const [r, o] = useState(e), [d, R] = useState(D), j = (p) => {
    R(p.target.value);
  };
  return jsxs("div", { id: n, ref: I, style: { transform: x ? `translate3d(${x.x}px, ${x.y}px, 0)` : void 0, left: `${b.x}px`, top: `${b.y}px`, position: "absolute", opacity: T ? 0.6 : 1 }, className: "flex h-fit w-96 flex-col rounded-lg border-2 border-black bg-white font-medium text-black text-sm", ...y, children: [jsxs("div", { className: "mt-4 flex h-12 w-full flex-row items-center justify-start", children: [jsx("input", { type: "text", ref: E, value: d, onChange: j, className: "ml-4", onKeyDown: (p) => {
    p.stopPropagation(), p.key === "Enter" && E.current && E.current.blur();
  } }), jsx("div", { style: { cursor: "grab" }, ...C, className: "mr-4 flex w-full justify-end", children: jsx("span", { children: ":::" }) })] }), jsx("div", { className: "my-8 flex justify-center", children: jsx(DndContext, { sensors: S, collisionDetection: closestCenter, onDragEnd: a, onDragStart: i, children: jsx(SortableContext, { items: r, strategy: verticalListSortingStrategy, children: jsx("ul", { children: r.map((p) => jsx(mt, { id: p.id, content: p.name, name: p.name, variables: p.variables }, p.id)) }) }) }) })] });
}
function bt({ id: n, content: D, name: b, position: y }) {
  const { attributes: C, listeners: K, setNodeRef: x, setActivatorNodeRef: T, transform: f, isDragging: u } = useDraggable({ id: n });
  useRef(null);
  const { contracts: V, delFunctionContract: E, updatePosition: S, functions: I } = useContext(z), { changeFunctionName: a, getFunctionName: i, changeFunctionView: e, getFunctionView: t } = useContext(z), [r, o] = useState(i(n)), [d, R] = useState(t(n)), [j, p] = useState([]), [m, g] = useState([{ id: "1", name: "Variable 1", content: "Variable 1" }, { id: "2", name: "Variable 2", content: "Variable 1" }, { id: "3", name: "Variable 3", content: "Variable 1" }]);
  useEffect(() => {
    const c = V.find((v) => v.props.id === n);
    c && (p(c.props.functions), g(j));
  }, [V, n, j]);
  const P = (c) => {
    o(c.target.value), a(n, c.target.value);
  }, h = useRef(null), w = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })), k = useRef(null), l = (c) => {
    const { active: v, over: J, delta: U } = c, N = v.rect.current.translated;
    if (N && k.current) {
      const B = k.current.getBoundingClientRect();
      if (N.left < B.left || N.right > B.right || N.top < B.top || N.bottom > B.bottom) {
        I.find(($) => $.props.id === v.id) && S(v.id.toString(), N.left, N.top), p(($) => $.filter((Z) => Z.id !== v.id)), g(($) => $.filter((Z) => Z.id !== v.id));
        return;
      }
    }
    J && (v == null ? void 0 : v.id) !== (J == null ? void 0 : J.id) && g((B) => {
      const G = B.findIndex((O) => O.id === (v == null ? void 0 : v.id)), $ = B.findIndex((O) => O.id === (J == null ? void 0 : J.id));
      return arrayMove(B, G, $);
    });
  };
  return jsxs("div", { id: n, ref: k, style: { transform: f ? `translate3d(${f.x}px, ${f.y}px, 0)` : void 0, left: `${y.x}px`, top: `${y.y}px`, position: "absolute", opacity: u ? 0.6 : 1 }, className: "flex h-fit w-80 flex-col rounded-lg border-2 border-black bg-white font-medium text-black text-sm", ...C, children: [jsxs("div", { className: "mt-2 flex h-12 w-full flex-row items-center justify-start", children: [d ? jsx(ChevronUp, { onClick: () => {
    R(false), e(n, false);
  }, className: "ml-2 w-16" }) : jsx(ChevronDown, { onClick: () => {
    R(true), e(n, true);
  }, className: "ml-2 w-16" }), jsx("input", { type: "text", ref: h, value: r, onChange: P, className: "ml-2", onKeyDown: (c) => {
    c.stopPropagation(), c.key === "Enter" && h.current && h.current.blur();
  } }), jsx("div", { style: { cursor: "grab" }, ...K, className: "mr-4 flex w-full justify-end", children: jsx("span", { children: ":::" }) })] }), d ? jsx("div", { className: "my-8 flex justify-center", children: jsx(DndContext, { sensors: w, collisionDetection: closestCenter, onDragEnd: l, children: jsx(SortableContext, { items: m, strategy: verticalListSortingStrategy, children: jsx("ul", { children: m.map((c) => jsx(ct, { id: c.id, content: c.name, name: c.name }, c.id)) }) }) }) }) : jsx("div", { className: "my-2" })] });
}
function xt({ id: n, content: D, name: b, position: y }) {
  const { attributes: C, listeners: K, setNodeRef: x, setActivatorNodeRef: T, transform: f } = useDraggable({ id: n }), u = useRef(null), { changeFunctionName: V, getFunctionName: E } = useContext(z), [S, I] = useState(E(n)), a = (i) => {
    I(i.target.value), V(n, i.target.value);
  };
  return jsxs("div", { id: n, ref: x, style: { transform: f ? `translate3d(${f.x}px, ${f.y}px, 0)` : void 0, left: `${y.x}px`, top: `${y.y}px`, position: "absolute" }, className: "absolute mb-4 flex h-12 w-64 place-items-center rounded-lg border border-black bg-white font-medium text-black text-sm", ...C, children: [jsx("input", { type: "text", ref: u, value: S, onChange: a, className: "ml-4", onKeyDown: (i) => {
    i.stopPropagation(), i.key === "Enter" && u.current && u.current.blur();
  } }), jsx("div", { style: { cursor: "grab" }, ...K, className: "mr-4 flex w-full justify-end", children: jsx("span", { children: ":::" }) })] });
}
const ht = { display: "flex" };
function vt({ children: n }) {
  const { isOver: D, setNodeRef: b } = useDroppable({ id: "droppable" });
  return jsx("div", { ref: b, style: { ...{ color: D ? "green" : void 0 }, ...ht }, children: n });
}
const yt = ["contract", "function"];
function wt({ draggable: n }) {
  if (n.content === "function") return jsx(bt, { ...n.props });
  if (n.content === "contract") return jsx(gt, { ...n.props });
  if (n.content === "variable") return jsx(xt, { ...n.props });
  throw Error("Invalid draggable");
}
const Ct = (n) => {
  if (n.content === "function") return { ...n, props: { id: n.props.id, content: n.content, name: n.content, position: n.props.position } };
  if (n.content === "contract") return { ...n, props: { id: n.props.id, content: n.content, name: n.content, position: n.props.position } };
  if (n.content === "variable") return { ...n, props: { id: n.props.id, content: n.content, name: n.content, position: n.props.position } };
  throw Error("Invalid content");
};
function Nt() {
  const { contracts: n, functions: D, addContract: b, addFunctionToContract: y, addFunction: C, getFunctionName: K, updatePosition: x } = useContext(z), [T, f] = useState([]);
  useEffect(() => {
    const e = n.map((o) => ({ content: o.content, props: { id: o.props.id, name: o.props.name, content: o.props.content, position: o.props.position, functions: o.props.functions, variables: o.props.variables } })), t = D.map((o) => ({ content: o.content, props: { id: o.props.id, name: o.props.name, content: o.props.content, position: o.props.position, variables: o.props.variables, viewInside: o.props.viewInside } })), r = [...e, ...t];
    f(r);
  }, [n, D]);
  const u = useRef(null);
  function V(e) {
    const { active: t } = e;
    T.find((r) => r.props.id === t.id);
  }
  function E(e) {
    var _a;
    const { active: t, delta: r } = e, o = T.find((g) => g.props.id === t.id);
    if (console.log(o), !o || !u.current) return;
    const d = { x: o.props.position.x + r.x, y: o.props.position.y + r.y }, R = T.filter((g) => g.content === "contract");
    if (o.content === "function") for (const g of R) {
      const P = document.getElementById(o.props.id), h = document.getElementById(g.props.id);
      if (P && h) {
        const w = P.getBoundingClientRect(), k = h.getBoundingClientRect();
        if (w.left < k.right && w.right > k.left && w.top < k.bottom && w.bottom > k.top) {
          console.log("Le DraggableFunction est au-dessus du DraggableContract."), f((c) => c.filter((v) => v.props.id !== o.props.id)), a(g.props.id, o);
          return;
        }
      }
    }
    const j = u.current.getBoundingClientRect(), m = (_a = document.getElementById(o.props.id)) == null ? void 0 : _a.getBoundingClientRect();
    if (m && d.x >= j.left && d.x + m.width <= j.right && d.y >= j.top && d.y + m.height <= j.bottom) {
      const g = { ...o, position: d };
      g.props.position = d, x(t.id.toString(), d.x, d.y), f((P) => P.map((h) => h.props.id === g.props.id ? g : h));
    } else console.log("Drag annul\xE9 : l'\xE9l\xE9ment n'est pas enti\xE8rement \xE0 l'int\xE9rieur de la zone droppable.");
  }
  const S = (e, t, r) => {
    const o = { content: "contract", props: { id: e, name: "contract", content: "contract", position: { x: t, y: r }, functions: [], variables: [] } };
    console.log("call addContract"), b(o);
  }, I = (e, t, r) => {
    C({ content: "function", props: { id: e, name: "function", content: "function", position: { x: t, y: r }, variables: [], viewInside: true } });
  }, a = (e, t) => {
    const r = { content: "function", props: { id: t.props.id, name: K(t.props.id), content: t.props.content, position: t.props.position, variables: t.props.variables, viewInside: t.props.viewInside } };
    y(e, r);
  };
  function i(e) {
    if (u.current) {
      const t = u.current.getBoundingClientRect(), r = `${e}-${Date.now()}`;
      e === "contract" ? S(r, t.left + 25, t.top + 25) : e === "function" && I(r, t.left + 25, t.top + 25);
      const o = Ct({ content: e, props: { id: r, name: e, content: e, position: { x: t.left + 25, y: t.top + 25 }, variables: [] } });
      f((d) => [...d, o]);
    }
  }
  return jsxs("div", { className: "flex w-screen flex-row", children: [jsx("div", { className: "flex w-1/6 flex-col justify-center gap-4", children: yt.map((e) => jsx(De, { className: "mx-4", onClick: () => i(e), children: e }, e)) }), jsx(DndContext, { onDragStart: V, onDragEnd: E, children: jsx("div", { ref: u, className: "mx-4 h-screen w-full justify-center border-2 border-white", children: jsx(vt, { children: T.map((e) => jsx(wt, { draggable: e }, e.props.id)) }) }) })] });
}
const St = function() {
  return jsx(ft, { children: jsx(Nt, {}) });
};

export { St as component };
//# sourceMappingURL=dnd-D__D93hM.mjs.map
