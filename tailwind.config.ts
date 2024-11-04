import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hotbot: {
          primary: "#FF1493",    // Hot Pink
          secondary: "#00CCFF",  // Electric Blue
          accent: "#FFD700",     // Gold
          dark: "#333333",
          light: "#FFFFFF"
        }
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 20, 147, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 20, 147, 0.8)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;