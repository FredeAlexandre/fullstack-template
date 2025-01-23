import { createFileRoute, redirect } from "@tanstack/react-router";
import { isFirstLaunch } from "~/utils/queries/auth";

export const Route = createFileRoute("/first-launch")({
  component: RouteComponent,
  beforeLoad: async () => {
    if (!(await isFirstLaunch())) {
      throw redirect({ to: "/" });
    }
  },
});

// !TODO Create an first admin user form
function RouteComponent() {
  return <div>Hello "/first-launch"!</div>;
}
