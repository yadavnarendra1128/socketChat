import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000", // Replace 5000 with your backend port
    },
  },
  build: {
    outDir: "./dist",
  },
});
