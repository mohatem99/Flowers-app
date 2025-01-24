import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      colors: {
        "custom-rose": {
          50: "#FEEAF6",
          100: "#FED5EE",
          200: "#FDBFE5",
          300: "#FCAADD",
          400: "#FB95D4",
          500: "#FB80CB",
          600: "#FA6BC3",
          700: "#F955BA",
          800: "#F940B2",
          900: "#F82BA9",
        },
        "custom-blue": {
          50: "#E8E7ED",
          100: "#D0CFDB",
          200: "#B9B7C9",
          300: "#A29FB7",
          400: "#8A86A5",
          500: "#757F95",
          600: "#5C5681",
          700: "#453E6F",
          800: "#2D265D",
          900: "#160E4B",
        },
        "custom-violet": {
          50: "#F3EEFF",
          100: "#E8DCFF",
          200: "#DDCBFF",
          300: "#D1BAFF",
          400: "#C5A8FF",
          500: "#BA97FF",
          600: "#AF86FF",
          700: "#A375FF",
          800: "#9763FF",
          900: "#8C52FF",
        },
        "custom-green": {
          50: "#EBFBF6",
          100: "#D7F7ED",
          200: "#C4F3E3",
          300: "#B0EFDA",
          400: "#9CEBD1",
          500: "#88E8C8",
          600: "#74E4BF",
          700: "#61E0B5",
          800: "#4DDCAC",
          900: "#39D8A3",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindAnimate],
};
export default config;
