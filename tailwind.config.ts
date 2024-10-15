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
        primary: {
          DEFAULT: "var(--primary)",
        },
        text: {
          DEFAULT: "var(--gray-8b)",
        },
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
