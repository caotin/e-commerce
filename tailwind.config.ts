import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "blue-e3": "var( --blue-e3)",
        "blue-55": "var(--blue-55)",
        "blue-d1": "var(--blue-d1)",
        "dark-1c": "var(--dark-1c)",
        "gray-50": "var(--gray-50)",
        "gray-60": "var(--gray-60)",
        "gray-8b": "var(--gray-8b)",
        "gray-de": "var(--gray-de)",
        "gray-ef": "var(--gray-ef)",
        "orange-f3": "var(--orange-f3)",
        "red-eb": "var(--red-eb)",
        "red-ff": "var(--red-ff)",
      },
      dropShadow: {
        "logo-shadow": "5px 0 0 rgba(13, 110, 253, 20%)",
      },
      fontSize: {
        "29": " 1.81rem",
      },
    },
  },
  plugins: [],
};
export default config;
