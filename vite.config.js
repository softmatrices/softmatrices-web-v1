import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'local-api-proxy',
      configureServer(server) {
        server.middlewares.use('/api/contact', async (req, res, next) => {
          if (req.method === 'POST') {
            let body = ''
            req.on('data', chunk => {
              body += chunk.toString()
            })
            req.on('end', async () => {
              try {
                const parsedBody = JSON.parse(body)
                const payload = {
                  ...parsedBody,
                  // Load environment variables via Vite's loadEnv helper if needed, 
                  // or rely on process.env being populated by Vite in older versions/specific setups.
                  // For simplicity in Vite config, we can access process.env if loaded correctly.
                  // However, let's use a direct fetch to Web3Forms.
                  access_key: process.env.VITE_WEB3FORMS_ACCESS_KEY
                }

                // We need to fetch from node here. 
                // Since this is running in Node context, 'fetch' is available in Node 18+.
                const response = await fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                  body: JSON.stringify(payload)
                })
                const data = await response.json()

                res.setHeader('Content-Type', 'application/json')
                res.statusCode = response.status
                res.end(JSON.stringify(data))
              } catch (error) {
                console.error('Local API Proxy Error:', error)
                res.statusCode = 500
                res.end(JSON.stringify({ success: false, message: error.message }))
              }
            })
          } else {
            next()
          }
        })
      }
    }
  ],
})
