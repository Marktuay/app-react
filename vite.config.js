import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/app-react/', // Usa el nombre exacto de tu repositorio aquí
})