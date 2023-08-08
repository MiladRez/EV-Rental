/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
  	],
	theme: {
		screens: {
			'xs': '450px', ...defaultTheme.screens,
			'car_disappear': '930px', ...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				'sans': ["Poppins", "sans-serif"]		
			},
			scale: {
				'-100': '-1',
			}
		},
  	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}

