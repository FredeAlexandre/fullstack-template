import { createFileRoute, redirect } from "@tanstack/react-router";
import SignIn from "@/features/auth/sign-in";
import { fetchAdminsAmount } from "@/lib/server-actions/users";

export const Route = createFileRoute("/(auth)/sign-in")({
  beforeLoad: async ({ context, location }) => {
    const admins_amount = await fetchAdminsAmount();
    if (admins_amount === 0) {
      throw redirect({
        to: "/setup/welcome",
      });
    }
  },
  component: SignIn,
});
