import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/_app/_dashboard/logs")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_authed/_app/_dashboard/logs"!</div>;
}
