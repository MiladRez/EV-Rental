/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
  	],
	theme: {
		screens: {
			'xs': '450px', ...defaultTheme.screens,
			'car_disappear': [
				{ 'min': '930px', 'max': '1023px', ...defaultTheme.screens }
			]
		},
		extend: {
			fontFamily: {
				'sans': ["Poppins", "sans-serif"]		
			},
			scale: {
				'-100': '-1',
			},
			transitionProperty: {
				'max-height': 'max-height'
			}
		},
  	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}

