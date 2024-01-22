/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "rotate-center": {
          "0%": {
            "-webkit-transform": " rotate(0);",
            transform: "rotate(0);",
          },
          "100%": {
            "-webkit-transform": "rotate(360deg);",
            transform: "rotate(360deg);",
          },
        },
      },
      animation: {
        "rotate-center": "rotate-center 5s linear infinite",
      },
    },
  },
  plugins: [],
};
