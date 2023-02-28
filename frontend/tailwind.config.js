/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        "red-hat": ["Red Hat Text", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        mds: "800px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        grey: "#4B5D68",
        "dark-blue": "#212353",
        purple: "#7E72F2",
        "dark-purple": "#882BFF",
        pink: "#F063A7",
        green: "#2DCD7A",
        "purple-linear":
          "linear-gradient(148.74deg, rgba(71, 79, 255, 0.9) 2.49%, #E37ACC 99.05%)",
        orange: "#FFA84C",
        "light-grey": "#E8E8E8",
        "purple-toggle": "#BB6BD9",
        "grey-placeholder": "#9696A0",
        "grey-input": "#DFDEDE",
        "transparent-purple": "rgba(148, 137, 251, 0.3)",
        "light-blue": "#F1F5F7",
        "gradient-purple": "rgba(71, 79, 255, 0.9)",
        "gradient-pink": "#E37ACC",
        black: "#1D0042",
        darkPurple: "#882AFF",
      },
      dropShadow: {
        button: "0 20px 40px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        button: "0 20px 40px rgba(0, 0, 0, 0.1)",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        // Complex site-specific row configuration
        connexion: "9.8rem minmax(0, 1fr) 6.25rem",
      },
      gridTemplateCols: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridColStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridColEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
    },
  },
  plugins: [],
};
