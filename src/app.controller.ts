import { Request, Response } from 'express';
import { application } from './common/config/configuration';

class AppController {
    async default(req: Request, res: Response){
        
        return res.status(200).json({
                API:application.title,
                Sobre: application.description,
                VERSION: application.version
            });
    }

}

export { AppController };
