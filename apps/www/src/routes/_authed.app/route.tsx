import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/app")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_authed"!</div>;
}
