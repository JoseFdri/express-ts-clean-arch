import { Express, Router } from 'express'

export default (app: Express) => {
    const router = Router();
    app.use('/api', router);
    
}