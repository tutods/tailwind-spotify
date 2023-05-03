import { Config } from "tailwindcss";

import { colors } from "./theme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
} satisfies Config;
