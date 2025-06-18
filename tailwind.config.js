/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo-image': "url('/MocheesekyLogo.svg')",
        'profile': "url('/ProfilePicture.jpg')",
      },
      colors: {
        'red': '#f65052',
        'green': '#50D890',
        'blue': '#607adb',
        'dark': '#111',
        'light': '#fafafa',
      },
    },
  },
  // plugins: [require('tailwindcss-animate')],
};
