import express from 'express';

import { CreateChampionPassiveController } from '../controllers/championPassives/CreateChampionPassiveController';
import { ListChampionPassivesController } from '../controllers/championPassives/ListChampionPassiveController';

const passivesRoutes = express.Router();

const createChampionPassiveController = new CreateChampionPassiveController();
const listChampionPassivesController = new ListChampionPassivesController();

passivesRoutes.post('/', createChampionPassiveController.handle);
passivesRoutes.get('/', listChampionPassivesController.handle);

export { passivesRoutes };