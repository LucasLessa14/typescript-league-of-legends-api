import express from 'express';

import { CreateChampionController } from './controllers/champions/CreateChampionController';
import { ListChampionsController } from './controllers/champions/ListChampionsController';
import { FindByNameChampionController } from './controllers/champions/FindByNameChampionController';
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

import { CreateSkillController } from './controllers/skills/CreateSkillController';
import { ListSkillsByChampionController } from './controllers/skills/ListSkillsByChampionController';

const router = express.Router();

const createChampionController = new CreateChampionController();
const listChampionsController = new ListChampionsController();
const findByNameChampionController = new FindByNameChampionController();
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

const createSkillsController = new CreateSkillController();
const listSkillsByChampionController = new ListSkillsByChampionController();


router.get('/champions', listChampionsController.handle);
router.get('/champions/:name', findByNameChampionController.handle);
router.post('/champions', createChampionController.handle);
router.put('/champions/:name', updateChampionController.handle);
router.delete('/champions/:name', deleteChampionController.handle);

router.post('/role', createChampionRoleController.handle);
router.get('/role', listChampionRolesController.handle);
router.delete('/role/:name', deleteChampionRoleController.handle);

router.post('/lane', createChampionLaneController.handle);
router.get('/lane', listChampionLanesController.handle);
router.delete('/lane/:name', deleteChampionLaneController.handle);

router.post('/passive', createChampionPassiveController.handle);
router.get('/passive', listChampionPassivesController.handle);

router.post('/skills', createSkillsController.handle);
router.get('/skills/:championName', listSkillsByChampionController.handle);

export { router };