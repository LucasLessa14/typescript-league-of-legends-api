import express from 'express';
import { CreateChampionController } from './controllers/champions/CreateChampionController';
import { ListChampionsController } from './controllers/champions/ListChampionsController';

const router = express.Router();

const createChampionController = new CreateChampionController();
const listChampionsController = new ListChampionsController();

router.post('/champions', createChampionController.handle);
router.get('/champions', listChampionsController.handle);

export { router };