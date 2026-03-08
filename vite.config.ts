import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Utilisez './' ou le nom de votre dépôt '/openbento-darkoos_04.fr/'
})
