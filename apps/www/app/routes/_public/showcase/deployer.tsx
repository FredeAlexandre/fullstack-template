import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/showcase/deployer")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_public/showcase/deployer"!</div>;
}
