import { Request, Response } from 'express';
import { getAll, getBySlug, searchByQuery } from './heroes.service';

class HeroesController {
    
    async getAll(req: Request, res: Response){
        let response = await getAll();
        
        return res.status(200).send(response);
    }

    async getBySlug(req: Request, res: Response){
        let slug = req.params.slug
        let response = await getBySlug(slug);
           
        res.status(200).send(response)
    }

    async searchByQuery(req: Request, res: Response, ){
        let query = req.params.q   
        let response = await searchByQuery(query);

        res.status(200).send(response)
     }
}

export { HeroesController };