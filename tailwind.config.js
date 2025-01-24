/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#111117',
        secondary: '#F4F4FB',
        accent: '#000000',
      },
    },
  },
  plugins: [],
}

