import path from "node:path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import type { InlineConfig } from "vitest"
import type { UserConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

})
