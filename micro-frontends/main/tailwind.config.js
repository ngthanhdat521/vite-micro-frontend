/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f5f3ff',
					100: '#ede9fe',
					200: '#ddd6fe',
					300: '#c4b5fd',
					400: '#a78bfa',
					500: 'rgb(79, 70, 229)',
					600: 'rgb(79, 70, 229)',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95',
					950: '#2e1065'
				}
			}
		},
		fontFamily: {
			base: ['"Inter var", sans-serif', ...fontFamily.sans]
		}
	},
	plugins: []
};
