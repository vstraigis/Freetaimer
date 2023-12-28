/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      one: 'rgb(var(--color-one) / 1)',
      two: 'rgb(var(--color-two) / 1)',
      three: 'rgb(var(--color-three) / 1)',
      four: 'rgb(var(--color-four) / 1)',
      five: 'rgb(var(--color-five) / 1)',
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

