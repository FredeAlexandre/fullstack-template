import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/_auth")({
  component: Outlet,
  beforeLoad: ({ context }) => {
    if (context.user) {
      throw redirect({
        to: "/",
      });
    }
  },
});
