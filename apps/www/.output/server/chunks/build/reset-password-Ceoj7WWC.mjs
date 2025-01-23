import { jsx, jsxs } from 'react/jsx-runtime';
import { zodResolver } from '@hookform/resolvers/zod';
import { D as De } from './button-U5Omqg_X.mjs';
import { y, R, x, C as C$1, g as g$1, v, E } from './form-YLSo8OmR.mjs';
import { w } from './password-input-CkSUh9RZ.mjs';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as C from 'zod';
import { i } from './auth-client-CfR_Uf3d.mjs';
import 'react';
import './input-i05uZG0N.mjs';
import './index-DXPxg-Qg.mjs';
import 'react-dom';
import 'lucide-react';
import 'better-auth/client/plugins';
import 'better-auth/react';

const g = C.object({ password: C.string().min(8).max(255) }), k = function() {
  const s = useForm({ resolver: zodResolver(g) });
  async function i$1(t) {
    try {
      const { error: o } = await i.resetPassword({ newPassword: t.password });
      o ? toast.error(o.message) : toast.success("Your password has been reseted. Redirecting you to sign in page.");
    } catch (o) {
      console.error("Form submission error", o), toast.error("Failed to submit the form. Please try again.");
    }
  }
  return jsx("div", { className: "flex justify-center items-center h-dvh", children: jsxs("div", { className: "w-[30rem] border p-4 rounded-lg space-y-6", children: [jsxs("div", { className: "space-y-2", children: [jsx("h1", { className: "font-bold", children: "Reset Passowrd" }), jsx("p", { className: "text-muted-foreground", children: "Put your new password here" })] }), jsx(y, { ...s, children: jsxs("form", { onSubmit: s.handleSubmit(i$1), className: "w-full space-y-2", children: [jsx(R, { control: s.control, name: "password", render: ({ field: t }) => jsxs(x, { children: [jsx(C$1, { children: "Password" }), jsx(g$1, { children: jsx(w, { placeholder: "Placeholder", ...t }) }), jsx(v, { children: "Enter a password." }), jsx(E, {})] }) }), jsx(De, { className: "w-full", type: "submit", children: "Submit" })] }) })] }) });
};

export { k as component };
//# sourceMappingURL=reset-password-Ceoj7WWC.mjs.map
