import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://cdn.jsdelivr.net/gh/thesimplegithub/mask-mycolor@gh-pages/',
  server: {
    port: 3000,
    host: true,
    https: true,
  },
  plugins: [react(), mkcert()],
  build: {
    sourcemap: false,
  },
});
