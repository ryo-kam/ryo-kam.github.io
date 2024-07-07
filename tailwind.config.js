/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    screens: {
      sm: "576px",

      md: "960px",

      lg: "1263px",

      xl: "1440px",
    },
  },
  plugins: [],
};
