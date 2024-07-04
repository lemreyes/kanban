import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      lightGray: "#979797",
      linesLight: "#e4ebfa",
      mainPurple: "#635fc7",
      mediumGrey: "#828FA3",
      white: "#ffffff",
    },
    fontSize: {
      headingXL: "24px",
      headingL: "18px",
      headingM: "15px",
      headingS: "12px",
      bodyL: "13px",
      bodyM: "12px",
    },
    fontWeight: {
      headingXL: "bold",
      headingL: "bold",
      headingM: "bold",
      headingS: "bold",
      bodyL: "medium",
      bodyM: "bold",
    },
    lineHeight: {
      headingXL: "30px",
      headingL: "23px",
      headingM: "19px",
      headingS: "15px",
      bodyL: "23px",
      bodyM: "15px",
    },
    letterSpacing: {
      widest: '.15em'
    }
  },
  plugins: [],
};
export default config;
