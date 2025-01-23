import { jsxs, jsx } from 'react/jsx-runtime';
import { D as De } from './button-U5Omqg_X.mjs';
import { Link, Outlet } from '@tanstack/react-router';
import 'react';

const h = function() {
  return jsxs("div", { className: "bg-slate-50 min-h-dvh", children: [jsxs("div", { className: "pb-1 w-full px-4 flex items-center border-b bg-background", children: [jsx(De, { variant: "ghost", className: "font-normal", children: jsx(Link, { to: "/dashboard", children: "Overview" }) }), jsx(De, { variant: "ghost", className: "font-normal", children: jsx(Link, { to: "/logs", children: "Logs" }) }), jsx(De, { variant: "ghost", className: "font-normal", children: jsx(Link, { to: "/usage", children: "Usage" }) }), jsx(De, { variant: "ghost", className: "font-normal", children: jsx(Link, { to: "/observability", children: "Observability" }) }), jsx(De, { variant: "ghost", className: "font-normal", children: jsx(Link, { to: "/support", children: "Support" }) }), jsx(De, { variant: "ghost", className: "font-normal", children: jsx(Link, { to: "/settings", children: "Settings" }) })] }), jsx(Outlet, {})] });
};

export { h as component };
//# sourceMappingURL=_dashboard-Bw6Pgr49.mjs.map
