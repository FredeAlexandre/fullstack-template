import * as c$1 from 'react';
import { v } from './index-DXPxg-Qg.mjs';
import { jsx } from 'react/jsx-runtime';
import { Q as Qe, y as ye } from './button-U5Omqg_X.mjs';

var m = "Label", i = c$1.forwardRef((t, r) => jsx(v.label, { ...t, ref: r, onMouseDown: (e) => {
  var _a;
  e.target.closest("button, input, select, textarea") || ((_a = t.onMouseDown) == null ? void 0 : _a.call(t, e), !e.defaultPrevented && e.detail > 1 && e.preventDefault());
} }));
i.displayName = m;
var l = i;
const u = ye("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), c = c$1.forwardRef(({ className: t, ...r }, e) => c$1.createElement(l, { ref: e, className: Qe(u(), t), ...r }));
c.displayName = l.displayName;
const p = c$1.forwardRef(({ className: t, type: r, ...e }, o) => c$1.createElement("input", { type: r, className: Qe("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t), ref: o, ...e }));
p.displayName = "Input";

export { c, p };
//# sourceMappingURL=input-i05uZG0N.mjs.map
