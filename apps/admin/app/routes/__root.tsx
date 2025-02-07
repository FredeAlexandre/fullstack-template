import { ReactNode } from "react";
import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import appCss from "@/styles/app.css?url";
import { Meta, Scripts } from "@tanstack/start";
import { FontProvider } from "@/context/font-context";
import { ThemeProvider } from "@/context/theme-context";
import { Toaster } from "@/components/ui/toaster";
import GeneralError from "@/features/errors/general-error";
import NotFoundError from "@/features/errors/not-found-error";

import { fetchUser } from "@/lib/server-actions/auth";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Admin dashboard",
      },
      { name: "description", content: "The admin dashboard of acme" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  beforeLoad: async () => {
    const user = await fetchUser();

    return {
      user,
    };
  },
  component: RootComponent,
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
});

function RootComponent() {
  return (
    <RootDocument>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <FontProvider>
          <Outlet />
        </FontProvider>
      </ThemeProvider>
      <Toaster />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
