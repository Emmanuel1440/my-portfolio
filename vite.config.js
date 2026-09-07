import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   // Uses '/' on Vercel and '/my-portfolio/' on GitHub Pages
  base: process.env.VERCEL ? '/' : '/my-portfolio/',
})




