/** @type {import('tailwindcss').Config} */
console.log("test");
module.exports = {
  content: [
		'./templates/**/*.twig',
		'./templates/**/*.html',
		'./assets/scripts/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
    },
    colors: {
        transparent: 'transparent',
        'white': '#fff',
        'black': '#10132D',
        'dark-gray': '#545774',
        'light-gray': '#EBEFF5',
        'light-blue': '#EEF4FF',
        'blue': '#BFD7FF',
        'mid-blue': '#788BFF',
        'dark-blue': '#5465FF',
        'red': '#FF5A54',
        'light-red': '#FF7A84',
    },
    extend: {},
  },
  plugins: [],
}
