module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url(./src/assets/svg/patternBg.svg)",
      },
      colors: {
        grad: "hsla(229, 61%, 45%, 1)",
        p: {
          lilac: "#2d46b9",
          purple: "#A63EC5",
          gray: "#DDDDDD",
          white: "#EEEEEE",
          green: "#5EB77C",
          yellow: "#FFD83B",
          dark: "#353333",
        },
      },
    },
  },
  plugins: [],
};
