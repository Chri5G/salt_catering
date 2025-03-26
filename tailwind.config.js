/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // This ensures Tailwind scans your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

