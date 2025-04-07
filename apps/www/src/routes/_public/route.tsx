import { createFileRoute } from "@tanstack/react-router";
import PublicLayout from "~/features/public/layout/default";

export const Route = createFileRoute("/_public")({
	component: PublicLayout,
});
