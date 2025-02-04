import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  workspaces: {
    "apps/docs": {
      entry: ["theme.config.jsx", "next.config.mjs"],
      project: ["app/**/*.ts", "app/**/*.tsx"],
      ignore: ['app/components/ui/**', 'app/routeTree.gen.ts']
    },
    "apps/admin": {
      entry: ["app/ssr.tsx", "app/router.tsx", "app/client.tsx", "app.config.ts"],
      project: ["app/**/*.ts", "app/**/*.tsx"],
      ignore: ['app/components/ui/**', 'app/routeTree.gen.ts'],
    },
    "apps/www": {
      entry: ["app/api.ts", "app/ssr.tsx", "app/router.tsx", "app/client.tsx", "app.config.ts"],
      project: ["pages/**/*.jsx", "pages/**/*.mdx"]
    }
  }
};

export default config;