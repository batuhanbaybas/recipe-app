/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        secondary: "#F2F2F2",
        accent: "#FFC107",
        danger: "#F44336",
        success: "#4CAF50",
        info: "#2196F3",
        warning: "#FF9800",
        dark: "#212121",
        light: "#F5F5F5",
        white: "#FFFFFF",
        black: "#000000",
        transparent: "transparent"
      }
    }
  },
  plugins: []
};
