import { Q as Qe, s as se } from './button-U5Omqg_X.mjs';
import * as c$1 from 'react';
import { FormProvider, Controller, useFormContext } from 'react-hook-form';
import { c as c$2 } from './input-i05uZG0N.mjs';

const y = FormProvider, c = c$1.createContext({}), R = ({ ...t }) => c$1.createElement(c.Provider, { value: { name: t.name } }, c$1.createElement(Controller, { ...t })), i = () => {
  const t = c$1.useContext(c), o = c$1.useContext(l), { getFieldState: r, formState: m } = useFormContext(), s = r(t.name, m);
  if (!t) throw new Error("useFormField should be used within <FormField>");
  const { id: a } = o;
  return { id: a, name: t.name, formItemId: `${a}-form-item`, formDescriptionId: `${a}-form-item-description`, formMessageId: `${a}-form-item-message`, ...s };
}, l = c$1.createContext({}), x = c$1.forwardRef(({ className: t, ...o }, r) => {
  const m = c$1.useId();
  return c$1.createElement(l.Provider, { value: { id: m } }, c$1.createElement("div", { ref: r, className: Qe("space-y-2", t), ...o }));
});
x.displayName = "FormItem";
const C = c$1.forwardRef(({ className: t, ...o }, r) => {
  const { error: m, formItemId: s } = i();
  return c$1.createElement(c$2, { ref: r, className: Qe(m && "text-destructive", t), htmlFor: s, ...o });
});
C.displayName = "FormLabel";
const g = c$1.forwardRef(({ ...t }, o) => {
  const { error: r, formItemId: m, formDescriptionId: s, formMessageId: a } = i();
  return c$1.createElement(se, { ref: o, id: m, "aria-describedby": r ? `${s} ${a}` : `${s}`, "aria-invalid": !!r, ...t });
});
g.displayName = "FormControl";
const v = c$1.forwardRef(({ className: t, ...o }, r) => {
  const { formDescriptionId: m } = i();
  return c$1.createElement("p", { ref: r, id: m, className: Qe("text-[0.8rem] text-muted-foreground", t), ...o });
});
v.displayName = "FormDescription";
const E = c$1.forwardRef(({ className: t, children: o, ...r }, m) => {
  const { error: s, formMessageId: a } = i(), d = s ? String(s == null ? void 0 : s.message) : o;
  return d ? c$1.createElement("p", { ref: m, id: a, className: Qe("text-[0.8rem] font-medium text-destructive", t), ...r }, d) : null;
});
E.displayName = "FormMessage";

export { C, E, R, g, v, x, y };
//# sourceMappingURL=form-YLSo8OmR.mjs.map
