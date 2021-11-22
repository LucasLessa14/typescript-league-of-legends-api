import express from "express";

import { CreateChampionRoleController } from '../controllers/championRoles/CreateChampionRoleController';
import { ListChampionRolesController } from '../controllers/championRoles/ListChampionRolesController';
import { DeleteChampionRoleController } from '../controllers/championRoles/DeleteChampionRoleController';

const rotesRoutes = express.Router();

const createChampionRoleController = new CreateChampionRoleController();
const listChampionRolesController = new ListChampionRolesController();
const deleteChampionRoleController = new DeleteChampionRoleController();

rotesRoutes.post('/', createChampionRoleController.handle);
rotesRoutes.get('/', listChampionRolesController.handle);
rotesRoutes.delete('/:roleName', deleteChampionRoleController.handle);

export { rotesRoutes };