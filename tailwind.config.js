/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      colorbg1: "#7dd4fc88",
      colorbg2: "#0ea4e9ab",
      colorGreyLight: "#f7f7f7",
      colorSelectLight: "#2bc7ee",
      colorTextB: "#1e1b4b",
      colorTertiaryLight: "#2998ff",
      colorTertiaryDark: "#5643fa",
      colorGreyDark: "#777",
    },
    animation: {
      "spin-slow": "spin 8s linear infinite",
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        sofia: ["Sofia", "cursive"],
        satisfy: ["Satisfy", "cursive"],
        sacramento: ["Sacramento", "cursive"],
      },
    },
  },
  plugins: [],
};
