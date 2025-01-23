import { createFileRoute, redirect } from "@tanstack/react-router";
import { isFirstLaunch } from "~/utils/queries/auth";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  beforeLoad: async () => {
    if (await isFirstLaunch()) {
      throw redirect({ to: "/first-launch" });
    }
  },
});

function RouteComponent() {
  return <div>Hello "/"!</div>;
}
