import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/app")({
	component: RouteComponent,
	beforeLoad: ({ context }) => {
		if (!context.user) {
			throw redirect({
				to: "/",
			});
		}
	},
});

function RouteComponent() {
	return <div>Hello "/_authed"!</div>;
}
