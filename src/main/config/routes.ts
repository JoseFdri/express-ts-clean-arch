import { Express, Router } from 'express'
import { employeeRoutes } from '@/main/routes'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  employeeRoutes(router)
}
