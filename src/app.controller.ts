import { Request, Response } from 'express';
import { application } from './common/config/configuration';

const PORT = process.env.PORT || application.port;

class AppController {
    async default(req: Request, res: Response){
        
        return res.status(200).json({
                'API':'Heroes',
                'Sobre': 'Projeto desenvolvido como requisito de seleção para a APP Masters',
                'Porta': PORT
            });
    }

}

export { AppController };
