import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './'
  //base:  '/openbento-darkoos_04.fr/',
})
