import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { incrementVisitsFn } from "~/functions/visits";
import { cn } from "~/lib/utils";
import { visitsQueryOptions } from "~/queries/visits";

export const Route = createFileRoute("/")({
	component: Home,
	loader: async ({ context: { queryClient } }) =>
		queryClient.ensureQueryData(visitsQueryOptions),
});

function Home() {
	const router = useRouter();
	const visitsQuery = useSuspenseQuery(visitsQueryOptions);
	const visits = visitsQuery.data;

	const { mutate } = useMutation({
		mutationFn: () => incrementVisitsFn(),
		onSuccess: () => {
			return router.invalidate();
		},
	});

	useEffect(() => {
		const id = setTimeout(() => {
			mutate();
		}, 1000);

		return () => clearTimeout(id);
	}, [mutate]);

	return <div className={cn("p-2")}>Visits: {visits}</div>;
}
