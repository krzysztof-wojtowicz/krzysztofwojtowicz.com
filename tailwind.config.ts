import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E1F22",
        primary: "#CE8E6D",
        secondary: "#7A7E85",
        accent: "#4B5059",
        text: "#D9DBDF",
      },
    },
  },
  plugins: [],
} satisfies Config;
