import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://tanya522.github.io/website-' // yahan tumhara GitHub repo ka naam
})
