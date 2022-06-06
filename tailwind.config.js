module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url('/src/assets/svg/patternBg.svg')",
      },
      colors: {
        grad: "hsla(229, 61%, 45%, 1)",
        p: {
          lilac: "#2d46b9",
          lilacDark: "#1D2E7A",
          purple: "#A63EC5",
          purpleDark: "#6F2985",
          gray: "#DDDDDD",
          white: "#EEEEEE",
          green: "#5EB77C",
          yellow: "#FFD83B",
          dark: "#353333",
          darkV: {
            200: "#827D7D",
            400: "#5E5B5B",
            500: "#353333",
            600: "#2B2A2A",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
