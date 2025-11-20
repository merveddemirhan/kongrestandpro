// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Bu content satırı, Tailwind'e src klasöründeki tüm .js ve .jsx
  // dosyalarına bakmasını söyler. Bu satır yanlışsa, HİÇBİR stiliniz çalışmaz.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'koyu-lacivert': '#192A56',
      },
    },
  },
  plugins: [],
}