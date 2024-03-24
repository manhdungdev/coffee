/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-coffee": "#c89f94",
      },
      transitionDuration: {
        250: "250ms",
      },
      keyframes: {
        dropDown: {
          "0%": { translate: "0 -50%" },
          "100%": { translate: "0" },
        },
      },
      animation: {
        dropDown: "dropDown 0.2s linear",
      },
    },
  },
  plugins: [],
};
