import expresso from '@expresso/app'
import { createApp } from '@expresso/router'
import { getRoutes } from './endpoints'

export const appFactory = expresso((app) => {
  const routes = getRoutes()

  app.get('/hello', (_req, res) => res.send('Hello world!'))

  createApp({
    app,
    openApiInfo: {
      info: {
        title: 'Nivercon API',
        version: '1.0.0',
        description: 'API used to demonstrate expresso at nivercon',
        contact: {
          name: 'Roz',
          email: 'roz@rjmunhoz.me'
        },
        license: {
          name: 'GPL-3.0',
          url: 'https://spdx.org/licenses/GPL-3.0-only.html'
        }
      },
      openapi: '3.0.1'
    },
    routing: routes,
    documentation: {
      fs: {
        format: 'yaml',
        path: './swagger.yaml'
      },
      json: true,
      yaml: true,
      ui: {
        endpoint: '/docs'
      }
    }
  })
})
