import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "var(--orange)",
      },
      fontFamily: {
        monigue: ["var(--font-monigue)"],
        geistMono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
