/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        "bg-ligth-cyan": "hsl(193, 38%, 86%)",
        "bg-neon-green": "hsl(150, 100%, 66%)",
        "grayish-blue": "hsl(217, 19%, 38%)",
        "dark-grayish-blue": "hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)",
      },
    },
  },
  plugins: [],
};
