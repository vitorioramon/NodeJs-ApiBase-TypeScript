import jwt from 'jsonwebtoken';

export class TokenService {
    static criarToken = async (data: object) => {
        const chaveSeguranca = process.env.CHAVE_SEGURANCA as string;
        
        return jwt.sign(
            data, 
            chaveSeguranca, 
            { 
                subject: '', // Entidade à quem o token pertence, normalmente o ID do usuário;
                issuer: '', // Emissor do token;
                expiresIn: '10m', // Timestamp de quando o token irá expirar;
                audience: '', // Destinatário do token, representa a aplicação que irá usá-lo.
            }
        );
    }
    
    static lerToken = async (token: string) => {
        const chaveSeguranca = process.env.CHAVE_SEGURANCA as string;

        return await jwt.verify(
            token, 
            chaveSeguranca
        );
    }
}