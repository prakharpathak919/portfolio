import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change '/portfolio/' to '/<your-repo-name>/' if you rename the repo
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: { outDir: 'docs' }
})
