import express from 'express';
import { CreateChampionController } from './controllers/champions/CreateChampionController';
import { ListChampionsController } from './controllers/champions/ListChampionsController';
import { DeleteChampionController } from './controllers/champions/DeleteChampionController';

const router = express.Router();

const createChampionController = new CreateChampionController();
const listChampionsController = new ListChampionsController();
const deleteChampionController = new DeleteChampionController();

router.get('/champions', listChampionsController.handle);
router.post('/champions', createChampionController.handle);
router.delete('/champions/:id', deleteChampionController.handle);

export { router };