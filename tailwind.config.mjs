/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin')

// Gradient Plugin
const radialGradientPlugin = plugin(
	function ({ matchUtilities, theme }) {
		matchUtilities(
			{
				// map to bg-radient-[*]
				'bg-radient': value => ({
					'background-image': `radial-gradient(${value},var(--tw-gradient-stops))`,
				}),
			},
			{ values: theme('radialGradients') }
		)
	},
	{
		theme: {
			radialGradients: _presets(),
		},
	}
)

// Utility class presets
function _presets() {
	const shapes = ['circle', 'ellipse'];
	const pos = {
		c: 'center',
		t: 'top',
		b: 'bottom',
		l: 'left',
		r: 'right',
		tl: 'top left',
		tr: 'top right',
		bl: 'bottom left',
		br: 'bottom right',
	};
	let result = {};
	for (const shape of shapes)
		for (const [posName, posValue] of Object.entries(pos))
			result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

	return result;
}

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
				title: ["Allura", ...defaultTheme.fontFamily.sans],
				sans: ["Manrope", ...defaultTheme.fontFamily.sans]
			},
			keyframes: {
				wiggle: {
					// '0%, 100%': { transform: '' },
					'50%': { opacity: '50%' },
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease infinite',
			}
		},
	},
	plugins: [radialGradientPlugin],
	darkMode: 'class'
}
