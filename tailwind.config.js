/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      signature_font: ["Great Vibes"],
    },
    width: {
      max_width: ["1000px"],
      full_width: ["100%"],
      socialIcon_width: ["160px"],
    },
  },
  plugins: [],
};
