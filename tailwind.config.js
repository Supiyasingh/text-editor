/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        fontFamily: {
          arial: ["Arial", "sans-serif"],
          georgia: ["Georgia", "serif"],
          courier: ["Courier New", "monospace"],
          verdana: ["Verdana", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  