import {
	adminClient,
	apiKeyClient,
	multiSessionClient,
	oidcClient,
	organizationClient,
	passkeyClient,
	twoFactorClient,
	usernameClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	plugins: [
		twoFactorClient(),
		usernameClient(),
		passkeyClient(),
		adminClient(),
		apiKeyClient(),
		organizationClient(),
		oidcClient(),
		multiSessionClient(),
	],
});
