import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import baseConfig from "@acme/tailwind-config/web";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "../../packages/ui/src/*.{ts,tsx}"],
  presets: [baseConfig],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
    },
  },
} satisfies Config;
