import express, { Express } from 'express';

export const setupMiddlewares = (app: Express): void => {
    app.use(express.json());
}
