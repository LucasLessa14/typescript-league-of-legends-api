import express from 'express';
import { CreateChampionController } from './controllers/champions/CreateChampionController';
import { ListChampionsController } from './controllers/champions/ListChampionsController';
import { CreateChampionRoleController } from './controllers/championRoles/CreateChampionRoleController';
import { ListChampionRolesController } from './controllers/championRoles/ListChampionRolesController';
import { ListChampionLanesController } from './controllers/championLanes/ListChampionLanesController';
import { CreateChampionLaneController } from './controllers/championLanes/CreateChampionLaneController';

const router = express.Router();

const createChampionController = new CreateChampionController();
const listChampionsController = new ListChampionsController();
const createChampionRoleController = new CreateChampionRoleController();
const listChampionRolesController = new ListChampionRolesController();
const listChampionLanesController = new ListChampionLanesController();
const createChampionLaneController = new CreateChampionLaneController();

router.get('/champions', listChampionsController.handle);
router.post('/champions', createChampionController.handle);
router.get('/champions/championRoles', listChampionRolesController.handle);
router.post('/champions/championRoles', createChampionRoleController.handle);
router.get('/champions/championLanes', listChampionLanesController.handle);
router.post('/champions/championLanes', createChampionLaneController.handle);

export { router };