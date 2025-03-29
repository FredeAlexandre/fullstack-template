import { createFileRoute } from "@tanstack/react-router";

import SignInPage from "~/features/auth/sign-in/default";

export const Route = createFileRoute("/auth/sign-in")({
	component: SignInPage,
});
