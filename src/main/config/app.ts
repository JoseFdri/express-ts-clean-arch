import express, { Express } from 'express';
import { setupRoutes } from './';

export const setupApp = (): Express => {
    const app = express();
    setupRoutes(app);
    return app;
}