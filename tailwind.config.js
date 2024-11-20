/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      colorbg1: "#7dd4fc88",
      colorbg2: "#0ea4e994",
      colorGreyLight: "#f7f7f7",
      // colorSelectLight: "#2bc7ee",
      colorSelectLight: "#3ab8de",
      // colorTextB: "#1e1b4b",
      colorTextB: "#0b0566",
      colorTertiaryLight: "#2998ff",
      colorTertiaryDark: "#5643fa",
      colorGreyDark: "#777",
    },
    animation: {
      "spin-slow": "spin 10s linear infinite",
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        sofia: ["Sofia", "cursive"],
        satisfy: ["Satisfy", "cursive"],
        sacramento: ["Sacramento", "cursive"],
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
