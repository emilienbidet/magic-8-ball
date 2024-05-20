import type { Config } from "tailwindcss";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
        zoom: "zoom 0.5s cubic-bezier(0.4, 0, 0.2, 1) both",
        "shake-n-zoom":
          "shake 0.82s cubic-bezier(.36,.07,.19,.97) both, zoom 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.82s both",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
        zoom: {
          "0%": {
            transform: "scale(1)",
          },
          "80%": {
            transform: "scale(2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
