import { createFileRoute } from "@tanstack/react-router";

import Welcome from "@/features/auth/setup/welcome";

export const Route = createFileRoute("/(auth)/setup/welcome")({
  component: Welcome,
});
