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
        "blue-00": "var( --blue-00)",
        "blue-af": "var( --blue-af)",
        "blue-e3": "var( --blue-e3)",
        "blue-23": "var(--blue-23)",
        "blue-55": "var(--blue-55)",
        "blue-d1": "var(--blue-d1)",
        "dark-1c": "var(--dark-1c)",
        "dark-33": "var(--dark-33)",
        "gray-50": "var(--gray-50)",
        "gray-60": "var(--gray-60)",
        "gray-8b": "var(--gray-8b)",
        "gray-bdb": "var(--gray-bdb)",
        "gray-bd": "var(--gray-bd)",
        "gray-de": "var(--gray-de)",
        "gray-ee": "var(--gray-ee)",
        "gray-ef": "var(--gray-ef)",
        "gray-f0": "var(--gray-f0)",
        "gray-78": "var(--gray-78)",
        "orange-f3": "var(--orange-f3)",
        "orange-ff": "var(--orange-ff)",
        "skin-ff": "var(--skin-ff)",
        "red-fa": "var(--red-fa)",
        "red-eb": "var(--red-eb)",
        "red-ff": "var(--red-ff)",
        "green-00": "var(--green-00)",
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
