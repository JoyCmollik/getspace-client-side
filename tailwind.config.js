module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				dark: '#000000',
				brand: '#FF385C',
				light: '#F7F7F7',
				para: '#696969',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
