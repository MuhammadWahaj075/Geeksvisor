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
        "footerGradient": "linear-gradient(45deg, #EB7424, #9D4810)",
        'card-gradient': 'linear-gradient(180deg, #EB7424 0%, #DE5B10 100%)',
      },
      backgroundColor: {
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
};

