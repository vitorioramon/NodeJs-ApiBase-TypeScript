import { NextFunction, Request, Response } from "express";
import { Respostas } from '../shared/response-shared';

export class HomeController {
    static get = (req: Request, res: Response, next: NextFunction) => {
        let data = {
            text: "Value of Text"
        };
        Respostas.ok(res, 'API Home running...', data);
    };
}
