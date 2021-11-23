import express from "express";

import { CreateRoleController } from '../controllers/roles/CreateRoleController';
import { ListRolesController } from '../controllers/roles/ListRolesController';
import { UpdateRoleController } from '../controllers/roles/UpdateRoleController';
import { DeleteRoleController } from '../controllers/roles/DeleteRoleController';

const rotesRoutes = express.Router();

const createRoleController = new CreateRoleController();
const listRolesController = new ListRolesController();
const updateRoleController = new UpdateRoleController();
const deleteRoleController = new DeleteRoleController();

rotesRoutes.post('/', createRoleController.handle);
rotesRoutes.get('/', listRolesController.handle);
rotesRoutes.put('/:slug', updateRoleController.handle);
rotesRoutes.delete('/:slug', deleteRoleController.handle);

export { rotesRoutes };