import express from 'express';
import { CreateChampionController } from './controllers/champions/CreateChampionController';
import { ListChampionsController } from './controllers/champions/ListChampionsController';
import { ChampionRoleController } from './controllers/championRoles/CreateChampionRolesController';
import { ListChampionRolesController } from './controllers/championRoles/ListChampionRolesController';

const router = express.Router();

const createChampionController = new CreateChampionController();
const listChampionsController = new ListChampionsController();
const createChampionRoleController = new ChampionRoleController();
const listChampionRolesController = new ListChampionRolesController();

router.get('/champions', listChampionsController.handle);
router.post('/champions', createChampionController.handle);
router.get('/champions/championRoles', listChampionRolesController.handle);
router.post('/champions/championRoles', createChampionRoleController.handle);

export { router };