import express, { NextFunction, Request, Response } from 'express';
import { CoreRoute } from './routes/core-route';
const requestLog = require('debug')('api-server:requestLog');

export class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.server.use(express.json());
        this.server.use(this.middlewareCors);
        this.server.use(this.middlewareLogRequest);

        const coreRoute = new CoreRoute();
        coreRoute.carregarRotas(this.server);
    }

    private middlewareCors = (req: Request, res: Response, next: NextFunction) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

        next();
    }

    private middlewareLogRequest = (req: Request, res: Response, next: NextFunction) => {
        requestLog(req.originalUrl);

        next();
    }
}