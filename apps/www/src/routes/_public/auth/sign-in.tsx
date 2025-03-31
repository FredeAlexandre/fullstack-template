import { createFileRoute } from "@tanstack/react-router";

import SignInPage from "~/features/public/auth/sign-in/default";

export const Route = createFileRoute("/_public/auth/sign-in")({
	component: SignInPage,
});
