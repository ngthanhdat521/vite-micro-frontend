import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: 'pokemonList',
			filename: 'remoteEntry.js',
			exposes: {
				'./shared/master-page': './src/shared/components/containers/master-page'
			},
			shared: ['react']
		})
	],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: resolve(__dirname, './src/')
			},
			{
				find: '@shared',
				replacement: resolve(__dirname, './src/shared/')
			},
		]
	}
});
