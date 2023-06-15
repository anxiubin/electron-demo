/** @type {import('tailwindcss').Config} */

import colors from './src/renderer/src/app/constants/colors'

module.exports = {
  content: ['./src/renderer/src/index.html', './src/renderer/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      guardians: colors
    }
  },
  plugins: []
}
