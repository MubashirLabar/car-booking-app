const colors = require("./src/styles/colors");

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        Light: ["Montserrat_300Light"],
        Regular: ["Montserrat_400Regular"],
        Medium: ["Montserrat_500Medium"],
        SemiBold: ["Montserrat_600SemiBold"],
        Bold: ["Montserrat_700Bold"],
        urduRegular: ["Urdu_400Regular"],
        urduMedium: ["Urdu_500Medium"],
        urduSemiBold: ["Urdu_600SemiBold"],
      },
      borderRadius: {
        "4xl": "40px",
        "5xl": "48px",
        "10xl": "88px",
      },
    },
  },
  plugins: [],
};
