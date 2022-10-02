/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			boxShadow: {
				light: 'inset 0 -1px 0 0 hsla(0,0%,100%,.1)',
				dark: 'inset 0 -1px 0 0 hsla(0,0%,0%,.1)',
			},
			keyframes: {
				typing: {
					'0%': {
						width: 0,
					},
					'100%': {
						width: '100%',
					},
				},
				blinkCaret: {
					'from, to': {
						borderColor: 'transparent',
					},
					'50%': {
						borderColor: 'orange',
					},
				},
			},
			animation: {
				typing: 'typing 3.5s steps(40, end), blinkCaret .75s step-end infinite',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
