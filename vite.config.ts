import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { playwright } from '@vitest/browser-playwright'
import relay from 'vite-plugin-relay'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [relay, tailwindcss(), react()],
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [
        {
          browser: 'chromium',
          screenshotFailures: false
        }
      ]
    }
  }
})
