import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/app")({
	component: Outlet,
	beforeLoad: ({ context }) => {
		if (!context.user) {
			throw redirect({
				to: "/",
			});
		}
	},
});
