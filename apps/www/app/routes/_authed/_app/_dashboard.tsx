import { Button } from "@acme/ui/button";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/_app/_dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div className="bg-slate-50 min-h-dvh">
      <div className="pb-1 w-full px-4 flex items-center border-b bg-background">
        <Button variant="ghost" className="font-normal">
          <Link to="/dashboard">Overview</Link>
        </Button>
        <Button variant="ghost" className="font-normal">
          <Link to="/logs">Logs</Link>
        </Button>
        <Button variant="ghost" className="font-normal">
          <Link to="/usage">Usage</Link>
        </Button>
        <Button variant="ghost" className="font-normal">
          <Link to="/observability">Observability</Link>
        </Button>
        <Button variant="ghost" className="font-normal">
          <Link to="/support">Support</Link>
        </Button>
        <Button variant="ghost" className="font-normal">
          <Link to="/settings">Settings</Link>
        </Button>
      </div>
      <Outlet />
    </div>
  );
}
