import express from 'express';
import { CreateChampionController } from './controllers/champions/CreateChampionController';
import { ListChampionsController } from './controllers/champions/ListChampionsController';
import { FindByIdChampionController } from './controllers/champions/FindByIdChampionController';
import { UpdateChampionController } from './controllers/champions/UpdateChampionController';
import { DeleteChampionController } from './controllers/champions/DeleteChampionController';

const router = express.Router();

const createChampionController = new CreateChampionController();
const listChampionsController = new ListChampionsController();
const findByIdChampionController = new FindByIdChampionController();
const updateChampionController = new UpdateChampionController();
const deleteChampionController = new DeleteChampionController();

router.get('/champions', listChampionsController.handle);
router.post('/champions', createChampionController.handle);
router.get('/champions/:id', findByIdChampionController.handle);
router.put('/champions', updateChampionController.handle);
router.delete('/champions/:id', deleteChampionController.handle);

export { router };