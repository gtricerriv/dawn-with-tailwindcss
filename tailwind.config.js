import remToPxPlugin from 'tailwindcss-rem-to-px';
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
	prefix: 'tw-',
  important: true,
	content: [
		'./layout/*.liquid',
		'./templates/*.liquid',
		'./templates/customers/*.liquid',
		'./sections/*.liquid',
		'./snippets/*.liquid',
	],
	theme: {
		screens: {
			'md': '750px',
			'lg': '990px',
			'xl': '1440px',
			'2xl': '1920px',
			'3xl': '2100px'
		},
		extend: {},
		colors: {
			...colors,
		}
	},
	plugins: [
		remToPxPlugin({
			baseFontSize: 16,
		})
	],
}