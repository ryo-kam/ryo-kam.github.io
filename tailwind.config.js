/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        backgroundLighter: "var(--backgroundLighter)",
      },
    },
    screens: {
      sm: "576px",

      md: "960px",

      lg: "1263px",

      xl: "1440px",
    },
  },
  plugins: [],
};
