/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        montserrat:'montserrat',
        lato:'lato',
        firacode:'fira code',
        manrope:'manrope',

      }
    }
  },
  plugins: []
};
