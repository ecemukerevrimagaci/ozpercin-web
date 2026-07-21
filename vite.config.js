import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 5188,
    strictPort: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'hakkimizda.html'),
        products: resolve(__dirname, 'urunler.html'),
        production: resolve(__dirname, 'uretim.html'),
        quality: resolve(__dirname, 'kalite.html'),
        contact: resolve(__dirname, 'iletisim.html'),
      },
      output: {
        entryFileNames: 'assets/[name]-[hash]-v101.js',
        chunkFileNames: 'assets/[name]-[hash]-v101.js',
        assetFileNames: 'assets/[name]-[hash]-v101.[ext]'
      }
    }
  }
});
