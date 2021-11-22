import express from 'express';

import { CreateChampionController } from '../controllers/champions/CreateChampionController';
import { ListChampionsController } from '../controllers/champions/ListChampionsController';
import { FindByNameChampionController } from '../controllers/champions/FindByNameChampionController';
import { UpdateChampionController } from '../controllers/champions/UpdateChampionController';
import { DeleteChampionController } from '../controllers/champions/DeleteChampionController';

const championsRoutes = express.Router();

const createChampionController = new CreateChampionController();
const listChampionsController = new ListChampionsController();
const findByNameChampionController = new FindByNameChampionController();
const updateChampionController = new UpdateChampionController();
const deleteChampionController = new DeleteChampionController();

championsRoutes.get('/', listChampionsController.handle);
championsRoutes.get('/:championName', findByNameChampionController.handle);
championsRoutes.post('/', createChampionController.handle);
championsRoutes.put('/', updateChampionController.handle);
championsRoutes.delete('/:championName', deleteChampionController.handle);

export { championsRoutes };