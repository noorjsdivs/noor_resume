/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        setBorder: "16px",
      },
      colors: {
        primary_color: "#0b132b",
        secondry_color: "#1c2541",
        extra_color: "#3a506b",
      },
      height: {
        logical: "230px",
      },
      width: {
        imagesWidth: "600px",
      },
    },
    fontFamily: {
      signature_font: "Great Vibes",
      body_font: "Poppins",
    },
  },
  plugins: [],
};
