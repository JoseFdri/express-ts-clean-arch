import { Router } from 'express'

import { adaptRoute } from "../adapters";
import { makeEmployeeController } from "../factories";

export const employeeRoutes = (router: Router): void => {
    router.post('/employee', adaptRoute(makeEmployeeController()));
}
