import express from "express";

import { CreateChampionLaneController } from '../controllers/championLanes/CreateChampionLaneController';
import { ListChampionLanesController } from '../controllers/championLanes/ListChampionLanesController';
import { DeleteChampionLaneController } from '../controllers/championLanes/DeleteChampionLaneController';

const lanesRoutes = express.Router();

const createChampionLaneController = new CreateChampionLaneController();
const listChampionLanesController = new ListChampionLanesController();
const deleteChampionLaneController = new DeleteChampionLaneController();

lanesRoutes.post('/', createChampionLaneController.handle);
lanesRoutes.get('/', listChampionLanesController.handle);
lanesRoutes.delete('/:laneName', deleteChampionLaneController.handle);

export { lanesRoutes };