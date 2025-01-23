import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Meta, Scripts } from "@tanstack/start";
import type * as React from "react";
import { DefaultCatchBoundary } from "~/components/default-catch-boundary";
import { DefaultNotFound } from "~/components/default-not-found";
// @ts-ignore
import appCss from "~/styles/app.css?url";
import { seo } from "~/utils/seo";

import { Toaster } from "@acme/ui/sonner";
import { ThemeProvider } from "@acme/ui/theme";
import type { QueryClient } from "@tanstack/react-query";

import { fetchUser } from "~/utils/queries/auth";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        ...seo({
          title:
            "Smartflow - The modern way to write and deploy smart contracts",
          description:
            "Smartflow is a low code drag and drop platform to write and deploy smart contracts",
        }),
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
    errorComponent: (props) => {
      return (
        <RootDocument>
          <DefaultCatchBoundary {...props} />
        </RootDocument>
      );
    },
    notFoundComponent: () => <DefaultNotFound />,
    component: RootComponent,
  },
);

function RootComponent() {
  return (
    <RootDocument>
      <ThemeProvider>
        <Outlet />
        <Toaster />
      </ThemeProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
