/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/data/**/*.{json,yml,yaml}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        card: "0px 2px 4px rgb(0 0 0 / 0.13)",
        "card-hover":
          "0px 2px 4px rgb(0 0 0 / 0.13), 3px 8px 18px rgb(0 0 0 / 0.1)",
      },
      spacing: {
        7.5: "1.875rem",
        19: "4.75rem",
      },
      colors: {
        gray: {
          90: "#F6F7F9",
          100: "#F4F4F4",
          400: "#686868",
          500: "#626262",
          900: "#111111",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
