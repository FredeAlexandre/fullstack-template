import type { KnipConfig } from "knip"

export default {
  workspaces: {
    "apps/*": {
      "entry": ["app/*.ts", "app/*.tsx", "app.config.ts", "eslint.config.js"],
      ignoreDependencies: ["postcss", "tailwindcss", "tailwindcss-animate"]
    },
    "packages/*": {
      "entry": ["eslint.config.js"],
    }
  }
} satisfies KnipConfig
