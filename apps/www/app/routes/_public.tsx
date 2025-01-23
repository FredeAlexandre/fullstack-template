import { Button } from "@acme/ui/button";
import { useTheme } from "@acme/ui/theme";
import { Link } from "@tanstack/react-router";
import { Outlet, createFileRoute } from "@tanstack/react-router";

import { ExternalLinkIcon, LaptopIcon, MoonIcon, SunIcon } from "lucide-react";

export const Route = createFileRoute("/_public")({
  component: RouteComponent,
});

// !TODO Add shadcn navigation menu for navbar https://ui.shadcn.com/docs/components/navigation-menu
function RouteComponent() {
  const { theme, setTheme } = useTheme();

  const { user } = Route.useRouteContext();

  return (
    <>
      <div className="h-16 bg-background border-b w-full fixed flex items-center">
        <div className="flex justify-between items-center mx-auto container">
          <div className="flex items-center gap-6">
            <Link to="/">
              <img
                className="size-10"
                src="/favicon.svg"
                alt="smartflow logo"
              />
            </Link>
            <div className="flex items-center gap-4 text-sm font-medium leading-none text-muted-foreground">
              <Link to=".">Products</Link>
              <Link to=".">Solutions</Link>
              <Link to=".">Ressources</Link>
              <Link to=".">Entreprise</Link>
              <Link to=".">Pricing</Link>
              <a className="flex items-center gap-1" target="_blank" href={import.meta.env.VITE_DOCS_URL}>Docs <ExternalLinkIcon className="size-4" /></a>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2">
            {user ? (
              <Button size="sm" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/signin">Sign In</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="h-16" />
      <div className="min-h-dvh">
        <Outlet />
      </div>
      <div className="border-t p-10 flex justify-between items-center">
        <div>Smartflow all right reserved 2025</div>
        <div className="flex gap-1 rounded-full bg-secondary p-1">
          <Button
            variant={theme === "system" ? "default" : "ghost"}
            className="rounded-full size-7"
            onClick={() => setTheme("system")}
          >
            <LaptopIcon className="size-2" />
          </Button>
          <Button
            variant={theme === "light" ? "default" : "ghost"}
            className="rounded-full size-7"
            onClick={() => setTheme("light")}
          >
            <SunIcon className="size-2" />
          </Button>
          <Button
            variant={theme === "dark" ? "default" : "ghost"}
            className="rounded-full size-7"
            onClick={() => setTheme("dark")}
          >
            <MoonIcon className="size-2" />
          </Button>
        </div>
      </div>
    </>
  );
}
