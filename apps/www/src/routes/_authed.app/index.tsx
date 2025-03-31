import { createFileRoute } from "@tanstack/react-router";
import App from "~/features/authed/app/default";

export const Route = createFileRoute("/_authed/app/")({
	component: App,
});
