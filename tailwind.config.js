/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        grandRainbow: ['GrandRainbow', 'sans-serif'],
        winterMinie: ['WinterMinie', 'sans-serif'],
        mouseMemoirs: ['MouseMemoirs', 'sans-serif']
      },
      backgroundImage: {
        'desktop-background': 'url("/src/assets/images/background-desktop.svg")',
        'tablet-background': 'url("/src/assets/images/background-tablet.svg")',
        'mobile-background': 'url("/src/assets/images/background-mobile.svg")',
        play: 'url("/src/assets/images/play.svg")',
        'play-hover': 'url("/src/assets/images/play-hover.svg")',
      }
    }
  },
  plugins: [],
}

