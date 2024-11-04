import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        hotbot: {
          pink: "#FF5B93",     // Bright pink
          purple: "#A45DBF",   // Royal purple
          red: "#D50032",      // Deep red
          gold: "#FFD700",     // Bright gold
          coral: "#FF6F61",    // Bright coral
          teal: "#1DB2A6",     // Bright teal
          yellow: "#FFF700",   // Lemon yellow
        }
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        'gradient-hotbot': 'linear-gradient(to right, #FF5B93, #A45DBF)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'android': '0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;