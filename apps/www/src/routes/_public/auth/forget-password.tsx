import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/auth/forget-password")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_public/auth/forget-password"!</div>;
}
