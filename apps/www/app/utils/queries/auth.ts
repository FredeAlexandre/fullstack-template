import { createServerFn } from "@tanstack/start";
import { getWebRequest } from "vinxi/http";
import { auth } from "~/utils/auth";

export const fetchUser = createServerFn({ method: "GET" }).handler(async () => {
  const request = getWebRequest();

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  return session;
});
