/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      boxShadow:{
        myShadow1: '4.1px -5px 0 0 rgb(9, 9, 11)',
        myShadow2: '-4.1px -5px 0 0 rgb(9, 9, 11)',
      }
    },
  },
  plugins: [],
}