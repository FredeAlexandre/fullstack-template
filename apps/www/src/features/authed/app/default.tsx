import { Button } from "@acme/ui/button";
import { authClient } from "~/lib/auth-client";

export default function App() {
	return (
		<div className="flex items-center justify-center">
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
