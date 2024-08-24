/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,jsx,ts,tsx}", // Охватывает все нужные файлы
    "!./node_modules", // Исключает папку node_modules
  ],
  theme: {
    extend: {
      fontSize: {
        label1: ["117px", { fontWeight: "500" }],
        heading1: ["78px", { fontWeight: "700" }],
        heading2: ["55px", { fontWeight: "700" }],
        heading3: ["24px", { fontWeight: "700" }],
        heading4: ["18px", { fontWeight: "700" }],
        heading5: ["16px", { fontWeight: "700" }],
        body1: ["18px", { fontWeight: "400" }],
        body2: ["16px", { fontWeight: "400" }],
        overline: ["16px", { fontWeight: "700" }],
        button: ["18px", { fontWeight: "700" }],
      },
      colors: {
        base: "#000000",
        level1: "#181823",
        gray: {
          light: "deecf9",
          dark: "c7e0f4",
        },
        text: "#ffffff",
        primary: "#5221e6",
        accent: {
          green: "#3cc74e",
          pink: "#e95d90",
          peach: "#fff3e4",
          violet: "#fbe4ff",
        },
      },
    },
  },
  plugins: [],
};
