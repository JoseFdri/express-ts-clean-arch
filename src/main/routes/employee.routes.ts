import { Router } from 'express'

import { adaptRoute } from "@/main/adapters";
import { makeAddEmployeeController } from "@/main/factories";

export const employeeRoutes = (router: Router): void => {
    router.post('/employee', adaptRoute(makeAddEmployeeController()));
}
