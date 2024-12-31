/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope Variable', 'sans-serif'],
				mono: ['JetBrains Mono Variable', 'monospace']
			},
			colors: {
				foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
				background: 'rgb(var(--color-background) / <alpha-value>)',
			}
		},
	},
	plugins: [],
	darkMode: 'class'
}
