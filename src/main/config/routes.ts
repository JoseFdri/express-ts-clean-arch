import { Express, Router } from 'express'
import { employeeRoutes } from '../routes';

export const setupRoutes = (app: Express) => {
    const router = Router();
    app.use('/api', router);
    employeeRoutes(router);
}