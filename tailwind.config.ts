import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        hotbot: {
          primary: "#ff7eb3",    // Pink
          secondary: "#ff758c",  // Light Pink
          accent: "#FFD700",     // Gold
          dark: "#333333",
          light: "#FFFFFF"
        }
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #ff7eb3, #ff758c)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;