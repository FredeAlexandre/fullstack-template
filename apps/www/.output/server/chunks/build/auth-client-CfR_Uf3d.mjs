import { adminClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

const i = createAuthClient({ baseURL: "http://localhost:3000", plugins: [adminClient()] });

export { i };
//# sourceMappingURL=auth-client-CfR_Uf3d.mjs.map
