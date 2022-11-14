/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        poppinslight: ["PoppinsLight", "sans-serif"],
      },
      margin: {
        "auto-center": "3rem auto 6rem",
      },
      colors: {
        purple: "#6225E6",
        yellow: "#FBC638",
      },
    },
  },
  plugins: [],
};
