import { Button } from "@acme/ui/button";
import { useRouteContext } from "@tanstack/react-router";
import { authClient } from "~/lib/auth-client";

export default function App() {
	const {
		user: { user },
	} = useRouteContext({ from: "/_authed/app/" });

	return (
		<div className="flex flex-col items-center justify-center">
			<div>Name: {user.name}</div>
			<div>Email: {user.email}</div>
			<div>
				Email Verified: {user.emailVerified ? "verified" : "not verified"}
			</div>
			<div>Username: {user.username}</div>
			<Button
				onClick={async () => {
					await authClient.signOut();
				}}
			>
				Logout
			</Button>
		</div>
	);
}
