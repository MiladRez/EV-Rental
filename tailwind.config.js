/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
  	],
	theme: {
		screens: {
			'xs': '430px', ...defaultTheme.screens,
			'car_disappear': '880px', ...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				'sans': ["Poppins", "sans-serif"]		
			},
		},
  	},
  	plugins: [],
}

