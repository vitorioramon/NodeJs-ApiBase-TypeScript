import { Application } from 'express';
import { homeRouter} from './home-route';

export class CoreRoute {
    public carregarRotas = (app: Application) => {
        app.use('/', homeRouter);
    };
}
