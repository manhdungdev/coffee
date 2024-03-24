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
    },
  },
  plugins: [],
};
