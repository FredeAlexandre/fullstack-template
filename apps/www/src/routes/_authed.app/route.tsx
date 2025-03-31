import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/app")({
	component: Outlet,
	beforeLoad: ({ context }) => {
		const user = context.user;
		if (!user) {
			throw redirect({
				to: "/",
			});
		}

		return { ...context, user };
	},
});
