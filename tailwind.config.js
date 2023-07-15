/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      screens: {
        sm: "600px",
        mijin:"800px",
        md: "1210px",
        lg: "1400px",
        xl: "1600px",
      },
    },
  plugins: [],
}

