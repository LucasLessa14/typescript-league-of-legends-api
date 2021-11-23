import express from 'express';

import { CreateChampionController } from '../controllers/champions/CreateChampionController';
import { ListChampionsController } from '../controllers/champions/ListChampionsController';
import { FindChampionBySlugController } from '../controllers/champions/FindChampionBySlugController';
import { UpdateChampionController } from '../controllers/champions/UpdateChampionController';
import { DeleteChampionController } from '../controllers/champions/DeleteChampionController';

const championsRoutes = express.Router();

const createChampionController = new CreateChampionController();
const listChampionsController = new ListChampionsController();
const findChampionBySlugController = new FindChampionBySlugController();
const updateChampionController = new UpdateChampionController();
const deleteChampionController = new DeleteChampionController();

championsRoutes.post('/', createChampionController.handle);
championsRoutes.get('/', listChampionsController.handle);
championsRoutes.get('/:slug', findChampionBySlugController.handle);
championsRoutes.put('/:slug', updateChampionController.handle);
championsRoutes.delete('/:slug', deleteChampionController.handle);

export { championsRoutes };