import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/auth/email-verified")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_public/auth/email-verified"!</div>;
}
