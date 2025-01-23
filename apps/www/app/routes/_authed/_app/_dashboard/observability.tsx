import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/_app/_dashboard/observability")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_authed/_app/_dashboard/observasibility"!</div>;
}
