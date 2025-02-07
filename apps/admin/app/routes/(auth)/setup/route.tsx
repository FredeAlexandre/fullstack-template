import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { fetchAdminsAmount } from "@/lib/server-actions/users";

export const Route = createFileRoute("/(auth)/setup")({
  beforeLoad: async ({ context, location }) => {
    const admins_amount = await fetchAdminsAmount();
    if (admins_amount !== 0) {
      throw redirect({
        to: "/sign-in",
      });
    }
  },
  component: Outlet,
});
