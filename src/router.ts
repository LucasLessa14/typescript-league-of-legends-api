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

import { CreateChampionPassiveController } from './controllers/championPassives/CreateChampionPassiveController';
import { ListChampionPassivesController } from './controllers/championPassives/ListChampionPassiveController';

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

const createChampionPassiveController = new CreateChampionPassiveController();
const listChampionPassivesController = new ListChampionPassivesController();

router.get('/champions', listChampionsController.handle);
router.get('/champions/id/:id', findByIdChampionController.handle);
router.post('/champions', createChampionController.handle);
router.put('/champions', updateChampionController.handle);
router.delete('/champions/id/:id', deleteChampionController.handle);

router.post('/champions/role', createChampionRoleController.handle);
router.get('/champions/role', listChampionRolesController.handle);
router.delete('/champions/role/id/:id', deleteChampionRoleController.handle);

router.post('/champions/lane', createChampionLaneController.handle);
router.get('/champions/lane', listChampionLanesController.handle);
router.delete('/champions/lane/id/:id', deleteChampionLaneController.handle);

router.post('/champions/passive', createChampionPassiveController.handle);
router.get('/champions/passive', listChampionPassivesController.handle);

export { router };