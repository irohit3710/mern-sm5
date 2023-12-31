module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_orange: { A100: "#efa485", A200: "#e56135" },
        lime: { 500: "#dae233", "500_01": "#cddc36" },
        blue_gray: {
          50: "#ecedef",
          100: "#d8d9db",
          200: "#a9aeb8",
          400: "#898989",
          700: "#525252",
          900: "#2d2d2d",
          "100_01": "#d9d9db",
          "200_01": "#a1c7d2",
          "50_01": "#edeef0",
        },
        blue: { A700: "#2f6ce5" },
        black: {
          900: "#000000",
          "900_90": "#00000090",
          "900_1e": "#0000001e",
          "900_87": "#00000087",
          "900_99": "#00000099",
          "900_72": "#00000072",
          "900_14": "#00000014",
        },
        green: { 500: "#46b746", 600: "#27a365", A700: "#02b875" },
        teal: { 100: "#b8dfe3", 800: "#008944" },
        gray: {
          100: "#f2f2f2",
          200: "#edeeef",
          300: "#e0e0e0",
          400: "#bfbfc0",
          500: "#979899",
          600: "#808080",
          700: "#5c5d5d",
          800: "#3d3d3d",
          "100_02": "#f6f7f9",
          "400_01": "#b7b7b7",
          "100_01": "#eefff4",
          "700_02": "#696a6b",
          "700_01": "#5b5b5b",
        },
        orange: { A100: "#f7d471" },
        white: { A700_01: "#fffffe", A700: "#ffffff" },
      },
      fontFamily: { ibmplexsans: "IBM Plex Sans" },
      boxShadow: {
        bs: "0px 1px  2px 0px #0000001e",
        bs1: "0px 0px  2px 0px #00000014",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#00000072,#00000099)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
