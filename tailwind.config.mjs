/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#FFB800',
				foreground: '#1F1F1F',
				background: '#EFEFEF'
			},
			fontFamily: {
				title: ["Silkscreen", ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
}
