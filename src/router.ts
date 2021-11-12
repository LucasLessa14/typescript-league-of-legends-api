import express from 'express';

import { CreateChampionController } from './controllers/champions/CreateChampionController';
import { ListChampionsController } from './controllers/champions/ListChampionsController';
import { FindByIdChampionController } from './controllers/champions/FindByIdChampionController';
import { UpdateChampionController } from './controllers/champions/UpdateChampionController';
import { DeleteChampionController } from './controllers/champions/DeleteChampionController';

import { CreateChampionRoleController } from './controllers/championRoles/CreateChampionRoleController';
import { ListChampionRolesController } from './controllers/championRoles/ListChampionRolesController';
import { DeleteChampionRoleController } from './controllers/championRoles/DeleteChampionRoleController';

import { CreateChampionLaneController } from './controllers/championLanes/CreateChampionLaneController';
import { ListChampionLanesController } from './controllers/championLanes/ListChampionLanesController';
import { DeleteChampionLaneController } from './controllers/championLanes/DeleteChampionLaneController';

const router = express.Router();

const createChampionController = new CreateChampionController();
const listChampionsController = new ListChampionsController();
const findByIdChampionController = new FindByIdChampionController();
const updateChampionController = new UpdateChampionController();
const deleteChampionController = new DeleteChampionController();

const createChampionRoleController = new CreateChampionRoleController();
const listChampionRolesController = new ListChampionRolesController();
const deleteChampionRoleController = new DeleteChampionRoleController();

const createChampionLaneController = new CreateChampionLaneController();
const listChampionLanesController = new ListChampionLanesController();
const deleteChampionLaneController = new DeleteChampionLaneController();

router.get('/champions', listChampionsController.handle);
router.get('/champions/:id', findByIdChampionController.handle);
router.post('/champions', createChampionController.handle);
router.put('/champions', updateChampionController.handle);
router.delete('/champions/:id', deleteChampionController.handle);

router.post('/champions/championRoles', createChampionRoleController.handle);
router.get('/champions/championRoles', listChampionRolesController.handle);
router.delete('/champions/championRoles/:id', deleteChampionRoleController.handle);

router.post('/champions/championLanes', createChampionLaneController.handle);
router.get('/champions/championLanes', listChampionLanesController.handle);
router.delete('/champions/championLanes/:id', deleteChampionLaneController.handle);

export { router };