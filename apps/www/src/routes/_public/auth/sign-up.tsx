import { createFileRoute } from "@tanstack/react-router";

import SignUpPage from "~/features/public/auth/sign-up/default";

export const Route = createFileRoute("/_public/auth/sign-up")({
	component: SignUpPage,
});
