import type { KnipConfig } from "knip";

export default {
	workspaces: {
		"apps/*": {
			entry: [
				"src/*.ts",
				"src/*.tsx",
				"src/routes/api/**/*.ts",
				"app.config.ts",
			],
			ignoreDependencies: [
				"postcss",
				"tailwindcss",
				"tailwindcss-animate",
				"tw-animate-css",
				"@vitejs/plugin-react",
			],
		},
		"packages/db": {
			entry: ["src/*.ts", "seeds/*.ts"],
		},
	},
} satisfies KnipConfig;
