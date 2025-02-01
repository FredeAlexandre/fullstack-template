import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ["app/ssr.tsx", "app/routeTree.gen.ts", "app/router.tsx", "app/client.tsx", "app.config.ts"],
  project: ["app/**/**.ts", "app/**/*.tsx"],
  ignore: ['app/components/ui/**', 'app/routeTree.gen.ts']
};

export default config;