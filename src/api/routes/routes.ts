import { Router } from 'express';
import { AppController } from '../../app.controller';
import { HeroesController } from '../heroes/heroes.controller';

const router = Router();

const appController = new AppController();
const heroesController = new HeroesController();

router.get('/', appController.default);
router.get('/allHeroes', heroesController.getAll);
router.get('/heroes/:slug', heroesController.getBySlug);
router.get('/search/:q', heroesController.searchByQuery);

export { router };