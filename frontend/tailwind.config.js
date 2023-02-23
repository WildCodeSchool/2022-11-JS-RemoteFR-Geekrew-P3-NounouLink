/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        "red-hat": ["Red Hat Text", "sans-serif"],
      },
      colors: {
        grey: "#4B5D68",
        "dark-blue": "#212353",
        purple: "#7E72F2",
        pink: "#F063A7",
        green: "#2DCD7A",
        "purple-linear":
          "linear-gradient(148.74deg, rgba(71, 79, 255, 0.9) 2.49%, #E37ACC 99.05%)",
        orange: "#FFA84C",
        "light-grey": "#E8E8E8",
        "purple-toggle": "#BB6BD9",
        "grey-placeholder": "#9696A0",
        "grey-input": "#B4B4BB",
        "transparent-purple": "rgba(148, 137, 251, 0.3)",
        "light-blue": "#F1F5F7",
        "gradient-purple": "rgba(71, 79, 255, 0.9)",
        "gradient-pink": "#E37ACC",
      },
      dropShadow: {
        button: "0 20px 40px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
