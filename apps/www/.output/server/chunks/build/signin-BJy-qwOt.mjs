import { jsx, jsxs } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { D as De } from './button-U5Omqg_X.mjs';
import { y, R, x, C as C$1, g, v, E } from './form-YLSo8OmR.mjs';
import { p } from './input-i05uZG0N.mjs';
import { w } from './password-input-CkSUh9RZ.mjs';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as C from 'zod';
import { i } from './auth-client-CfR_Uf3d.mjs';
import 'react';
import './index-DXPxg-Qg.mjs';
import 'react-dom';
import 'lucide-react';
import 'better-auth/client/plugins';
import 'better-auth/react';

const N = C.object({ email: C.string(), password: C.string() }), G = function() {
  const t = useForm({ resolver: zodResolver(N) });
  async function f(o) {
    try {
      const { error: s } = await i.signIn.email(o);
      s ? toast.error(s.message) : toast.success("Signed in successfully. You will be redirected shortly.");
    } catch {
      toast.error("Failed to submit the form. Please try again.");
    }
  }
  return jsx("div", { className: "flex justify-center items-center h-dvh", children: jsxs("div", { className: "w-[30rem] border p-4 rounded-lg space-y-6", children: [jsxs("div", { className: "space-y-2", children: [jsx("h1", { className: "font-bold", children: "Sign In" }), jsx("p", { className: "text-muted-foreground", children: "Access to smartflow with your account credentials" })] }), jsx(y, { ...t, children: jsxs("form", { onSubmit: t.handleSubmit(f), className: "space-y-2 w-full", children: [jsx(R, { control: t.control, name: "email", render: ({ field: o }) => jsxs(x, { children: [jsx(C$1, { children: "Email" }), jsx(g, { children: jsx(p, { placeholder: "alex@smart-flow.site", type: "email", ...o }) }), jsx(v, { children: "Communication & authentification email." }), jsx(E, {})] }) }), jsx(R, { control: t.control, name: "password", render: ({ field: o }) => jsxs(x, { children: [jsxs("div", { className: "flex justify-between items-center", children: [jsx(C$1, { children: "Password" }), jsx(Link, { className: "text-sm font-medium leading-none text-blue-600", to: "/forgot-password", children: "Forgot password ?" })] }), jsx(g, { children: jsx(w, { placeholder: "Placeholder", ...o }) }), jsx(v, { children: "Enter your password." }), jsx(E, {})] }) }), jsx(De, { className: "w-full", type: "submit", children: "Submit" })] }) })] }) });
};

export { G as component };
//# sourceMappingURL=signin-BJy-qwOt.mjs.map
