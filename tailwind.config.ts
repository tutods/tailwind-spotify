import { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#2EBD59",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
