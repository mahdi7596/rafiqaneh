module.exports = {
  content: ["./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#fff",
        newBackgroundColor: "#FFEFF0",
        newPrimary: "#fb6068",
        newSurfaceText: "#212f4f",
        neutrals100: "#373f45",
        neutrals0: "#97A0AF",

        surfaceText: "#64748b",
        surfaceBorder: "#e5e7eb",
        mainColor: "#F67A2A",
        mainBlack: "#333333",

        mainGray: "#a5b1c2",
        darkBlack: "#334155",

        fardamoonPrimary: "#8946A6",
        // fardamoonPrimaryDark:"",
        // fardamoonPrimaryLight:"",

        // fasle no refaghat
        faslenoMainColor: "#E64E29",
        faslenoSecondaryColor: "#bd2b2b",
        backgroundClr: "#f2f2f2",

        // nahalDostiBeneshan
        nahalMain: "#37b2ad",
        nahalSecondary: "#909090",

        gray: {
          600: "#606060",
        },
      },
      fontFamily: {
        exblackYekan: ["exblack-yekan"],
        blackYekan: ["black-yekan"],
        exboldYekan: ["exbold-yekan"],
        boldYekan: ["bold-yekan"],
        medYekan: ["med-yekan"],
        yekan: ["yekan"],
        lightYekan: ["light-yekan"],
        thinYekan: ["thin-yekan"],
      },

      spacing: {
        13: "3.25rem",
      },
      screens: { customMobile: "505px", customMid: "980px" },
      animation: {
        pingDelay: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
