import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    proxy : {
      '/employee': {
        target: 'https://emp-flow-etm-u6a2.vercel.app',
        changeOrigin: true,
        secure: false,
      },
      '/task': {
        target: 'https://emp-flow-etm-u6a2.vercel.app',
        changeOrigin: true,
        secure: false,
      }
    },
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false, // Disable sourcemaps in production
  },
})
