const svgToDataUri = require("mini-svg-data-uri");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  images: {
    domains: ["contentsnare.com"],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #0000008F 5%, #0000008F 30%)",
        footerGradient: "linear-gradient(45deg, #EB7424, #9D4810)",
      },
      backgroundColor: {
        chaosBlack: "#101010",
        eerieBlack:"#1A1A1A",
        ruinedSmores: "#0E0F13",

      },
      colors: {
        primary: {
          light: "#FFFFFF99",
          DEFAULT: "#EE6E24",
          normal: "#FFFFFFE5",
          dark: "#4c1d95",
          hover: "#ed9866",
          pill: "#FFFFFF1A",
          borderColor: "#B1B1B1",
          imageTestColor: "#2F2B43",
        },

        gradient: {
          gradient_orange: "#EB7424",
          gradient_brown: "#9D4810",
        },
        secondary: {
          light: "#9C9C9C",
          DEFAULT: "#10b981",
          dark: "#059669",
          hover: "#ea580c",
          inputColor: "#0E0F13",
          bannerPill: "#1b1b1d",
          borderDark: "#1F1F1F",
        },
        accent: {
          light: "#fbbf24",
          DEFAULT: "#f59e0b",
          dark: "#d97706",
        },
        neutral: {
          light: "#f3f4f6",
          DEFAULT: "#ffffff",
          dark: "#d1d5db",
        },
        danger: "#ef4444",
        warning: "#f59e0b",
        success: "#10b981",
        info: "#3b82f6",
      },
      fontFamily: {
        inter: ["var(--inter)"],
        unbound: ["var(--unbound)"],
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="90" height="90" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-medium": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50" height="50" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
