import express from 'express';
import { CreateChampionController } from './controllers/champions/CreateChampionController';
import { ListChampionsController } from './controllers/champions/ListChampionsController';

const router = express.Router();

const createChampionController = new CreateChampionController();
const listChampionsController = new ListChampionsController();

router.get('/champions', listChampionsController.handle);
router.post('/champions', createChampionController.handle);

export { router };