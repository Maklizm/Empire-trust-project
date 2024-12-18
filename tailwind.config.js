/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/asset 6.jpeg')",
        'hero-section': "url('/images/hero-image.jpeg')",
      }
    },
  },
  plugins: [],
}
