import express from 'express';

import { CreateChampionController } from './controllers/champions/CreateChampionController';
import { ListChampionsController } from './controllers/champions/ListChampionsController';

import { CreateChampionRoleController } from './controllers/championRoles/CreateChampionRoleController';
import { ListChampionRolesController } from './controllers/championRoles/ListChampionRolesController';
import { DeleteChampionRoleController } from './controllers/championRoles/DeleteChampionRoleController';

import { CreateChampionLaneController } from './controllers/championLanes/CreateChampionLaneController';
import { ListChampionLanesController } from './controllers/championLanes/ListChampionLanesController';
import { DeleteChampionLaneController } from './controllers/championLanes/DeleteChampionLaneController';

const router = express.Router();

const createChampionController = new CreateChampionController();
const listChampionsController = new ListChampionsController();

const createChampionRoleController = new CreateChampionRoleController();
const listChampionRolesController = new ListChampionRolesController();
const deleteChampionRoleController = new DeleteChampionRoleController();

const createChampionLaneController = new CreateChampionLaneController();
const listChampionLanesController = new ListChampionLanesController();
const deleteChampionLaneController = new DeleteChampionLaneController();

router.post('/champions', createChampionController.handle);
router.get('/champions', listChampionsController.handle);

router.post('/champions/championRoles', createChampionRoleController.handle);
router.get('/champions/championRoles', listChampionRolesController.handle);
router.delete('/champions/championRoles/:id', deleteChampionRoleController.handle);

router.post('/champions/championLanes', createChampionLaneController.handle);
router.get('/champions/championLanes', listChampionLanesController.handle);
router.delete('/champions/championLanes/:id', deleteChampionLaneController.handle);

export { router };