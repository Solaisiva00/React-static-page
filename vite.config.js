import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    hmr:{
      overlay:false
    }
  },
  base:"./",
  plugins: [react()],
})
