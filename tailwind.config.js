/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		theme: {
			screens: {
				xs: { max: '100px' },
				sm: { max: '640px' },
				// => @media (max-width: 640px) { ... }

				md: { max: '768px' },
				// => @media (max-width: 768px) { ... }

				lg: { max: '1024px' },
				// => @media (max-width: 1024px) { ... }

				xl: { max: '1280px' },
				// => @media (max-width: 1280px) { ... }

				'xl-2': { max: '1536px' },
				// => @media (max-width: 1536px) { ... }
			},
		},
	},
	darkMode: 'class',
	plugins: [],
}
