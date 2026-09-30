import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F0",
        forest: "#0F5132",
        "forest-hover": "#0A3D24",
        terracotta: "#DC5F3A",
        ink: "#1A1A1A",
        muted: "#7A7269",
        line: "#E8E1D3",
      },
      fontFamily: {
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ['"Geist"', '"Inter"', "system-ui", "sans-serif"],
        hindi: ['"Noto Sans Devanagari"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
