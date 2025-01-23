import { jsx, jsxs } from 'react/jsx-runtime';
import { zodResolver } from '@hookform/resolvers/zod';
import { D as De } from './button-U5Omqg_X.mjs';
import { y, R, x, C as C$1, g as g$1, v, E } from './form-YLSo8OmR.mjs';
import { p } from './input-i05uZG0N.mjs';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as C from 'zod';
import { i } from './auth-client-CfR_Uf3d.mjs';
import 'react';
import './index-DXPxg-Qg.mjs';
import 'react-dom';
import 'better-auth/client/plugins';
import 'better-auth/react';

const g = C.object({ email: C.string() }), L = function() {
  const s = useForm({ resolver: zodResolver(g) });
  async function i$1(t) {
    try {
      const { error: e } = await i.forgetPassword({ email: t.email, redirectTo: "/reset-password" });
      e ? toast.error(e.message) : toast.success("Email sent successfully. Check your email to reset your password.");
    } catch (e) {
      console.error("Form submission error", e), toast.error("Failed to submit the form. Please try again.");
    }
  }
  return jsx("div", { className: "flex justify-center items-center h-dvh", children: jsxs("div", { className: "w-[30rem] border p-4 rounded-lg space-y-6", children: [jsxs("div", { className: "space-y-2", children: [jsx("h1", { className: "font-bold", children: "Forgot Passowrd" }), jsx("p", { className: "text-muted-foreground", children: "Send an email to reset your password" })] }), jsx(y, { ...s, children: jsxs("form", { onSubmit: s.handleSubmit(i$1), className: "w-full space-y-2", children: [jsx(R, { control: s.control, name: "email", render: ({ field: t }) => jsxs(x, { children: [jsx(C$1, { children: "Email" }), jsx(g$1, { children: jsx(p, { placeholder: "alex@smart-flow.site", type: "email", ...t }) }), jsx(v, { children: "Communication & authentification email." }), jsx(E, {})] }) }), jsx(De, { className: "w-full", type: "submit", children: "Submit" })] }) })] }) });
};

export { L as component };
//# sourceMappingURL=forgot-password-BT0TNKnY.mjs.map
