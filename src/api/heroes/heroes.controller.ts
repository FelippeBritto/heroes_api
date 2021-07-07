import { Request, Response } from 'express';
import { getAll, getBySlug, searchByQuery } from './heroes.service';

class HeroesController {
    
    async getAll(req: Request, res: Response){
        try{
            let response = await getAll();
            
            return res.status(200).send(response);
        } catch(err) {
            return res.status(500).json(err.message)
        }
    }

    async getBySlug(req: Request, res: Response){
        try{ 
            let slug = req.params.slug
            let response = await getBySlug(slug);
            
            res.status(200).send(response);
        } catch(err){
            res.json(err);
        };
    };

    async searchByQuery(req: Request, res: Response, ){
       try{
           let query = req.query.q;   
           let response = await searchByQuery(query);
           
           res.status(200).send(response);
        } catch(err){
            res.json(err)
        };
     };
};

export { HeroesController };