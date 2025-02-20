import type { KnipConfig } from "knip"

export default {
  workspaces: {
    "apps/*": {
      "entry": ["app/*.ts", "app/*.tsx", "app.config.ts"],
      ignoreDependencies: ["postcss", "tailwindcss", "tailwindcss-animate"]
    }
  }
} satisfies KnipConfig
