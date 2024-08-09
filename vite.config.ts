import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base:"https://petrunkito.github.io/test-deploy/",
	plugins: [sveltekit()]
});
