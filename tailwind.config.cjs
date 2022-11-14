/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"meta": "#A02279",
			},
			backgroundImage: {
				"buttonColor": "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
			},
		},
	},
	plugins: [],
};
