/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        white:"#FAFAFA",
        blue: "hsla(202, 87%, 54%, 1)",
        green: "hsla(165, 58%, 33%, 1)",
        black: "hsla(228, 28%, 20%, 1)",
        light_gray: "hsla(0, 0%, 74%, 1)",
        dark_gray: "hsla(0, 0%, 45%, 1)",
        gray: "hsla(0, 0%, 52%, 1)",
        dark_blue: "hsla(228, 28%, 20%, 1)",
      },
    },
  },
  plugins: [],
};
