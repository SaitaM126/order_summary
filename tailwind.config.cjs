/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,tsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'desk':"url('./assets/pattern-background-desktop.svg')",
        'mobile':"url(./assets/pattern-background-mobile.svg')",
        'ilu-hero':"url(./assets/illustration-hero.svg')",
        'music':"url(./assets/icon-music.svg')"
        
      },
      colors: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'vpale-blue': 'hsl(225, 100%, 98%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'des-blue': 'hsl(224, 23%, 55%)',
        'dar-blue': 'hsl(223, 47%, 23%)'
      },
      fontFamily: {
        'red-hat': ['"Red Hat Display"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
