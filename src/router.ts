import express from 'express';

import { CreateChampionController } from './controllers/champions/CreateChampionController';
import { ListChampionsController } from './controllers/champions/ListChampionsController';

import { CreateChampionRoleController } from './controllers/championRoles/CreateChampionRoleController';
import { ListChampionRolesController } from './controllers/championRoles/ListChampionRolesController';

import { CreateChampionLaneController } from './controllers/championLanes/CreateChampionLaneController';
import { ListChampionLanesController } from './controllers/championLanes/ListChampionLanesController';
import { DeleteChampionLaneController } from './controllers/championLanes/DeleteChampionLaneController';

const router = express.Router();

const createChampionController = new CreateChampionController();
const listChampionsController = new ListChampionsController();

const createChampionRoleController = new CreateChampionRoleController();
const listChampionRolesController = new ListChampionRolesController();

const createChampionLaneController = new CreateChampionLaneController();
const listChampionLanesController = new ListChampionLanesController();
const deleteChampionLaneController = new DeleteChampionLaneController();

router.post('/champions', createChampionController.handle);
router.get('/champions', listChampionsController.handle);


router.post('/champions/championRoles', createChampionRoleController.handle);
router.get('/champions/championRoles', listChampionRolesController.handle);


router.post('/champions/championLanes', createChampionLaneController.handle);
router.get('/champions/championLanes', listChampionLanesController.handle);
router.delete('/champions/championLanes/:id', deleteChampionLaneController.handle);

export { router };