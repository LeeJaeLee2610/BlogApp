/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      logofami: ["Indie Flower", "cursive", "sans-serif"],
    },
    screens: {
      xl: "1440px",
    },
    fontSize: {
      su: ["16px", "24px"],
      li: ["16px", "24px"],
      base: ["16px", "22px"],
      logo: ["28px", "36px"],
      login: ["30px", "40px"],
      btn_login: ["18px", "25px"],
      sa: ["14px", "20px"],
      fn: ["12px", "15px"],
    },
    extend: {
      colors: {
        sac: "rgba(22, 24, 35, 0.75)",
      },
    },
  },
  plugins: [],
};
