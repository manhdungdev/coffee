/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          100: "#a25f4b33",
          200: "#be8f81",
          300: "#c89f94",
          400: "#a25f4b",
          500: "#743f2f",
        },
      },
      transitionDuration: {
        250: "250ms",
      },
      keyframes: {
        dropDown: {
          "0%": { translate: "0 -50%" },
          "100%": { translate: "0" },
        },
        slideUp: {
          "0%": { translate: "0 8px", opacity: 0 },
          "100%": { translate: "0", opacity: 1 },
        },
      },
      animation: {
        dropDown: "dropDown 0.2s linear",
        slideUp: "slideUp 0.3s linear",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      backgroundImage: {
        slider:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url('./assets/img/slider.jpg')",
      },
    },
  },
  plugins: [],
};
