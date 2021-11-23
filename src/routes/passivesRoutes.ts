import express from 'express';

import { CreatePassiveController } from '../controllers/passives/CreatePassiveController';
import { ListPassivesController } from '../controllers/passives/ListPassivesController';

const passivesRoutes = express.Router();

const createPassiveController = new CreatePassiveController();
const listPassivesController = new ListPassivesController();

passivesRoutes.post('/', createPassiveController.handle);
passivesRoutes.get('/', listPassivesController.handle);

export { passivesRoutes };