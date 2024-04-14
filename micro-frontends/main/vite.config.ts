import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: 'main',
			remotes: {
				layouts: 'http://localhost:3001/assets/remoteEntry.js'
			},
			shared: []
		})
	],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: resolve(__dirname, './src/')
			},
			{
				find: '@pages',
				replacement: resolve(__dirname, './src/pages/')
			},
			{
				find: '@routers',
				replacement: resolve(__dirname, './src/routers/')
			},
		]
	},
	build: {
		// modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false
		// assetsDir: ''
	}
});
