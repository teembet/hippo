//  @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      dark: "#2B2B2B",
      darker: "#101010",
      blue: "#264ABC",
      white: "#FFFFFF",
      muted: "#929292",
      grey: "#F2F2F2",
      customOpaque: "rgba(215, 224, 251, 0.32)",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".813rem",
      md: ".875rem",
      base: ".9rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "4xl": "2.25rem",
      17: "15px",
      37: "32px",
      35: "28px",
    },
    extend: {},
  },
  plugins: [],
};
