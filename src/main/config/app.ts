import express, { Express } from 'express'
import { setupRoutes, setupMiddlewares } from '@/main/config'

export const setupApp = (): Express => {
  const app = express()

  setupMiddlewares(app)
  setupRoutes(app)

  return app
}
