import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    base: '/fyp-web-app/',
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // If you have an API, you can proxy requests starting with /api
    },
  },
  optimizeDeps: {
    include: ['@babel/preset-env'],
  },
  // Add a second build for the root URL
  build: {
    outDir: 'dist-root', // Choose a different output directory for the root build
    base: '/', // Set the base URL to root
  },
});
