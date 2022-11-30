import { Router } from 'express'

import { adaptRoute } from '@/main/adapters'
import { makeAddEmployeeController, makeLoadEmployeeController } from '@/main/factories'
import { auth } from '@/main/middlewares'

export const employeeRoutes = (router: Router): void => {
  router.post('/employees', auth, adaptRoute(makeAddEmployeeController()))
  router.get('/employees', auth, adaptRoute(makeLoadEmployeeController()))
}
