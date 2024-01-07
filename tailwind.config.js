/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {screens: {
    
    'xl': {'max': '1200px'},
    // => @media (max-width: 1200px) { ... }

    
    'md': {'max': '767px'},
    // => @media (max-width: 767px) { ... }

  },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

