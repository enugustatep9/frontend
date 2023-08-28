/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0CAD8E",
        secondary: "#F1DDC4",
      },
    },
    screens: {
      xs: "414px",
      sm: "320px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
