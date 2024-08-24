import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
  mode: 'jit',
	theme: {
		extend: {
      fontFamily: {
        sans: ['Muli', ...defaultTheme.fontFamily.sans],
      },
      backgroundOpacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9'
      },
    },
	},

	plugins: [
    require('tailwindcss-animate'),
  ],
}
