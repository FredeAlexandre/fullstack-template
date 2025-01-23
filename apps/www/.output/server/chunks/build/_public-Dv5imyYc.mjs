import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { D as De } from './button-U5Omqg_X.mjs';
import { q as qn, _ as _t } from '../nitro/nitro.mjs';
import { Link, Outlet } from '@tanstack/react-router';
import { ExternalLinkIcon, LaptopIcon, SunIcon, MoonIcon } from 'lucide-react';
import 'react';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:async_hooks';
import 'fs';
import 'path';
import 'os';
import 'crypto';
import 'drizzle-orm/node-postgres';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import 'better-auth/plugins';
import 'drizzle-orm/pg-core';
import 'drizzle-orm';
import 'drizzle-orm/mysql-core';
import 'drizzle-orm/sqlite-core';
import 'zod';
import '@tanstack/react-query';
import 'react-dom/server';
import '@tanstack/react-router-with-query';
import '@tanstack/router-devtools';
import 'sonner';
import 'usehooks-ts';

const H = function() {
  const { theme: s, setTheme: o } = qn(), { user: l } = _t.useRouteContext();
  return jsxs(Fragment, { children: [jsx("div", { className: "h-16 bg-background border-b w-full fixed flex items-center", children: jsxs("div", { className: "flex justify-between items-center mx-auto container", children: [jsxs("div", { className: "flex items-center gap-6", children: [jsx(Link, { to: "/", children: jsx("img", { className: "size-10", src: "/favicon.svg", alt: "smartflow logo" }) }), jsxs("div", { className: "flex items-center gap-4 text-sm font-medium leading-none text-muted-foreground", children: [jsx(Link, { to: ".", children: "Products" }), jsx(Link, { to: ".", children: "Solutions" }), jsx(Link, { to: ".", children: "Ressources" }), jsx(Link, { to: ".", children: "Entreprise" }), jsx(Link, { to: ".", children: "Pricing" }), jsxs("a", { className: "flex items-center gap-1", target: "_blank", href: "http://localhost:3001", children: ["Docs ", jsx(ExternalLinkIcon, { className: "size-4" })] })] })] }), jsx("div", { className: "flex items-center justify-end gap-2", children: l ? jsx(De, { size: "sm", asChild: true, children: jsx(Link, { to: "/dashboard", children: "Dashboard" }) }) : jsxs(Fragment, { children: [jsx(De, { size: "sm", variant: "outline", asChild: true, children: jsx(Link, { to: "/signin", children: "Sign In" }) }), jsx(De, { size: "sm", asChild: true, children: jsx(Link, { to: "/signup", children: "Sign Up" }) })] }) })] }) }), jsx("div", { className: "h-16" }), jsx("div", { className: "min-h-dvh", children: jsx(Outlet, {}) }), jsxs("div", { className: "border-t p-10 flex justify-between items-center", children: [jsx("div", { children: "Smartflow all right reserved 2025" }), jsxs("div", { className: "flex gap-1 rounded-full bg-secondary p-1", children: [jsx(De, { variant: s === "system" ? "default" : "ghost", className: "rounded-full size-7", onClick: () => o("system"), children: jsx(LaptopIcon, { className: "size-2" }) }), jsx(De, { variant: s === "light" ? "default" : "ghost", className: "rounded-full size-7", onClick: () => o("light"), children: jsx(SunIcon, { className: "size-2" }) }), jsx(De, { variant: s === "dark" ? "default" : "ghost", className: "rounded-full size-7", onClick: () => o("dark"), children: jsx(MoonIcon, { className: "size-2" }) })] })] })] });
};

export { H as component };
//# sourceMappingURL=_public-Dv5imyYc.mjs.map
