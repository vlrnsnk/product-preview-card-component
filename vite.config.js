import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/product-preview-card-component/' : '/',

  server: {
    open: true,
    port: 5173,
    strictPort: true,
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
}));
