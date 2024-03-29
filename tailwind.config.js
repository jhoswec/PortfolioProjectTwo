/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Montserrat",
    },
    screems: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
    },
    extend: {
      colors: {
        primary: "rgb(31 41 55)",
        secondary: "#6e8b9f",
        tertiary: "#e37c6c",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.webp')",
        "hero-pattern-w": "url('/src/assets/herobg white.webp')",
      },
    },
  },
  plugins: [],
};
