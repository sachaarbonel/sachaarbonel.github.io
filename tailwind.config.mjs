/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
				background: 'rgb(var(--color-background) / <alpha-value>)',
				basecolor: 'rgb(var(--color-base) / <alpha-value>)',
			},
			fontFamily: {
				title: ["Silkscreen", ...defaultTheme.fontFamily.sans]
			},
			keyframes: {
        wiggle: {
          // '0%, 100%': { transform: '' },
          '50%': { opacity: '10%' },
        }
      },
			animation: {
        wiggle: 'wiggle 1s ease infinite',
      }
		},
	},
	plugins: [],
	darkMode: 'class'
}
