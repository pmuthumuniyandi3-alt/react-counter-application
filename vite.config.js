import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Vite plugin to serve dev.html during local development with HMR
function devHtmlPlugin() {
  return {
    name: 'dev-html-rewrite',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/' || req.url === '/index.html') {
          req.url = '/dev.html';
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), devHtmlPlugin()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'dev.html'),
      },
    },
  },
});
