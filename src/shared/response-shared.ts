import { Response } from "express";
import { ApplicationInfo } from "./application-info";

export class Respostas {
    static naoAutorizado = (response: Response, mensagem: string = '') => {
        response.status(401).json({
            version: ApplicationInfo.Versao,
            error: mensagem || 'Acesso restrito'
        });
    };
    
    static tokenInvalido = (response: Response, mensagem: string = '') => {
        response.status(401).json({
            version: ApplicationInfo.Versao,
            error: mensagem || 'Token inválido.'
        });
    };
    
    static ok = (response: Response, mensagem: string = '', objeto: any) => {
        response.status(200).json({
            version: ApplicationInfo.Versao,
            success: mensagem || 'OK',
            result: objeto
        })
    }
}