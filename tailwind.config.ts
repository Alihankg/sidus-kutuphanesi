import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			keyframes: {
				stretchShrink: {
					'0%, 100%': { transform: 'scaleY(1)' }, // Normal size
					'50%': { transform: 'scaleY(1.05)' }, // Stretched size
				},
			},
			animation: {
				stretchShrink: 'stretchShrink 5s ease-in-out infinite',
			},
		},
	},
	plugins: [],
} satisfies Config
