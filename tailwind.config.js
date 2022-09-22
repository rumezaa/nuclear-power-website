/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-cadet': "#383961",
        'terracota': "#ED6A5A",
        'bright-green': "#A1C349",
        'grey-teal': "#006C67"
      },
    },
  },
  plugins: [],
}
