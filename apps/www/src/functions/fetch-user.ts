import { createServerFn } from "@tanstack/react-start";
import { getWebRequest } from "vinxi/http";
import { auth } from "~/lib/auth";

export const fetchUser = createServerFn({ method: "GET" }).handler(async () => {
	const request = getWebRequest();

	const session = await auth.api.getSession({
		headers: request.headers,
	});

	return session;
});
