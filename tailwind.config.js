/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: "Roboto, sans-serif",
      poppins: "Poppins, sans-serif",
      lato: "Lato, sans-serif",
    },
    extend: {
      colors: {
        'off-white': '#F5F5F5',
        'dark-slate-gray': '#2F4F4F',
        'light-gray': '#A9A9A9',
        'teal': '#008080',
        'muted-teal': '#E0F0F0'
      }
    },
  },
  plugins: [],
}
