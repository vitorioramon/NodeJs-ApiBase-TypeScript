import {Respostas} from '../shared/response-shared'; 
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export class AuthorizationService {
    static usuarioLogado = (req: Request, res: Response, next: NextFunction) => {
        const token = (req.headers['x-access-token'] as string);
        const chaveSeguranca = (process.env.CHAVE_SEGURANCA as string);

        if (!token) {
            Respostas.naoAutorizado(res);
        } else {
            jwt.verify(token as string, chaveSeguranca, function (error, decoded) {
                if (error) {
                    Respostas.tokenInvalido(res);
                } else {
                    next();
                }
            });
        }
    };
    
    static administrador = (req: Request, res: Response, next: NextFunction) => {
        const token = (req.headers['x-access-token'] as string);
        const chaveSeguranca = (process.env.CHAVE_SEGURANCA as string);
    
        if (!token) {
            Respostas.naoAutorizado(res);
        } else {
            jwt.verify(token, chaveSeguranca, function (error, decoded) {
                if (error) {
                    Respostas.tokenInvalido(res);
                } else {
                    const _decoded = (decoded as jwt.JwtPayload);
                    if (_decoded.roles && _decoded.roles.includes && _decoded.roles.includes('admin')) {
                        next();
                    } else {
                        Respostas.naoAutorizado(res, 'Área restrita');
                    }
                }
            });
        }
    };
}